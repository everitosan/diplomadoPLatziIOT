(function() {

	const voz = new webkitSpeechRecognition();
	voz.lang = "es-ES";
	const boton = document.querySelector("#boton");
	const Status = document.querySelector("#status");
	const Title = document.querySelector("#title");

	voz.onresult = mostrar;
	boton.addEventListener("click", correr);

	function correr () {
		voz.start();
		Status.innerHTML = "Escuchando ....";
	}

	function mostrar(resultados) {
		var resultado = resultados.results[0][0].transcript;
		var confianza = parseInt(resultados.results[0][0].confidence *100),
				msj =  resultado.toLowerCase();

		Status.innerHTML = resultado + " - " + confianza + "%";

		switch(msj) {
			case "encender": 
				postToUrl("/api/v1/leds/on");
				break;
			case "apagar": 
				postToUrl("/api/v1/leds/off");
				break;
			case "fiesta": 
				postToUrl("/api/v1/leds/blink");
				break;
		}

	}

	function postToUrl(url) {
		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			} 
		}).then( (res)=>{
			Title.innerHTML = res.statusText;
		}).catch((err)=> {
			Title.innerHTML = "Error";
			console.error(err);
		} );
	}

})();