//-----------------------------  Memoria
const contenedorDeImagenes = document.getElementById("contenedorDeImagenes");
const listaDomMemoria = Array.from(document.querySelectorAll(".flipper-frontYBack"));
const cardsMemoria = document.querySelectorAll(".flip-container");
const textoExplicativoMemoria = document.querySelector("#texto-explicativo-juego-memoria");
const textoClick = document.getElementById("textoClick");
const botonAnimacion = document.getElementById("botonAnimacion");
const contenedorMioLoader = document.getElementById("contenedorMioLoader");
const loaderHijomovil = document.getElementById("loader-hijo-movil");
const arrayRespuestasMemoria = ["auto", "elefante", "nube", "arbol", "trofeo", "pelota"];

//--------------------  Mecanica de pregunta correctas o incorrectas
cardsMemoria.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.stopPropagation();
		if (arrayRespuestasMemoria.length > 0) {
			console.log('arrayRespuestasMemoria.length > 0', element.id);
			let indiceRespuesta = arrayRespuestasMemoria.indexOf(element.id);
			if (textoClick.textContent == element.id && arrayRespuestasMemoria.includes(element.id)) {
				console.log('si correcto');
				element.firstElementChild.classList.add("imagenBien", "mostrarImagenesOnClick");
				arrayRespuestasMemoria.splice(indiceRespuesta, 1);
				textoClick.innerText = arrayRespuestasMemoria[0];
				correcto(element);
			}
			if (textoClick.textContent != element.id && arrayRespuestasMemoria.includes(element.id)) {
				console.log('si incorrecto');
				element.firstElementChild.classList.add("imagenMal", "mostrarImagenesOnClick");
				arrayRespuestasMemoria.splice(indiceRespuesta, 1);
				incorrecto(element);
			}
		}
		if (arrayRespuestasMemoria.length == 0) {
			console.log('si 0 en array');
			contenedorDeImagenes.classList.add("bloquearClickContenedorMemoria")
			textoExplicativoMemoria.style.visibility = "hidden";
			textoClick.innerText = "TERMINADO";
			botonAnimacion.style.animation = "none";
			botonAnimacion.style.visibility = "hidden";
		}
	});
});

//--------------------  Animaciones al hacer 'click' para empezar
botonAnimacion.addEventListener("click", (event) => {
	// Cancelar el bubbling
	event.stopPropagation();
	// Esto hace que la ventana este en el centro del contenedor con las animaciones del juego
	contenedorDeImagenes.scrollIntoView({block: "center"});
	// Esto desabilita el scroll
	function disableScroll() {
		let scrollTop = window.pageYOffset || window.scrollY;
		let scrollLeft = window.pageXOffset || window.scrollX;
		window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		};
	}
	function enableScroll() {
		window.onscroll = function () {};
	}
	disableScroll();
	//Aca se definen los elementos EXTERNOS relacionados al juego
	botonAnimacion.style.display = "none";
	contenedorMioLoader.className = "contenedorMioLoaderAparecer";
	textoClick.innerText = "";
	if (contenedorDeImagenes.className != "bloquearClickContenedorMemoria") {
		contenedorDeImagenes.classList.add("bloquearClickContenedorMemoria");
	}
	// Codigo para la duracion de 1 animacion de item del juego
	const velocidad = 1000 / 0.6;
	// Codigo para activar la animacion de girar con una determinada velocidad controlada desde javascript y quitar la clase de la animacion cada vez que se reproduzca de nuevo
	listaDomMemoria.forEach((element) => {
		//element.style.animationDuration = `auto`
		element.style.animationDuration = `${velocidad / 1000}s`;
		element.classList.remove("mostrarMemoria");
	});
	// Ordena RANDOM el orden de las animaciones, pero NO el de las respuestas correctas NO
	listaDomMemoria.sort(() => Math.random() - 0.5);
	let contadorIntervalo = 0;
	const intervaloIDMemoriaAnimacion = setInterval(() => {
		listaDomMemoria[contadorIntervalo]?.classList.toggle("mostrarMemoria");
		contadorIntervalo++;
		if (contadorIntervalo == listaDomMemoria.length) {
			// Esto es para esperar a que termine la animacion del ultimo item
			textoClick.classList.remove("textoBlink");
			setTimeout(() => {
				if (contenedorDeImagenes.className == "bloquearClickContenedorMemoria") {
					contenedorDeImagenes.classList.remove("bloquearClickContenedorMemoria");
				}
				textoClick.innerText = arrayRespuestasMemoria[0];
				botonAnimacion.style.display = "";
				botonAnimacion.innerText = "REPETIR ANIMACION";
				contenedorMioLoader.className = "contenedorMioLoaderEscondido";
				// Llamada a funcion que habilita el scroll, esta mas arriba
				enableScroll();
				clearInterval(intervaloIDMemoriaAnimacion);
				textoClick.classList.add("textoBlink");
			}, velocidad);
		}
	}, velocidad);
	loaderHijomovil.style.animationDuration = `${((velocidad / 1000) * listaDomMemoria.length) + velocidad / 1000}s`;
});