var JSONP = {},
	cbcount = 0;

/**
 * @param {string} url
 * @param {object} query
 * @param {function} callback
 */
JSONP.get = function (url, query, callback) {
	var head = document.documentElement.childNodes[0],
		querystring = [],
		key,
		val,
		element;

	if(query === undefined) {
		query = {};
	} 
		
	query.callback = (function (cbcount) {
		return 'JSONP.callbacks[' + cbcount + ']';
	}(cbcount));

	JSONP.callbacks[cbcount] = callback;	
	cbcount++;

	for(key in query) {
		if(query.hasOwnProperty(key)) {
			val = encodeURIComponent(query[key]);
			querystring.push(key + '=' + val);
		}
	}
	
	element = document.createElement('script');
	element.src = url + '?' + querystring.join('&');
	head.appendChild(element);
};

JSONP.callbacks = [];

module.exports = window.JSONP = JSONP;