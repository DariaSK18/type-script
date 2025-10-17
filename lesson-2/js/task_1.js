"use strict";
//---- Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.
const monthNum = parseInt(prompt("Month number"));
function throwError(message) {
    throw new Error(message);
}
// try {
//   const monthNum:number = parseInt(prompt("Month number")!)
// } catch (error) {
// }
