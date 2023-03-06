const btnSubmit = document.querySelector('#btn-submit')

const nome = document.querySelector('#nome')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const indGordura = document.querySelector('#indice-gordura')

const toastify = window.Toastify

btnSubmit.addEventListener('click', (ev) => {
    ev.preventDefault()
    
    const values = {
        nome: nome.value,
        peso: peso.value,
        altura: altura.value,
        indiceDeGordura: indGordura.value
    }
    
    if(values.nome === '')
        toasty('Nome não pode está vazio.')
    
    if(validateIfMinCaracter(values.nome.length) || validateIfMaxCaracter(values.nome.length))
        toasty('Nome deve ser maior que 3 e menor que 50 caracteres.')
    
    if(typeof parseFloat(values.peso) !== 'number')
        toasty('Peso deve ser um numeral.')

    if(validateIfValueIsGreatThan(parseFloat(values.peso)))
        toasty('Peso deve ser maior ou igual a 1.')

    if(validateIfValueIsLowerThan(parseFloat(values.peso)))
        toasty('Peso deve ser menor ou igual a 600.')

    /** validação de altura */
    if(typeof parseFloat(values.altura) !== 'number')
        toasty('Altura deve ser um numeral.')

    if(validateIfValueIsGreatThan(parseFloat(values.altura), 0.2))
        toasty('Altura deve ser maior ou igual a 20 cm(0,2M).')

    if(validateIfValueIsLowerThan(parseFloat(values.altura), 2.3))
        toasty('Altura deve ser menor ou igual a 230 cm(2,3M).')

    /** validação de porcentagem de gordura */
    if(typeof parseFloat(values.gordura) !== 'number')
        toasty('Índice de gordura deve ser um numeral.')

    if(validateIfValueIsGreatThan(parseFloat(values.indiceDeGordura)))
        toasty('Índice de gordura deve ser maior ou igual a 1%.')
    console.log()
    if(validateIfValueIsLowerThan(parseFloat(values.indiceDeGordura), 35))
        toasty('Índice de gordura deve ser menor ou igual a 35%.')
    
    
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