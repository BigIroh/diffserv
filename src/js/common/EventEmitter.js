var EventEmitter = function () {
	this.listeners = {};
};

/**
 * Add a handler for a message type 
 *
 * @param {string} type - message type
 * @param {function} fn - handler to add
 */
EventEmitter.prototype.on = function (type, fn, ctx) {
	if(ctx) {
		fn = function () {
			fn.apply(ctx, Array.prototype.slice.call(arguments, 0));
		};
	}

	if(!this.listeners[type]) {
		this.listeners[type] = [fn];
	}
	else {
		this.listeners[type].push(fn);
	}
};

/**
 * Add a handler for a message type which removes itself
 * after a single execution
 *
 * @param {string} type - message type
 * @param {function} fn - handler to add
 */
EventEmitter.prototype.once = function (type, fn, ctx) {
	var wrapped;

	ctx = ctx || this;

	wrapped = function () {
		ctx.off(type, fn);
		fn.apply(ctx, Array.prototype.slice(arguments, 0));
	};

	if(!this.listeners[type]) {
		this.listeners[type] = [wrapped];
	}
	else {
		this.listeners[type].push(wrapped);
	}	
};

/**
 * Remove a handler for a message type 
 *
 * @param {string} type - message type
 * @param {function} fn - handler to remove
 */
EventEmitter.prototype.off = function (type, fn) {
	var index;

	if(this.listeners[type]) {
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

EventEmitter.prototype.emit = function (type) {
	var payload = Array.prototype.slice.call(arguments, 1),
		fns = this.listeners[type] || [],
		i;

	for(i=0; i<fns.length; i++) {
		fns[i](payload);
	}
};

module.exports = EventEmitter;