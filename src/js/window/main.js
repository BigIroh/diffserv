(function (window) {

var Messenger = require('../common/Messenger'),
	run = require('./run'),
	iframe = document.createElement('iframe'),
	requests = [],
	responses = {},
	diffserv = {},
	request,
	index,
	messenger;

iframe.src = '../html/iframe.html';
messenger = new Messenger(iframe.contentWindow);

messenger.on('ds-response', function (data) {
	//start executing queued up scripts as soon as we have loaded
	//the first one in the queue
	responses[data.name] = data;

	if(requests[0] === data.name) {
		run(data);
		requests = requests.splice(0, 1);

		index = 0;
		while(index < requests.length) {
			request = requests[index];
			data = responses[request];
			
			if(data) {
				run(data);
				requests.splice(index, 1);
			}
			else {
				index++;
			}
		}
	}
});

diffserv.get = function (filename) {
	messenger.post('ds-request', filename);
	requests.push(filename);
};

window.diffserv = diffserv;

}(window));