// alert('hello world')

//---- Задача 1. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Проаналізувати значення поля «field2». Якщо рядок – то вивести довжину, якщо число – то визначити чи є парним.

type DataType = {
    field1: string;
    field2: string | number;
}

const fieldOne = prompt('any text')!
const fieldTwoInput = prompt('either text or number')!

const fieldTwoNumber = parseInt(fieldTwoInput)
const fieldTwo = isNaN(fieldTwoNumber) ? fieldTwoInput : fieldTwoNumber

const data: DataType = {
    field1: fieldOne,
    field2: fieldTwo,
}

localStorage.setItem('data', JSON.stringify(data))

const isEven = (num: number) => num % 2 === 0

function analyzeField(): void {
    const data: DataType = JSON.parse(localStorage.getItem('data')!)
    if (typeof data.field2 === 'string') document.write(`Length of the string: ${data.field2.length}<hr>`)
    else {
        document.write(`Number ${data.field2} is ${isEven(data.field2) ? 'even' : 'odd'} <hr>`)
    }
}
analyzeField()

// Задача 2. У localStorage зберігається об’єкт у форматі JSON з ключем «data». Вивести на екран усі поля та їх значення.

function displayFields(): void {
    const data: DataType = JSON.parse(localStorage.getItem('data')!)
    document.write(`Field 1: ${data.field1} <br> Field 2: ${data.field2}`)
}

displayFields()