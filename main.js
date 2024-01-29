// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert(`Hello World!`);

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numberOne = Number(InputUserNumber("Digite o primeiro número:"));
let numberTwo = Number(InputUserNumber("Digite o segundo número:"));

const result = numberOne + numberTwo;
alert(`A soma dos números digitador é: ${result}`);

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const inputNumber = InputUser("Digite um número:");
console.log(typeof inputNumber);
if(!isNaN(inputNumber)){
    alert(`${inputNumber} é um número.`);
}
else{
    alert(`${inputNumber} não é um número.`);
}
// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const stringTxt = "Um texto qualquer";
alert(`Isso é uma string: ${stringTxt}. \nJá ${numberOne} não é uma string`);

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const booleano = true;
alert(`${booleano} é um valor booleano. Assim como o ${!booleano}`);

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
alert(`A subtração dos valores digitador anteriormente é: ${numberOne - numberTwo}`);

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
alert(`A multiplicação dos valores digitador anteriormente é: ${numberOne * numberTwo}`);

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
alert(`A divisão dos valores digitador anteriormente é: ${numberOne / numberTwo}`);

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const valuePar = 10;
if(valuePar % 2 == 0){
    alert(`${valuePar} é um número par.`);
}
else{
    alert(`${valuePar} não é um número par.`);
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const valueImpar = 9;
if(valueImpar % 2 != 0){
    alert(`${valueImpar} é um número ímpar.`);
}
else{
    alert(`${valueImpar} não é um número ímpar.`);
}

// Funções utilitárias //
function InputUser(message){
    const input = prompt(message);
    return input;
}

function InputUserNumber(message){
    let inputNumber = prompt(message);

    while(isNaN(inputNumber) == true){
        alert(`${inputNumber} não é um numero \nPor favor digite um número.`);
        inputNumber = prompt(message);
    }
    return inputNumber
}