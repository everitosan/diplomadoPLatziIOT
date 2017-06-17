const express = require("express");
const Router = express.Router();
const Temp = require("./temp");
const Leds = require("./Leds");


Router
	.get("/", Temp.home)
	.get("/temperature", Temp.getTemperature)
	.post("/leds/on", Leds.ledOn)
	.post("/leds/off", Leds.ledOff)
	.post("/leds/blink", Leds.ledBlink)
	
module.exports = Router;
