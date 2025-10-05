//---- Задача 4. Вводиться номер дня або назва дня. Створити функцію, яка за цим значенням виводить на екран чи це робочий день.

const daysArr: Array<string> = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const userAnsDay = prompt('Enter a day from 1-7 or mon, tue, wed, thu, fri, sat, sun')!.toLowerCase()
let dayOfWeek: number | string
let definedDay: string

if (!daysArr.includes(userAnsDay)) {
    dayOfWeek = parseInt(userAnsDay)
    switch (dayOfWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5: definedDay = 'working day'
            break
        case 6:
        case 7: definedDay = 'weekend'
            break;
        default: definedDay = 'Incorrect Day!'
            break
    }
}
else if (daysArr.includes(userAnsDay)) {
    dayOfWeek = userAnsDay
    switch (dayOfWeek) {
        case 'mon':
        case 'tue':
        case 'wed':
        case 'thu':
        case 'fri': definedDay = 'working day'
            break
        case 'sat':
        case 'sun': definedDay = 'weekend'
            break;
        default: definedDay = 'Incorrect Day!'
            break
    }
}
else console.log('Incorrect Day!')

if (definedDay!) {
    document.write(definedDay.toString())
}