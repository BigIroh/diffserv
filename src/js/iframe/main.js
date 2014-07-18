/* global require */
var Messenger = require('../common/Messenger'),
	DiffStore = require('../iframe/DiffStore'),
	requests = {},
	diffstore,
	messenger;


messenger = new Messenger(window.parent);
diffstore = new DiffStore({
	root: '/',
	prefix: 'diffserv'
});

/**
 * Window -> Iframe 'request'
 * @param {string} filename
 */
messenger.on('ds-request', function (filename) {
	if(requests[filename]) {
		throw new Error(filename + ' requested more than once.');
	}
	else {
		requests[filename] = true;
		diffstore.get(filename, function (data) {
			messenger.post('ds-response', data);
		});
	}
});

messenger.post('ds-iframe-ready', {});
