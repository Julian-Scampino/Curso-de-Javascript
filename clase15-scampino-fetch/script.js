let contenedorValores = document.getElementById('contenedorValores')
let oficial

    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial}) => {
        contenedorValores.innerHTML = `
            <h3>Dolar Oficial: ${oficial} </h3>
        `
        let convertorOficial = document.getElementById('convertorOficial')
        let resultadoOficial = document.getElementById('resultadoOficial')
        let numeroResultado
        let parseadoDolar
        let parseadoInput
        convertorOficial.addEventListener('change', () =>{
            parseadoDolar = parseFloat(oficial)
            parseadoInput = parseFloat(convertorOficial.value)
            numeroResultado = parseadoInput / parseadoDolar
            let final = numeroResultado.toFixed(2)
            resultadoOficial.innerText = `Resultado = Serian ${final} dolares`
        })
    })
    .catch(error => console.error(error))




