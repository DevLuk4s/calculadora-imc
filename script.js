const peso = document.querySelector('#Peso')
const altura = document.querySelector('#Altura')
const resultado = document.querySelector('#resultado')

const CalcIMC = () => {

   if (peso.value != '' && altura.value != '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificado = ''

    if (imc < 18.5) {
        classificado = 'Abaixo do peso'
    } else if (imc < 25) {
        classificado = 'Peso normal'
    } else if (imc < 30) {
        classificado = 'Acima do peso'
    } else if (imc < 35) {
        classificado = 'Obesidade Grau |'
    } else if (imc < 41) {
        classificado = 'Obesidade Grau ||'
    } else {
        classificado = 'Obesidade Grau |||'
    }
 
    resultado.innerHTML = `IMC: ${imc} (${classificado})`
   } else {
    resultado.innerHTML = `Preencha os campos`
   }
}