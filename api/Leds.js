const Arduino = require("../arduino");

module.exports = {
	
	ledOn:  (req, res) => {
		let five = Arduino.getFive();
		let led = five.Led(13);
		led.on();
		res.send("Ok");
	},

	ledOff:  (req, res) => {
		let five = Arduino.getFive();
		let led = five.Led(13);
		led.off();
		res.send("Ok");
	},

	ledBlink:  (req, res) => {
		let five = Arduino.getFive();
		let led = five.Led(13);
		led.blink();
		res.send("Ok");
	},

};
