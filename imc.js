function imc(){
    let nome = document.querySelector('#nome').value
    let altura = document.querySelector('#altura').value
    let peso = document.querySelector('#peso').value
    let resultado = document.querySelector('#resultado')

    if(nome !== '' && altura !== '' && peso !== ''){

        let valorIMC = (peso / (altura * altura))

        if(valorIMC < 18.6){
          tipoIMC = 'abaixo do peso'
        } else if(valorIMC < 25){
            tipoIMC = 'peso ideal'
        } else if(valorIMC < 30){
            tipoIMC = 'um pouco acima do peso'
        } else if(valorIMC < 35){
            tipoIMC = 'Obesidade grau 1'
        } else if(valorIMC < 40) {
            tipoIMC = 'Obesidade grau 2'
        } else {
            tipoIMC = 'Obesidade grau 3'
        }
        resultado.innerHTML = `${nome} seu IMC ${valorIMC} e voce está ${tipoIMC}`
    } else {
        resultado.innerHTML = "Preencha todos os campos"
    }

}