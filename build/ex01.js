"use strict";
// 1. Crie um algoritmo que solicite para o usuário informar um número
// qualquer 7x. Adicione cada número informado pelo usuário em uma lista.
// No final utilize o forEach para mostrar cada elemento da lista.
const numberList = [];
for (let index = 0; index < 7; index++) {
    let number = prompt('Digite um número: ');
    numberList.push(Number(number));
}
;
numberList.forEach(number => {
    document.write(`${number} \n`);
});
