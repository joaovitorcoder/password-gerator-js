const senhaInput = document.getElementById("senha")// input que vai aparecer a senha

let statusMsg = document.getElementById("status")// card footer, onde ira aparecer a mensagem 

function gerarSenha(){
    const input = Number(document.getElementById("inputTamanho").value) // Passa o tamanho da senha a ser feita
    const tamanho = input // Recebe o tamanho da senha a ser feita

    const maiusculas = document.getElementById("maiusculas").checked
    const minusculas = document.getElementById("minusculas").checked
    const numeros = document.getElementById("numeros").checked
    const simbolos = document.getElementById("simbolos").checked

    if (!maiusculas && !minusculas && !numeros && !simbolos){
        alert("Selecione pelo menos uma opção!")
        return
    } else if (!input) {
      alert("Tamanho não definido!")
      return
    }
    else {
        const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
        const nums = "0123456789"
        const simb = "!@#$%&*"
        
        let caracteres = ''
        
        if (maiusculas) {
        caracteres += letrasMaiusculas
        }
        
        if (minusculas) {
        caracteres += letrasMinusculas
        }

        if (numeros) {
        caracteres += nums
        }

        if (simbolos) {
        caracteres += simb
        }

        let senha = ''
        
        // "Pega um caractere aleatório da string caracteres e adiciona na senha"
        for (let i = 0; i < tamanho; i++) {
          senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }

        // Math.random() - Gera um número aleatório entre 0 e 1, Ex: 0.37482
        // Math.random() * caracteres.length - Multiplica pelo tamanho da string
        // Math.floor() - Arredonda para baixo, Ex: 3.9 -> 3
        // caracteres.charAt(3) - pega o caracter naquela posição, Ex: "abcde" → posição 3 = "d"
        // senha += "d"
        // Vai repetir isso mais 9 vezes 


        console.log(senha.length)

        senhaInput.value = senha
    }
    
}

function copiarSenha() {
  if (senhaInput.value !== "") {
    navigator.clipboard.writeText(senhaInput.value);
    statusMsg.innerHTML = "Senha copiada!"
  } else {
    statusMsg.innerHTML = "Gere uma senha primeiro!"
  }
}

