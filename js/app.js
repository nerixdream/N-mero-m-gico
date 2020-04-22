// Variables
const numeroAleatorio = Math.round(Math.random() * 1000);
const numeroIngresado = document.getElementById('numero');
const botonComprobar = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');
const numero = document.querySelector('.numero');
const textoLegend = baffle('.legend');
const textoResultado = baffle(resultado);
let contador = 0;

//IIFE
(() => {
    document.getElementById('formulario').addEventListener('submit', comprobar);
    particlesJS.load('particles-js', '../js/particlesjs-config.json');
    animacionTextos();
})();

//Funcion para comprobar si el numero ingresado es igual al numero aleatorio
function comprobar(e) {
    e.preventDefault();
    if (botonComprobar.value === "Comprobar") {
        if (numeroIngresado.value < numeroAleatorio) {
            resultado.innerHTML = "¡Más!";
            //Agrega una clase para animar el texto
            resultado.classList.add('animacion');
            //Quita animacion la clase para la animacion
            setTimeout(() => {
                resultado.classList.remove('animacion');
            }, 500);


        } else if (numeroIngresado.value > numeroAleatorio) {
            resultado.innerHTML = "¡Menos!";
            resultado.classList.add('animacion');
            setTimeout(() => {
                resultado.classList.remove('animacion');
            }, 500);

            //Si el numero ingresado es igual al numero aleatorio
        } else {
            //Inicia animacion del resultado
            textoResultado.text(text => {
                //retorna el resultado con el contador en un template
                return `¡Adivinaste el número en ${contador+1} intentos!`;
            });
            textoResultado.set({
                characters: '██░▒ █▓▒▓ ░▒█ ▒█>▓ ░█░██ █▓░ ░░▒▓> ▓/>░▓ █▒░',
                speed: 100
            });
            textoResultado.start();
            textoResultado.reveal(1000);
            //Fin animacion

            resultado.style.color = '#000';
            //Desactiva el input
            numeroIngresado.setAttribute("disabled", "");
            botonComprobar.value = 'Reiniciar';
        }
        contador++;
        // console.log(numeroAleatorio);
        // console.log(contador);

        //Comprueba si el texto del boton es igual a reiniciar recarga la pagina
    } else if (botonComprobar.value === "Reiniciar") {
        location.reload();
    }
}

function animacionTextos() {
    //Animacion de texto
    textoLegend.set({
        characters: '██░▒ █▓▒▓ ░▒█ ▒█>▓ ░█░██ █▓░ ░░▒▓> ▓/>░▓ █▒░',
        speed: 100
    });
    textoLegend.start();
    textoLegend.reveal(3000);
}