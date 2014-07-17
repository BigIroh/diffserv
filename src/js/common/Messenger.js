/**
 * target {window} - window to communicate with
 * domain {string}
 */
var Messenger = function (target, domain) {
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

/**
 * Add a handler for a message type 
 *
 * @param {string} type - message type
 * @param {function} fn - handler to add
 */
Messenger.prototype.on = function(type, fn) {
	if(!this.listeners[type]) {
		this.listeners[type] = [fn];
	}
	else {
		this.listeners[type].push(fn);
	}
};

/**
 * Remove a handler for a message type 
 *
 * @param {string} type - message type
 * @param {function} fn - handler to remove
 */
Messenger.prototype.off = function(type, fn) {
	var index;

	if(this.listeners.type[type]) {
		index = this.listeners[type].indexOf(fn);
		if(index > -1) {
			this.listeners[type].splice(index, 1);
			return true;
		}
		else {
			return false;
		}
	}
	else {
		return false;
	}
};

module.exports = Messenger;