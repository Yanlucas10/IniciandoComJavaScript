//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

let hello = "hello word"
alert(hello)

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let number1 = "teclado";
let number2 = "mouse";

console.log(number1, number2);

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
//Para saber o tipo de dado você pode usar o operador `typeof`

let word = 1

if(typeof word == 'number'){
    alert('É um número')
}else {
    alert('não é um número')
}

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a
//mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

let string = 'ola'

if(typeof string == 'string') {
    alert('É uma string')
} else {
    alert('Não é uma string')
}

//Crie um script que declare uma variável e verifique se o seu valor é um booleano.
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". 

let boolean = false

if(typeof boolean  == 'boolean') {
    alert('É uma booleano')
} else{
    alert('Não é uma booleano')
}

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

let number1 = (3);
let number2 = (1);

const subtração = number1 - number2;

alert(subtração)

console.log(subtração)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let number1 = (3);
let number2 = (9);

const multiplicação = number1 * number2;

alert(multiplicação)

console.log(multiplicação)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let number1 = (90);
let number2 = (9);

const divisão = `${(Number(number1) / (number2)).toFixed(1)}`

alert(divisão) 

console.log(divisão)

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, 
//exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

let number1 = (5);
let number2 = (4);

const sum = number1 + number2;

if ( sum % 2 === 0) {
    alert(`${sum} Número par!`);
} else {
    alert(`${sum} Número não é par!`);
}
    
console.log(sum)

//Crie um script que declare uma variável e verifique se o seu valor é um número impar. Se for, 
//exiba a mensagem "É um número impar", caso contrário, exiba a mensagem "Não é um número impar".

let number1 = (5);
let number2 = (5);

const sum = number1 + number2;

if ( sum % 2 != 0) {
        alert(`${sum} Número impar!`);
} else {
    alert(`${sum} Número não é impar!`);
}
    
 console.log(sum)