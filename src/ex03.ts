// 3. Dado a seguinte lista de números:
// 8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4
// Some o valor total de todos números utilizando o reduce.

const otherListNumber : number[] = [8, 72, 1, 37, 21, 54, 7, 81, 23, 92, 12, 87, 3, 12, 6, 4];

const sum : number = otherListNumber.reduce((previous, next) => previous + next, 0);

document.write(`A soma dos números da lista ${otherListNumber}. É igual a : ${sum}`);