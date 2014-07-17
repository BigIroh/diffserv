(function () {

var DiffServ = function () {
	this.root = '/';
	this.prefix = 'ds';
	this.localStorage = window.localStorage;
	this.next = {};
};

/**
 * Use this function if you want to serve up a page with a single 304
 * that gets required files' new versions. Useful if you have a lot of 
 * files and can tell on page load what version each file needs to be 
 * at to be current.
 *
 * @param {object} next - a mapping of filenames to up-to-date versions
 */
DiffServ.prototype.setNextVersions = function (next) {
	for(var filename in next) {
		this.next[filename] = next[filename];
	}
};

/**
 * @param {object} options
 * @param {string} [options.prefix='ds'] - prefix for localstorage
 * @param {string} [options.root='/'] - root URL to request from
 */
DiffServ.prototype.setOptions = function (options) {
	if(options.root !== undefined) {
		this.root = options.root;
	}

	if(options.prefix !== undefined) {
		this.prefix = options.prefix;
	}
};

/**
 * Patches a string with a diff file
 * 
 * @param {string} original - the original string to patch
 * @param {object} delta - a delta file for patching
 * @return {string} - patched string
 */
DiffServ.prototype.patch = function (original, delta) {
	if(!delta) {
		return original;
	}
};

/**
 * @param {object} file
 * @param {string} file.name
 * @param {string} file.version
 * @param {string} [file.content]
 * @param {string} [file.delta]
 */
DiffServ.prototype.run = function (file) {
	var filenameParts = file.name.split('.'),
		extension = filenameParts[filenameParts.length - 1],
		body = document.body,
		cached,
		element,
		content,
		textNode;

	if(file.content) {
		if(extension === 'js') {
			textNode = document.createElement(file.content + '\n//# sourceURL=' + this.root + file.name);
		}
		else {
			textNode = document.createElement(file.content);
		}
		this.saveCachedCopy(file.name, file.version, file.content);
	}
	else if(file.delta) {
		cached = this.retrieveCachedCopy(file.name);
		
		if(cached) {
			content = this.patch(cached.content, file.delta);
			textNode = document.createElement(content);
			this.saveCachedCopy(file.name, file.version, content);
		}
		else {
			throw new Error('Fatal! Diff served, but file not in cache: ' + file.name);
		}
	}

	if(extension === 'js') {
		element = document.createElement('script');
	}
	else if(extension === 'css') {
		element = document.createElement('style');
	}

	element.appendChild(textNode);
	body.appendChild(element);
};

/**
 * Attaches a tag to the page to load an asset
 *
 * @param {string} filename
 * @param {bool} async
 */
DiffServ.prototype.get = function (filename, async) {
	var head = document.head,
		cached = this.retrieveCachedCopy(filename),
		next = this.next[filename],
		href,
		element;

	//not yet in LS
	//LS not available
	if(cached === false) {
		href = this.root + filename;
	}
	else {
		if(filename.indexOf('?') > -1) {
			href = this.root + filename + '&diff=1';
		}
		else {
			href = this.root + filename + '?diff=1';
		}

		//stored in localstorage already
		if(cached !== null) {
			href += '&version=' + cached.version;
		}

		if(next) {
			href += '&next=' + next;
		}
	}
	
	element = document.createElement('script');
	element.src = href;
	element.setAttribute('async', (!!async).toString());
	
	head.appendChild(element);
};

/**
 * Retrieves a file from localstorage.
 * @param {string} filename
 * @return {bool|null|object} - Returns false if localstorage is not available.
 *	returns an object containing the filename and version if it is. Returns null if
 *	the file is not cached in localstorage.
 */
DiffServ.prototype.retrieveCachedCopy = function (filename) {
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
DiffServ.prototype.saveCachedCopy = function (filename, version, content) {
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


if(module && module.exports) {
	module.exports = new DiffServ;
}
else if(window) {
	window.diffserv = new DiffServ;
}
else {
	this.diffserv = new DiffServ;
}

}());
