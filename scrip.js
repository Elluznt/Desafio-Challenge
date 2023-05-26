const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//*La letra "e" es convertida para "enter"
//*La letra "i" es convertida para "imes"
//*La letra "a" es convertida para "ai"
//*La letra "o" es convertida para "ober"
//*La letra "u" es convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    if (textoEncriptado.trim() === "" || !/^[a-zA-Z\s]*$/.test(textoEncriptado)) {
        return; // Si no hay texto ingresado o contiene caracteres especiales, no hacer nada
    }
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none" 
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    if (textoEncriptado.trim() === "" || !/^[a-zA-Z\s]*$/.test(textoEncriptado)) {
        return; // Si no hay texto ingresado o contiene caracteres especiales, no hacer nada
    }
    mensaje.value = textoEncriptado
    textArea.value = ""; 
}


function desencriptar(stringdesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase()


    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringdesencriptada.includes(matrizCodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesencriptada
}

/*copiar texto*/
function copy() {
    var content = document.getElementById('textArea');
   content.select();
  
    document.execCommand('copy');
    swal("Buen trabajo!", "Texto copiado con éxito!", "success");
   
    //alert("texto copiado con exito");
}

/* copyright*/
const year = document.querySelector('#current-year');
year.innerHTML = new Date().getFullYear();



