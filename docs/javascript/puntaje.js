let nuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"));
document.querySelector(".nav-user-text").innerText = `${nuevoUsuario.nombre}`;
document.querySelector("#header-avatar").src =`../imagenes/avatar-${nuevoUsuario.genero}-cambiado-chico100px.png`
document.querySelector(".header-btn-logout").addEventListener("click", () => {
	localStorage.clear();
	window.location.href = "./registrar.html";
});

let ArrayPersonas = [ {id: 1, nombre: "Juan", apellido: "Aguirre", correctas: 3}, {id: 2, nombre: "Ana", apellido: "Rodríguez", correctas: 1}, {id: 3, nombre: "Facundo", apellido: "González", correctas: 5}, ];
if (localStorage.getItem("usuarioLocal") != null && JSON.parse(localStorage.getItem("usuarioLocal")).fin == true ) {
	let traerNuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"));
	traerNuevoUsuario.class = "Nuevo";
	ArrayPersonas.push(traerNuevoUsuario);
}

ArrayPersonas.sort((a, b) => {
	if (a.correctas > b.correctas) {
		return -1;
	}
	if (a.correctas > b.correctas) {
		return 1;
	}
	return 0;
});
/* let tablaBodyParticipantes = document.getElementById("tablaBodyParticipantes");
tablaBodyParticipantes.innerHTML = "";
ArrayPersonas.forEach((persona) => {
	let {nombre, apellido, correctas} = persona;
	tablaBodyParticipantes.innerHTML += `
            <tr ${persona?.class == "Nuevo" ? 'class="Nuevo"' : 'class=""'}>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${correctas}</td>
             </tr>
        `;
}); */
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16" style="
color: white;
background: #00d600;
border: 2px solid black;
">
<path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
</svg>`
let tablaBodyParticipantes = document.getElementById("tablaBodyParticipantes");
tablaBodyParticipantes.innerHTML = "";
ArrayPersonas.forEach((persona) => {
	let {nombre, apellido, correctas} = persona;
	tablaBodyParticipantes.innerHTML += `
            <tr ${persona?.class == "Nuevo" ? 'class="Nuevo"' : 'class=""'}>
                <td> ${persona?.class == "Nuevo" ? svg : ""} ${nombre}</td>
                <td>${apellido}</td>
                <td>${correctas}</td>
             </tr>
        `;
});

if(JSON.parse(localStorage.getItem("usuarioLocal"))?.correctas > 0){
	var end = Date.now() + 1 * 1000;
	var colors = ["#fcff42", "#ff5e5e", "#88ff5a", "#ffa62d", "#ff36ff", "#a25afd"];
	(function frame() {
		confetti({
			particleCount: 3,
			angle: 60,
			spread: 55,
			origin: {x: 0},
			colors: colors,
			zIndex: -1,
			scalar: 0.7
		});
		confetti({
			particleCount: 3,
			angle: 120,
			spread: 55,
			origin: {x: 1},
			colors: colors,
			zIndex: -1,
			scalar: 0.7
		});

		if (Date.now() < end) {
			requestAnimationFrame(frame);
		}
	})();
}