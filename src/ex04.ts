// 4. Crie uma lista com 7 produtos eletrodomésticos e pergunte para o
// usuário qual produto ele deseja comprar.
// Utilize o método findIndex para verificar se o produto que o usuário quer
// existe dentro da lista, se o produto existir mostre uma mensagem
// parabenizando pela compra e remova o produto da lista utilizando o
// splice.

const listOfProducts : string[] = [
    'Geladeira',
    'Fogão',
    'Cafeteira',
    'Microondas',
    'Freezer',
    'Televisão',
    'Cafeteira'
];

const productPurchase : string | null = prompt(`Qual produto ${listOfProducts} deseja comprar?`);

const product = listOfProducts.findIndex((product) => product == productPurchase);

if(product == -1){
    alert(`Compra inválida, tente novamente`)
} else {
    alert(`Compra feita com sucesso`)
    listOfProducts.splice(product, 1)
};

console.log(listOfProducts)