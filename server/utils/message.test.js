var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('#generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Fred';
		var text = 'What is going on?';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});

describe('#generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Fred';
		var latitude = 23;
		var longitude = 11;
		var url = 'https://www.google.com/maps?q=23,11';
		var message = generateLocationMessage(from, latitude, longitude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});