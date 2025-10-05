"use strict";
//---- Задача 6. Вводиться сума грошей і позначення валюти. Потрібно перевести у інші валюти ("USD" ,  "EUR" , "UAH"). Тобто якщо вводять гривні, то перевести у долари і євро. А якщо вводять долари, то перевести у гривні  і євро. Курси валют – це константи. 
const currency = ["USD", "EUR", "UAH"];
// const currency: string[] = ["USD", "EUR", "UAH"]
const USD_CURRENCY = 1;
const EUR_CURRENCY = 0.85;
const UAH_CURRENCY = 41.28;
const moneyAmount = parseFloat(prompt('Amount of money'));
const userCurrency = prompt('Currency (usd, eur, uah)').toUpperCase();
let convertedUSD;
let convertedEUR;
let convertedUAH;
if (currency.includes(userCurrency) && !isNaN(moneyAmount)) {
    convertedUSD = convertToUSD(moneyAmount, userCurrency);
    convertedEUR = convertToEUR(moneyAmount, userCurrency);
    convertedUAH = convertToUAH(moneyAmount, userCurrency);
    display();
}
else
    document.write(`Not existing currency or wrong amount!`);
function convertToUAH(amount, currency) {
    switch (currency) {
        case "USD": return amount * UAH_CURRENCY;
        case "EUR": return amount / EUR_CURRENCY * UAH_CURRENCY;
        case "UAH": return amount;
    }
}
function convertToEUR(amount, currency) {
    // console.log(amount, currency);
    switch (currency) {
        case "USD": return amount * EUR_CURRENCY;
        case "EUR": return amount;
        case "UAH": return amount / UAH_CURRENCY * EUR_CURRENCY;
    }
}
function convertToUSD(amount, currency) {
    switch (currency) {
        case "USD": return amount;
        case "EUR": return amount / EUR_CURRENCY;
        case "UAH": return amount / UAH_CURRENCY;
    }
}
function display() {
    document.write(`Amount: ${moneyAmount} in ${userCurrency} <hr> Converted: <br> UAH : ${convertedUAH === null || convertedUAH === void 0 ? void 0 : convertedUAH.toFixed(2)}₴ <br> USD : ${convertedUSD === null || convertedUSD === void 0 ? void 0 : convertedUSD.toFixed(2)}$ <br> EUR : ${convertedEUR === null || convertedEUR === void 0 ? void 0 : convertedEUR.toFixed(2)}€`);
}
// console.log(convertedUSD, convertedUAH, convertedEUR);
