    let parrafoResultado = document.getElementById("parrafoResultado");
    let parrafo = document.getElementById("parrafo");
    let h2Viejo = document.getElementById("h2Bloque2");
    let muñeco = document.getElementById("muñeco");
    let i = 0;
    let acento = "´";
    let contenedorBloque2 =  document.getElementById("contenedor__bloque2")
    let botonCopiar = document.getElementById("boton__copiar");
    let input_texto = document.getElementById("caja__texto");


    const mediaBp = matchMedia('(min-width: 950px)');
    const changeSize = mq => {
        mq.matches
            ? document.getElementById("muñeco").removeAttribute("hidden") 
            : document.getElementById("muñeco").setAttribute("hidden", "")        
    }

    mediaBp.addListener(changeSize);
    changeSize(mediaBp);

function Encriptar(){
    let input_texto = document.getElementById("caja__texto").value; 
    let input_texto_lowerCase = input_texto.toLowerCase();
    if(input_texto.length != 0){
        if(input_texto === input_texto_lowerCase){
            eliminarAcentos(input_texto);
            if (input_texto === input_textoSinAcentos){
                textoCifrado = input_texto
                .replace(new RegExp("e", "g"),"enter")
                .replace(new RegExp("i", "g"),"imes")
                .replace(new RegExp("a", "g"),"ai")
                .replace(new RegExp("o", "g"),"ober")
                .replace(new RegExp("u", "g"),"ufat")
                
                AsignarTextoElemento(textoCifrado);
            }
            else{
                alert("Debe ingresar texto sin acentos");
            }
        } else {
            alert("Debe ingresar texto en mínuscula")
        }
    } else {
        normalizarPanelEncriptado();
    }
}

function Desencriptar(){
    let input_texto = document.getElementById("caja__texto").value;
    if(input_texto.length != 0){
        textoDescifrado = input_texto
        .replace(new RegExp("enter", "g"),"e")
        .replace(new RegExp("imes", "g"),"i")
        .replace(new RegExp("ai", "g"),"a")
        .replace(new RegExp("ober", "g"),"o")
        .replace(new RegExp("ufat", "g"),"u")
        
        AsignarTextoElemento(textoDescifrado);

    } else {
        normalizarPanelEncriptado()
    }
}

function AsignarTextoElemento(texto) {
    contenedorBloque2.setAttribute("class","contenedor__bloque2__encriptado");
    parrafoResultado.innerHTML = texto;
    h2Viejo.innerHTML = "";
    muñeco.setAttribute("hidden", "");
    parrafo.innerHTML = "";
    botonCopiar.removeAttribute("hidden");
}

function normalizarPanelEncriptado(){
    alert("Debes ingresar al menos 1 carácter");
        parrafo.innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
        parrafoResultado.innerHTML = "";
        h2Viejo.innerHTML = "Ningún mensaje fue encontrado";
        contenedorBloque2.setAttribute("class","contenedor__bloque2");
        botonCopiar.setAttribute("hidden", "");
        if (mediaBp.matches === true){
            muñeco.removeAttribute("hidden");
        }
}

function copiarAlPortapapeles (){
    let textoCopiado = document.getElementById("parrafoResultado").innerHTML;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado al portapapeles");
}

function eliminarAcentos(texto){
    input_textoSinAcentos = texto
                                .replace(/\u00E1/g,"a")
                                .replace(/\u00E9/g,"e")
                                .replace(/\u00ED/g,"i")
                                .replace(/\u00F3/g,"o")
                                .replace(/\u00FA/g,"u")
    return texto;
}