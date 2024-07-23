let numSecreto = 0;
let contador = 0
let ListaNumJugados = [];
let numMax = 10;

function AsignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function VerificarIntento() {
    let numUsuario = parseInt(document.getElementById('ValorUsuario').value);
    if (numUsuario === numSecreto){
        AsignarTexto('p',`Acertaste el numero en ${contador} ${contador===1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numUsuario>numSecreto){
            AsignarTexto('p','El numero secreto es menor');
        }else{
            AsignarTexto('p','El numero secreto es mayor');
        };
        contador++;
        LimpiarCaja();
    };
    return;
};

function LimpiarCaja() {
    document.querySelector('#ValorUsuario').value ='';
};

function generarNumero() {
    let numGenerado = Math.floor(Math.random()*numMax)+1;

    if (ListaNumJugados.length == numMax){
        AsignarTexto('p','Ya se sortearon todos los numeros posibles');
    }else{
        if (ListaNumJugados.includes(numGenerado)){
            return generarNumero();
        } else{
            ListaNumJugados.push(numGenerado);
            return numGenerado;
        };
    };   
};

function CondicionesIniciales() {
    AsignarTexto('h1','Juego del numero secreto');
    AsignarTexto('p',`Indica un numero del 1 al ${numMax}`);
    numSecreto = generarNumero();
    contador = 1;
};

function ReiniciarJuego() {
    LimpiarCaja();
    CondicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
    
};

CondicionesIniciales();