// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion para agregar nombres desde el botón añadir
function agregarAmigo () {
    let nombreDeAmigos = document.getElementById ('amigo').value.trim();//captura los datos de entrada
    //validamos la entrada
    if (nombreDeAmigos !== "") {
        amigos.push(nombreDeAmigos);//Agrega valores al arreglo
        limpiarCaja();
        actualizarListaAmigos ();
        console.log(amigos);
    }else {
        alert ("Por favor, inserte un nombre.");
        return;
    }
}

//Actualiza y muestra nombre de amigos
function actualizarListaAmigos () {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";//Limpiamos la lista
    //recorremos el arreglo de amigos y creamos la lista de nombres
    for (let i = 0; i < amigos.length; i++) {
        let item = document.getElementById("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() { 
    if (amigos.length ===0) {
        alert ("No hay amigos para sortear. Por favor, ingrese algunos nombres: ");
        return;//Salir si la lista está vacía
    }
    const nombreAleatorio = Math.floor(Math.random ()* amigos.length);
    const amigoSorteado = amigos[nombreAleatorio]; //Se obtine el nombre sorteado
    let resultado = document.getElementById("resultado");

    //se imprime el resultado en pantalla
    resultado.innerHTML = `<li><strong> Amigo sorteado: </strong> ${amigoSorteado}</li>`; 
    

}

function limpiarCaja () {
    document.getElementById("amigo").value = "";//limpia el campo de entrada 
}
