const Arduino = require("../arduino");
const path = require("path");
module.exports = {
	
	home:  (req, res) => {
		res.send("Home");
	},

	getTemperature: (req, res) => {
		//Reads the temperature from LM35
		let Five = Arduino.getFive();
		let sensor = new Five.Thermometer({
			controller: "LM35",
			pin: "A0"
		});

		sensor.on("data", (datos)=>{
			console.log("Celcius: "+ datos.C);
		});
		res.send("temperature");
	}
};
