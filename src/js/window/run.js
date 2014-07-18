/**
 * @param {object} file
 * @param {string} file.name
 * @param {string} file.version
 * @param {string} [file.content]
 * @param {string} [file.delta]
 */
var run = function (file) {
	var filenameParts = file.name.split('.'),
		extension = filenameParts[filenameParts.length - 1],
		body = document.documentElement,
		element,
		textNode;

	if(file.content) {
		if(extension === 'js') {
			textNode = document.createTextNode(file.content + '\n//# sourceURL=' + this.root + file.name);
		}
		else {
			textNode = document.createTextNode(file.content);
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

module.exports = run;