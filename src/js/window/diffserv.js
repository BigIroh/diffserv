var Messenger = require('../common/Messenger'),
	EventEmitter = require('../common/EventEmitter'),
	run = require('./run'),
	DiffServ;

DiffServ = function () {
	this.requestedFiles = [];
	this.responses = {};
	this.ready = false;
	this.iframe = document.createElement('iframe');
	this.iframe.src = '../html/iframe.html';
	this.iframe.style.display = 'none';
	this.iframe.style.width = '1px';
	this.iframe.style.height = '1px';
	this.iframe.style.opacity = 0;
	this.iframe.style.visibility = 'hidden';

	document.documentElement.appendChild(this.iframe);
	this.messenger = new Messenger(this.iframe.contentWindow);

	this.messenger.once('ds-iframe-ready', function () {		
		
		this.ready = true;

		this.messenger.on('ds-response', function (data) {
			var nextFile;

			if(this.responses[data.name]) {
				throw new Error('Already seen ' + data.name);
			}
			else {
				this.responses[data.name] = data;
				nextFile = this.responses[this.requestedFiles[0].name];
				while(this.requestedFiles.length && nextFile) {
					run(nextFile);
					this.requestedFiles.splice(0,1);
				}
			}
		}, this);
		
		this.emit('ready');

	}, this);

};

DiffServ.prototype = new EventEmitter();

DiffServ.prototype.get = function (filename) {
	this.requestedFiles.push(filename);

	if(!this.ready) {
		this.messenger.once('ds-iframe-ready', function () {
			this.messenger.post('ds-request', filename);
		}, this);
	}
	else {		
		this.messenger.post('ds-request', filename);
	}
	
};

module.exports = DiffServ;
