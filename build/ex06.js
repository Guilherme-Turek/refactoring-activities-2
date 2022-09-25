"use strict";
// 6. Dado a seguinte lista de números:
// 17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32
// a) Adicione +1 em cada valor da lista;
// b) Crie um novo array contendo apenas os valores ímpares;
// c) Crie um novo array alterando todos os valores ímpares para o
// próximo valor par;
// d) Crie um novo array com os valores menores do que 20;
// e) Crie um novo array com os valores menores do que 17 e incremente
// cada um dos valores desse novo array;
// f) Retorne a soma de todos os valores menores do que 20;
const numbers = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
const a = numbers.map((number) => number + 1);
const b = numbers.filter((number) => number % 2 != 0);
const c = numbers.map((number) => {
    if (number % 2 != 0) {
        return number += 1;
    }
    else {
        return number;
    }
});
const d = numbers.filter((number) => number < 20);
const e = numbers.filter((number) => number < 17).map((number) => number + 1);
const f = numbers.filter((number) => number < 20).reduce((previous, next) => previous + next, 0);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
