const numero = [1,2,3,4,5,6,7,8,9,0]

const letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const caracteresEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?']

function gerar(){
	let checkNumero = document.getElementById('Numero')
	let checkEspecial = document.getElementById('especial')
	let checkMaiuscula = document.getElementById('maiuscula')
	let checkMinuscula = document.getElementById('minuscula')
  
    let selecionado = []

    let senha = ''

    if(checkNumero.checked == false && 
       checkEspecial.checked == false && 
       checkMaiuscula.checked == false && 
       checkMinuscula.checked == false) {
            alert('Selecione uma das opções!')
        } else{
            if(checkNumero.checked){
                selecionado = selecionado.concat(numero)
            }
            if(checkEspecial.checked){
                selecionado = selecionado.concat(caracteresEspeciais)
            }
            if(checkMaiuscula.checked){
                selecionado = selecionado.concat(letrasMaiusculas)
            }
            if(checkMinuscula.checked){
                selecionado = selecionado.concat(letrasMinusculas)
            }
        
            for(let c = 0; c < 8; c++){
                let index = Math.floor(Math.random() * selecionado.length)
                senha = senha + selecionado[index]
            }
            
            let input = document.getElementById('senha')
            input.value = senha
        }
}