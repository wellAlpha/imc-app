const btnSubmit = document.querySelector('#btn-submit')

const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const indGordura = document.querySelector('#indice-gordura')
const tbody = document.querySelector('#table-imc').getElementsByTagName('tbody')[0]

const toastify = window.Toastify
tbody.addEventListener('dblclick', (ev) => {
    console.log(ev)
})
btnSubmit.addEventListener('click', (ev) => {
    ev.preventDefault()
    let error = false
    const values = {
        nome: nome.value,
        peso: peso.value,
        altura: altura.value,
        indiceDeGordura: indGordura.value
    }
    
    if(values.nome === ''){
        error = true
        toasty('Nome não pode está vazio.')
    }
    
    if(validateIfMinCaracter(values.nome.length) || validateIfMaxCaracter(values.nome.length)){
        error = true
        toasty('Nome deve ser maior que 3 e menor que 50 caracteres.')
    }
       
    
    if(typeof parseFloat(values.peso) !== 'number'){
        error = true
        toasty('Peso deve ser um numeral.')
    }
        

    if(validateIfValueIsGreatThan(parseFloat(values.peso))){
        error = true
        toasty('Peso deve ser maior ou igual a 1.')
    }

    if(validateIfValueIsLowerThan(parseFloat(values.peso))){
        error = true
        toasty('Peso deve ser menor ou igual a 600.')
    }

    /** validação de altura */
    if(typeof parseFloat(values.altura) !== 'number'){
        error = true
        toasty('Altura deve ser um numeral.')
    }
        

    if(validateIfValueIsGreatThan(parseFloat(values.altura), 0.2)){
        error = true
        toasty('Altura deve ser maior ou igual a 20 cm(0,2M).')
    }
        

    if(validateIfValueIsLowerThan(parseFloat(values.altura), 2.3)){
        error = true
        toasty('Altura deve ser menor ou igual a 230 cm(2,3M).')
    }
        

    /** validação de porcentagem de gordura */
    if(typeof parseFloat(values.gordura) !== 'number'){
        error = true
        toasty('Índice de gordura deve ser um numeral.')
    }
        

    if(validateIfValueIsGreatThan(parseFloat(values.indiceDeGordura))){
        error = true
        toasty('Índice de gordura deve ser maior ou igual a 1%.')
    }
        
    
    if(validateIfValueIsLowerThan(parseFloat(values.indiceDeGordura), 35)){
        error = true
        toasty('Índice de gordura deve ser menor ou igual a 35%.')
    }
    
    if(error){
        return
    }

    const row = tbody.insertRow()

    row.classList.add(['pessoa'])

    const columnName = row.insertCell()
    const columnPeso = row.insertCell()
    const columnAltura = row.insertCell()
    const columnIndiceGordura = row.insertCell()
    const columnIMC = row.insertCell()

    columnName.innerHTML = values.nome
    columnPeso.innerHTML = values.peso
    columnAltura.innerHTML = values.altura
    columnIndiceGordura.innerHTML = values.indiceDeGordura
    columnIMC.innerHTML = (parseFloat(values.peso) / Math.pow(parseFloat(values.altura), 2)).toFixed(2)
    
})


function toasty (text, success = false) {
    toastify({
        text,
        duration: 5000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: !success ? "red" : "green",
        }
      }).showToast();
}

function validateIfValueIsGreatThan(value, qtd = 1){
    return value < qtd
}

function validateIfValueIsLowerThan(value, qtd = 600){
    return value > qtd
}

function validateIfMaxCaracter (value, qtdCaractere = 50) {
    return value > qtdCaractere
}

function validateIfMinCaracter (value, qtdCaractere = 3) {
    return value < qtdCaractere
}