const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const resultado = document.querySelector('#resultado')

const CalcImc = () => {
    
    if (peso.value != '' && altura.value != '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''
    
        if (imc < 18.5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Acima do peso'
        } else if (imc < 35) {
            classification = 'Obesidade Grau |'
        } else if (imc < 41) {
            classification = 'Obesidade Grau ||'
        } else {
            classification = 'Obesidade Grau |||'
        }
    
        resultado.innerHTML = `IMC: ${imc} é (${classification})`
    } else {
        resultado.innerHTML = `Preencha os campos`
    }
}