const five = require("johnny-five");
const arduino = new five.Board();

module.exports = {
	ready: (callback) => {
		arduino.on("ready", ()=>{
  		callback();
		});
	},

	getFive: () => {
		return five;
	},

	getInstance: () => {
		return arduino;
	}

};
