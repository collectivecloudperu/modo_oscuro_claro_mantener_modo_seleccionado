// Selecciono el cuerpo del documento HTML (body) 
var cuerpoweb = document.body; 

// Obtengo el valor actual de la key 'modo' en localStorage 
var modocolor = localStorage.getItem("modo"); 

// Esta función carga el modo Oscuro o Claro, según el usuario haya configurado 
function cargarModo() {    

    if (modocolor === "oscuro") {               
        cuerpoweb.classList.add("oscuro");
    } else {
        cuerpoweb.classList.add("claro");
    }

}

// Cuando el usuario presiona el botón, llama a la función que corresponde
// ya sea para activar el modo claro o el modo oscuro
var btnpresionado = false;

function cambiarModo() {

    if (btnpresionado) { // Si No es presionado el botón 
        cuerpoweb.classList.remove("oscuro");
        localStorage.setItem("modo", "claro");
        cuerpoweb.classList.add("claro");
        btnpresionado = false;
    } else { // Si es presionado el botón 

        if (modocolor === "oscuro") {
            resetear(); 
            btnpresionado = true;           
        } else {

            cuerpoweb.classList.remove("claro");
            localStorage.setItem("modo", "oscuro");
            cuerpoweb.classList.add("oscuro");        
            btnpresionado = true;

        }        
    }
}

// Reseteamos la configuración realizada y refrescamos la página (Esto es opcional, tu decides usarlo o no)
function resetear() {

    localStorage.removeItem('modo');
    location.reload();

}