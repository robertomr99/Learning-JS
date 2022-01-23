//document.write('!Hola mundo!');

function sumaNumeros(){
    let n1 = 5;
    let n2= 10;

document.write("El resultado es:"+(n1+n2));
console.log("El resultado es :"+(n1+n2)+" eres un maquinola");
}


// Variables

const adversario = 'Thor'

let loki = ''

function probandoSwitch(){

switch(adversario){
    case 'Iron-Man':
        loki = 'Magneto'
        break

    case 'Hulk':
        loki = 'Thanos'
        break

    case 'Thor':
        loki = 'Odin'
        break

    default:
        loki = 'Loki'    
}

document.write('Lo pone aquí miguel : '+loki+' el hio de puta migue vayas bombas')
console.log(loki+' como funca el makinole')

}

function probandoIf(){

if(adversario == 'Iron-Man'){
    loki = 'Magneto'
}else if(adversario == 'Hulk'){
    loki = 'Odin'
}else if(adversario == 'Thor'){
    loki = 'Odin'
}else{
    loki = 'Loki'
}

document.write(loki)

}

const LOKI_DISFRACES ={
    'Iron Man' : 'Magneto',
    Thor : 'Odin',
    Hulk : 'Thanos',
    Lobezno : 'Magneto'
}


function probandoFor(){

for(let i = 0 ; i > 10 ; i++){
    console.log(i+"\n")
}

}

const LOKI_DEFAULT_DISFRAZ = 'Loki'


 /*const loki = LOKI_DISFRACES[adversario] 
 ? LOKI_DISFRACES[adversario]()
 : LOKI_DEFAULT_DISFRAZ
 document.write(loki)
 conselog.log(loki)
*/




