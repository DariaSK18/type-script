"use strict";
//---- Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.
const productTitleOne = prompt('Product title 1');
const productPriceOne = parseFloat(prompt('Product price 1'));
const productAmountOne = parseInt(prompt('Product amount 1'));
const productTitleTwo = prompt('Product title 2');
const productPriceTwo = parseFloat(prompt('Product price 2'));
const productAmountTwo = parseInt(prompt('Product amount 2'));
const productOneTotalPrice = totalPriceForProduct(productPriceOne, productAmountOne);
const productTwoTotalPrice = totalPriceForProduct(productPriceTwo, productAmountTwo);
const totalProductsPrice = totalPrice(productOneTotalPrice, productTwoTotalPrice);
function totalPriceForProduct(price, amount) {
    return price * amount;
}
function totalPrice(productOne, productTwo) {
    return productOne + productTwo;
}
function printCheck() {
    document.write(`Check <br> 
        1. ${productTitleOne} (${productAmountOne} pcs.) - ${productOneTotalPrice.toFixed(2)}$ <br>
        2. ${productTitleTwo} (${productAmountTwo} pcs.) - ${productTwoTotalPrice.toFixed(2)}$ <br>
        <hr>
        Total Price: ${totalProductsPrice.toFixed(2)}$`);
}
printCheck();
