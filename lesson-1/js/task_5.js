"use strict";
//---- Задача 5. Випадковим чином 10 разів генерується число або рядок «Ок». Пірахувати чого було більше чисел чи рядків і вивести останнє значення
let strCount = 0;
let numCount = 0;
let val;
for (let i = 0; i < 10; i++) {
    val = Math.random() > 0.5 ? 7 : 'ok';
    if (typeof val === 'number')
        numCount++;
    else
        strCount++;
}
document.write(`Amount of stings: ${strCount} <br> Amount of numbers: ${numCount} <hr> Last value: ${val.toString()}`);
