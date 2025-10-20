//---- Задача 3. Вводиться номер місяця або назва місяця. Створити функцію, яка повинна повертати номер пори року (1-4) якщо передаємо число, або назву пори року, якщо було введено назву місяця. Використати перевантаження функцій.

const userInputMonth = prompt("Enter number or name of the month");

const monthNumList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const monthTitleList = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

type SeasonsType = "Spring" | "Summer" | "Autumn" | "Winter";

function fail(message: string): never {
  throw new Error(message);
}

function parseUserInputMonth(val: string): number;
function parseUserInputMonth(val: string): string;

function parseUserInputMonth(val: string): number | string {
  const trimmedVal = val.trim();
  const monthNum = Number(trimmedVal);
  // isInteger ???
  if (!isNaN(monthNum) && monthNumList.includes(monthNum)) return monthNum;
  if (isNaN(monthNum) && monthTitleList.includes(trimmedVal.toLowerCase()))
    return trimmedVal.toLowerCase();
  else fail("Not a month");
}

function getSeasonTitle(month: number): number;
function getSeasonTitle(month: string): string;

function getSeasonTitle(month: number | string): number | string {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 1;
    case "december":
    case "january":
    case "february":
      return "winter";
    case 3:
    case 4:
    case 5:
      return 2;
    case "march":
    case "april":
    case "may":
      return "spring";
    case 6:
    case 7:
    case 8:
      return 3;
    case "june":
    case "july":
    case "august":
      return "summer";
    case 9:
    case 10:
    case 11:
      return 4;
    case "september":
    case "october":
    case "november":
      return "summer";
    default:
      fail(`Unknown season: ${month}`);
  }
}

try {
  if (userInputMonth) {
    const month: number | string = parseUserInputMonth(userInputMonth);
    const season: number | string = getSeasonTitle(month);
    document.write(`The season: ${season}<br/> The month: ${month}`);
  } else fail("Enter a value");
} catch (error) {
  fail(`Error: ${error}`);
}
