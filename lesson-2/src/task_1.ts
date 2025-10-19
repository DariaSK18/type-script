//---- Задача 1. Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). Визначити пору року. Передбачити перевірку і генерувати помилку якщо некоректний місяць (1-12) і генерувати помилку якщо це не перший місяць пори року. Використати never.

const userInput = prompt("Month number");
const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

type SeasonType = "Spring" | "Summer" | "Autumn" | "Winter";
enum Seasons {
  Spring = 3,
  Summer = 6,
  Autumn = 9,
  Winter = 12,
}

function throwError(message: string): never {
  throw new Error(message);
}

function parseUserInput(val: string): number {
  // number | Season ??
  const number = parseInt(val);
  if (isNaN(number) || number < 1 || number > 12)
    throwError(`Incorrect Season ${val}`);
  return number;
}

function getFirstSeasonMonth(monthList: number[], userInput: string): Seasons {
  const monthNum: number = parseUserInput(userInput);
  if (
    monthList.includes(monthNum) &&
    !Object.values(Seasons).includes(monthNum)
  )
    throwError("Not first month of season");
  return monthNum;
}

function getSeason(monthList: number[], userInput: string): SeasonType {
  let season: SeasonType;
  const monthNum: Seasons = getFirstSeasonMonth(monthList, userInput);
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
      const _exhaustiveCheck: never = monthNum;
      throwError(`Unknown season: ${monthNum}`);
  }
  return season;
}

try {
  if (userInput) {
    document.write(getSeason(monthList, userInput));
  } else throwError("No month number was entered");
} catch (error) {
  throwError(`Error: ${error}`);
}
