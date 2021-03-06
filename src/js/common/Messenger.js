var EventEmitter = require('./EventEmitter'),
	Messenger;

/**
 * target {window} - window to communicate with
 * domain {string}
 */
Messenger = function (target, domain) {
	var ctx = this;

	this.target = target;
	this.domain = domain;
	this.listeners = {};

	//set up recieve message
	if(this.target.postMessage) {
		window.addEventListener('message', function (event) {
			var i;
			//coming from the right window, and we have listeners for it
			if(event.source === ctx.target && ctx.listeners[event.data.type]) {
				for(i=0; i<ctx.listeners[event.data.type].length; i++) {
					ctx.listeners[event.data.type][i](event.data.content);	
				}
			}
		});
	}
	else {
		throw new Error('Browser not yet supported.');
	}
};

Messenger.prototype = new EventEmitter();

Messenger.prototype.post = function(type, content) {
	var message = {
		type: type,
		content: content
	};

	/* @todo: set the domain here... security? */
	if(this.target.postMessage) {
		this.target.postMessage(message, '*');
	}
	else {
		throw new Error('Browser not yet supported.');
	}
};




module.exports = Messenger;