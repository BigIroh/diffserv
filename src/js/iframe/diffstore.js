var patch = require('./patch'),
	JSONP = require('./JSONP'),
	DiffStore;

/**
 * @param {object} options
 * @param {string} [options.prefix='ds'] - prefix for localstorage
 * @param {string} [options.root='/'] - root URL to request from
 */
DiffStore = function (options) {
	this.root = '/';
	this.prefix = 'ds';
	this.localStorage = window.localStorage;
	this.next = {};

	if(options.root !== undefined) {
		this.root = options.root;
	}

	if(options.prefix !== undefined) {
		this.prefix = options.prefix;
	}
};

/**
 * Use this function if you want to serve up a page with a single 304
 * that gets required files' new versions. Useful if you have a lot of 
 * files and can tell on page load what version each file needs to be 
 * at to be current.
 *
 * @param {object} next - a mapping of filenames to up-to-date versions
 */
DiffStore.prototype.setNextVersions = function (next) {
	for(var filename in next) {
		this.next[filename] = next[filename];
	}
};

/**
 * Attaches a tag to the page to load an asset
 *
 * @param {string} filename
 * @param {function} callback
 */
DiffStore.prototype.get = function (filename, callback) {
	var cached = this.retrieveCachedCopy(filename),
		next = this.next[filename],
		query = {},
		ctx = this;
	
	if(cached) {
		query.version = cached.version;

		if(next) {
			if(next === cached.version) {
				setTimeout(function () {
					callback(cached);
				});
				return;
			}
			else {
				query.next = next;
			}
		}
		
		JSONP.get(this.root + filename, query, function (data) {
			ctx.saveCachedCopy(data.name, data.version, data.content);
			callback(ctx.retrieveCachedCopy(filename));
		});
	}
	else {
		JSONP.get(this.root + filename, query, function (data) {
			ctx.saveCachedCopy(data.name, data.version, data.content);
			callback(ctx.retrieveCachedCopy(filename));
		});
	}
};

/**
 * Retrieves a file from localstorage.
 * @param {string} filename
 * @return {bool|null|object} - Returns false if localstorage is not available.
 *	returns an object containing the filename and version if it is. Returns null if
 *	the file is not cached in localstorage.
 */
DiffStore.prototype.retrieveCachedCopy = function (filename) {
	var item;

	if(this.localStorage) {
		try {
			item = this.localStorage.getItem(this.prefix + '-' + filename);
			return JSON.parse(item);
		}
		catch(e) {
			return false;
		}
	}
	else {
		return false;
	}
};

/**
 * @param {string} filename
 * @param {string} version
 * @param {string} content
 */
DiffStore.prototype.saveCachedCopy = function (filename, version, content) {
	var item = {
		name: filename,
		version: version,
		content: content
	};

	if(this.localStorage) {
		try {
			this.localStorage.setItem(this.prefix + '-' + filename, JSON.stringify(item));
			return true;
		}
		catch(e) {
			return false;
		}
	}
	else {
		return false;
	}
};

module.exports = DiffStore;
