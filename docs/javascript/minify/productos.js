let nuevoUsuario=JSON.parse(localStorage.getItem("usuarioLocal"));document.querySelector(".nav-user-text").innerText=`${nuevoUsuario.nombre}`,document.querySelector(".header-btn-logout").addEventListener("click",()=>{localStorage.clear(),window.location.href="registrar.html"});let resumenCompra=document.getElementById("tablaResumen"),tablaTotal=document.getElementById("tablaFooter"),arrayCompra=JSON.parse(localStorage.getItem("carrito"))??[],indice;class libros{constructor(r,e,t,a,o){this.id=r,this.nombre=e,this.autor=t,this.precio=a,this.unidades=1,this.stock=o}}const libro1=new libros(1,"Matem\xe1tica","Fern\xe1ndez",5e3,9),libro2=new libros(2,"Lengua","Mart\xednez",4e3,6),libro3=new libros(3,"Historia","P\xe9rez",3e3,2),libro4=new libros(4,"Geograf\xeda","S\xe1nchez",4500,3);let arrayOferta=[libro1,libro2,libro3,libro4];localStorage.getItem("carrito")&&mostrarResumen();const mostrarOFerta=()=>{let r=document.getElementById("contendedorOferta");r.innerHTML="",arrayOferta.forEach(e=>{r.innerHTML+=`
        <div class="card-productos" id=${e.id}>
        <img src="../imagenes/${e.id}.jpg" alt="">
        <h3>${e.nombre}</h3>
        <p>Autor: ${e.autor}</p>
        <p>Precio: $${e.precio}</p>
        <p>Stock: ${e.stock}</p>
        <button class="card-productos-boton" id="botonProducto${e.id}">Comprar</button>
        </div>
        `})};mostrarOFerta();let productosDom=Array.from(document.getElementsByClassName("card-productos-boton"));function mostrarResumen(){document.getElementById("resumenCompra").style.opacity="100%",resumenCompra.innerHTML="";let r,e=0;JSON.parse(localStorage.getItem("carrito")).forEach(t=>{r=parseFloat(t.precio)*parseFloat(t.unidades),resumenCompra.innerHTML+=`
        <tr>
                <td>${t.nombre}</td>
                <td>${t.autor}</td>
                <td>$${t.precio}</td>
                <td>${t.unidades}</td>
                <td>$${r}</td>
            </tr>
        `,e+=r}),tablaTotal.innerHTML=`<tr><td colspan="5">Total: $${e}</td></tr>`}productosDom.forEach(r=>{r.addEventListener("click",r=>{r.preventDefault();let e=r.target.parentElement.getAttribute("id"),t=arrayOferta.find(r=>r.id==e);indice=arrayCompra.findIndex(r=>r.id==e),!0!=arrayCompra.some(r=>r.id==e)?(arrayCompra.push(t),localStorage.setItem("carrito",JSON.stringify(arrayCompra)),mostrarResumen(),indice=arrayCompra.findIndex(r=>r.id==e),arrayCompra[indice].stock--):arrayCompra[indice].stock>0?(arrayCompra[indice].unidades++,arrayCompra[indice].stock--,localStorage.setItem("carrito",JSON.stringify(arrayCompra)),mostrarResumen()):Swal.fire("No puedes comprar m\xe1s que el stock")})});let botonesCompra=Array.from(document.getElementsByClassName("botonesCompra"));botonesCompra.forEach(r=>{r.addEventListener("click",()=>{localStorage.removeItem("carrito"),location.reload()})});