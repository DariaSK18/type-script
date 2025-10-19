"use strict";
//---- Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.
const userInput = prompt("Month number");
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var Seasons;
(function (Seasons) {
    Seasons[Seasons["Spring"] = 3] = "Spring";
    Seasons[Seasons["Summer"] = 6] = "Summer";
    Seasons[Seasons["Autumn"] = 9] = "Autumn";
    Seasons[Seasons["Winter"] = 12] = "Winter";
})(Seasons || (Seasons = {}));
function throwError(message) {
    throw new Error(message);
}
function parseUserInput(val) {
    // number | Season ??
    const number = parseInt(val);
    if (isNaN(number) || number < 1 || number > 12)
        throwError(`Incorrect Season ${val}`);
    return number;
}
function getFirstSeasonMonth(monthList, userInput) {
    const monthNum = parseUserInput(userInput);
    if (monthList.includes(monthNum) &&
        !Object.values(Seasons).includes(monthNum))
        throwError("Not first month of season");
    return monthNum;
}
function getSeason(monthList, userInput) {
    let season;
    const monthNum = getFirstSeasonMonth(monthList, userInput);
    // console.log(monthNum)
    switch (monthNum) {
        case Seasons.Spring:
            season = "Spring";
            break;
        case Seasons.Summer:
            season = "Summer";
            break;
        case Seasons.Autumn:
            season = "Autumn";
            break;
        case Seasons.Winter:
            season = "Winter";
            break;
        default:
            const _exhaustiveCheck = monthNum;
            throwError(`Unknown season: ${monthNum}`);
    }
    return season;
}
try {
    if (userInput) {
        document.write(getSeason(monthList, userInput));
    }
    else
        throwError("No month number was entered");
}
catch (error) {
    throwError(`Error: ${error}`);
}
