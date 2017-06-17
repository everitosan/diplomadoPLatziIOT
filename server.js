const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const api = require("./api");
const Arduino = require("./arduino");

app.use(express.static("public"));
app.set('view engine', 'jade');
app.use(bodyParser.json());


app.listen(PORT, () => {
	console.log("RUNING AT: http://127.0.0.1:" + PORT);
} );

Arduino.getInstance().on("ready", () => {
	app.get("/", (req, res) => {
		res.render("index");
	});
	app.use("/api/v1", api);
});




