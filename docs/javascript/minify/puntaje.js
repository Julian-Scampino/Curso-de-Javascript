let nuevoUsuario=JSON.parse(localStorage.getItem("usuarioLocal"));document.querySelector(".nav-user-text").innerText=`${nuevoUsuario.nombre} ${nuevoUsuario.apellido}`,document.querySelector(".header-btn-logout").addEventListener("click",()=>{localStorage.clear(),window.location.href="./registrar.html"});let ArrayPersonas=[{id:1,nombre:"Juan",apellido:"Aguirre",correctas:3},{id:2,nombre:"Ana",apellido:"Rodr\xedguez",correctas:1},{id:3,nombre:"Facundo",apellido:"Gonz\xe1lez",correctas:5},];if(null!=localStorage.getItem("usuarioLocal")){let e=JSON.parse(localStorage.getItem("usuarioLocal"));e.class="Nuevo",ArrayPersonas.push(e)}ArrayPersonas.sort((e,r)=>e.correctas>r.correctas?-1:e.correctas>r.correctas?1:0);let tablaBodyParticipantes=document.getElementById("tablaBodyParticipantes");tablaBodyParticipantes.innerHTML="",ArrayPersonas.forEach(e=>{let{nombre:r,apellido:a,correctas:t}=e;tablaBodyParticipantes.innerHTML+=`
            <tr ${e?.class=="Nuevo"?'class="Nuevo"':'class=""'}>
                <td>${r}</td>
                <td>${a}</td>
                <td>${t}</td>
             </tr>
        `});