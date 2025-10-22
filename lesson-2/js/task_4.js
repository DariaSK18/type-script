"use strict";
//---- Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. Підрахувати чого було більше: святкових чи вихідних.
var WorkingDays;
(function (WorkingDays) {
    WorkingDays[WorkingDays["Mon"] = 1] = "Mon";
    WorkingDays[WorkingDays["Tue"] = 2] = "Tue";
    WorkingDays[WorkingDays["Wen"] = 3] = "Wen";
    WorkingDays[WorkingDays["Thu"] = 4] = "Thu";
    WorkingDays[WorkingDays["Fri"] = 5] = "Fri";
})(WorkingDays || (WorkingDays = {}));
var Weekends;
(function (Weekends) {
    Weekends["Sat"] = "sat";
    Weekends["Sun"] = "sun";
})(Weekends || (Weekends = {}));
var BankHoliday;
(function (BankHoliday) {
    BankHoliday["NewYear"] = "new year";
    BankHoliday["Christmas"] = "christmas";
    BankHoliday["Easter"] = "easter";
})(BankHoliday || (BankHoliday = {}));
const allDaysList = [
    ...Object.values(WorkingDays).filter((day) => typeof day === "number"),
    ...Object.values(Weekends),
    ...Object.values(BankHoliday),
];
function failRun(message) {
    throw new Error(message);
}
function generateRandomIndex(maxNum, minNum = 0) {
    return Math.floor(Math.random() * (maxNum - minNum + 1));
}
function generateRandomDaysArray(length, allDaysList) {
    const randomDaysList = [];
    // console.log(allDaysList);
    for (let i = 0; i < length; i++) {
        const randomDayIndex = generateRandomIndex(allDaysList.length - 1);
        randomDaysList.push(allDaysList[randomDayIndex]);
    }
    // console.log(randomDaysList);
    return randomDaysList;
}
function countDays(list) {
    try {
        if (list.length === 0)
            failRun("Day list is empty ");
        const daysCount = {
            working: 0,
            weekend: 0,
            holidays: 0,
        };
        const weekends = Object.values(Weekends);
        const holidays = Object.values(BankHoliday);
        // console.log(holidays.includes("christmas"));
        // console.log(Array.isArray(holidays));
        // console.log(holidays, typeof holidays[0]);
        list.forEach((el) => {
            if (typeof el === "number" && Object.values(WorkingDays).includes(el))
                daysCount.working++;
            if (typeof el === "string") {
                // console.log(typeof el);
                if (weekends.includes(el))
                    daysCount.weekend++;
                if (holidays.includes(el))
                    daysCount.holidays++;
            }
        });
        return daysCount;
    }
    catch (error) {
        failRun(`Error: ${error}`);
    }
}
function displayData() {
    const randomDaysArray = generateRandomDaysArray(5, allDaysList);
    const amountDays = countDays(randomDaysArray);
    document.write(`Working days amount - ${amountDays.working}<br/>
    Weekends amount - ${amountDays.weekend}<br/>
    Bank holidays amount - ${amountDays.holidays}<br/>`);
}
// console.log(generateRandomIndex(10, 0));
// console.log(generateRandomDaysArray(10, allDaysList));
// console.log(countDays(generateRandomDaysArray(5, allDaysList)));
displayData();
