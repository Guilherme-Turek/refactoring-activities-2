"use strict";
// 5. Faça a mesma atividade anterior, mas troque o função findIndex pela
// função find. Dica: para localizar o indíce do elemento na lista é possível
// utilizar a função interna do array chamada indexOf (veja a documentação
// e aprenda a como utilizar).
const listOfProducts2 = [
    'Geladeira',
    'Fogão',
    'Cafeteira',
    'Microondas',
    'Freezer',
    'Televisão',
    'Cafeteira'
];
const productPurchase2 = prompt(`Qual produto ${listOfProducts2} deseja comprar?`);
const product2 = listOfProducts2.find((product) => product == productPurchase2);
if (!product2) {
    alert(`Compra inválida, tente novamente`);
}
else {
    alert(`Compra feita com sucesso`);
    listOfProducts2.splice(listOfProducts2.indexOf(product2), 1);
}
;
console.log(listOfProducts2);
