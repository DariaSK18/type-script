// alert('hello world')

// Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.


// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.

//---- Задача 3. Вводиться назва продукту, ціна одиниці та кількість для 2-х видів товарів. Вивести чек про купівлю.

// const productTitleOne: string = prompt('Product title 1')!
// const productPriceOne: number = parseFloat(prompt('Product price 1')!)
// const productAmountOne: number = parseInt(prompt('Product amount 1')!)

// const productTitleTwo: string = prompt('Product title 2')!
// const productPriceTwo: number = parseFloat(prompt('Product price 2')!)
// const productAmountTwo: number = parseInt(prompt('Product amount 2')!)

// const productOneTotalPrice: number = totalPriceForProduct(productPriceOne, productAmountOne)
// const productTwoTotalPrice: number = totalPriceForProduct(productPriceTwo, productAmountTwo)

// const totalProductsPrice: number = totalPrice(productOneTotalPrice, productTwoTotalPrice)


// function totalPriceForProduct(price: number, amount: number) {
//     return price * amount
// }

// function totalPrice(productOne: number, productTwo: number) {
//     return productOne + productTwo
// }

// function printCheck(): void {
//     document.write(`Check <br> 
//         1. ${productTitleOne} (${productAmountOne} pcs.) - ${productOneTotalPrice.toFixed(2)}$ <br>
//         2. ${productTitleTwo} (${productAmountTwo} pcs.) - ${productTwoTotalPrice.toFixed(2)}$ <br>
//         <hr>
//         Total Price: ${totalProductsPrice.toFixed(2)}$`)
// }

// printCheck()

//---- Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.

// const daysArr: Array<string> = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// const userAnsDay = prompt('Enter a day from 1-7 or mon, tue, wed, thu, fri, sat, sun')!.toLowerCase()
// let dayOfWeek: number | string
// let definedDay: string

// if (!daysArr.includes(userAnsDay)) {
//     dayOfWeek = parseInt(userAnsDay)
//     switch (dayOfWeek) {
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5: definedDay = 'working day'
//             break
//         case 6:
//         case 7: definedDay = 'weekend'
//             break;
//         default: definedDay = 'Incorrect Day!'
//             break
//     }
// }
// else if (daysArr.includes(userAnsDay)) {
//     dayOfWeek = userAnsDay
//     switch (dayOfWeek) {
//         case 'mon':
//         case 'tue':
//         case 'wed':
//         case 'thu':
//         case 'fri': definedDay = 'working day'
//             break
//         case 'sat':
//         case 'sun': definedDay = 'weekend'
//             break;
//         default: definedDay = 'Incorrect Day!'
//             break
//     }
// }
// else console.log('Incorrect Day!')

// if (definedDay!) {
//     document.write(definedDay.toString())
// }

//---- Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення

// let strCount:number = 0
// let numCount:number = 0
// let val:number | string

// for (let i = 0; i < 10; i++) {
//     val = Math.random()>0.5 ? 7 : 'ok'
//     if(typeof val === 'number') numCount++
//     else strCount++
// }
// document.write(`Amount of stings: ${strCount} <br> Amount of numbers: ${numCount} <hr> Last value: ${val!.toString()}`)

// Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. 

// type Currency = "USD" | "EUR" | "UAH"
// const currency: Currency[] = ["USD", "EUR", "UAH"]
// // const currency: string[] = ["USD", "EUR", "UAH"]

// const USD_CURRENCY = 1
// const EUR_CURRENCY = 0.85
// const UAH_CURRENCY = 41.28

// const moneyAmount: number = parseFloat(prompt('Amount of money')!)
// const userCurrency = prompt('Currency')!.toUpperCase() as Currency

// let convertedUSD: unknown
// let convertedEUR: unknown
// let convertedUAH: unknown

// if (currency.includes(userCurrency)) {
//     convertedUSD = convertToUSD(moneyAmount, userCurrency)
//     convertedEUR = convertToEUR(moneyAmount, userCurrency)
//     convertedUAH = convertToUAH(moneyAmount, userCurrency)
// }


// function convertToUAH(amount: number, currency: string): number | undefined{
//     switch (currency) {
//         case "USD": return amount * UAH_CURRENCY
//         case "EUR": return amount / EUR_CURRENCY * UAH_CURRENCY
//         case "UAH": return amount
//     }
// }
// function convertToEUR(amount: number, currency: string): number | undefined {
//     // console.log(amount, currency);
//     switch (currency) {
//         case "USD": return amount * EUR_CURRENCY
//         case "EUR": return amount
//         case "UAH": return amount / UAH_CURRENCY * EUR_CURRENCY
//     }
// }
// function convertToUSD(amount: number, currency: string): number | undefined {
//     switch (currency) {
//         case "USD": return amount
//         case "EUR": return amount / EUR_CURRENCY
//         case "UAH": return amount / UAH_CURRENCY
//     }
// }

// console.log(convertedUSD, convertedUAH, convertedEUR);
