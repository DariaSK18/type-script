//---- Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.

const productTitleOne: string = prompt('Product title 1')!
const productPriceOne: number = parseFloat(prompt('Product price 1')!)
const productAmountOne: number = parseInt(prompt('Product amount 1')!)

const productTitleTwo: string = prompt('Product title 2')!
const productPriceTwo: number = parseFloat(prompt('Product price 2')!)
const productAmountTwo: number = parseInt(prompt('Product amount 2')!)

const productOneTotalPrice: number = totalPriceForProduct(productPriceOne, productAmountOne)
const productTwoTotalPrice: number = totalPriceForProduct(productPriceTwo, productAmountTwo)

const totalProductsPrice: number = totalPrice(productOneTotalPrice, productTwoTotalPrice)


function totalPriceForProduct(price: number, amount: number) {
    return price * amount
}

function totalPrice(productOne: number, productTwo: number) {
    return productOne + productTwo
}

function printCheck(): void {
    document.write(`Check <br> 
        1. ${productTitleOne} (${productAmountOne} pcs.) - ${productOneTotalPrice.toFixed(2)}$ <br>
        2. ${productTitleTwo} (${productAmountTwo} pcs.) - ${productTwoTotalPrice.toFixed(2)}$ <br>
        <hr>
        Total Price: ${totalProductsPrice.toFixed(2)}$`)
}

printCheck()
