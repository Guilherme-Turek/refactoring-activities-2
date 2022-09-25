"use strict";
// 2. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Crie uma nova lista somente com os números ímpares e usando o filter.
const listNumber = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];
const numberOdd = listNumber.filter(number => number % 2 != 0);
document.write(`Os números ímpares da lista : ${listNumber}. São os números : ${numberOdd}`);
