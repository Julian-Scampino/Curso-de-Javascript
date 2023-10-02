let nuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"));
document.querySelector(".nav-user-text").innerText = `${nuevoUsuario.nombre} ${nuevoUsuario.apellido}`;
document.querySelector("#header-avatar").src =`../imagenes/avatar-${nuevoUsuario.genero}-cambiado-chico200px.png`
document.querySelector(".header-btn-logout").addEventListener("click", () => {
	localStorage.clear();
	window.location.href = "./registrar.html";
});

let ArrayPersonas = [ {id: 1, nombre: "Juan", apellido: "Aguirre", correctas: 3}, {id: 2, nombre: "Ana", apellido: "Rodríguez", correctas: 1}, {id: 3, nombre: "Facundo", apellido: "González", correctas: 5}, ];
if (localStorage.getItem("usuarioLocal") != null) {
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
let tablaBodyParticipantes = document.getElementById("tablaBodyParticipantes");
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
});
