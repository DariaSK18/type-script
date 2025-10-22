//---- Задача 4. Випадковим чином генерується масив номерів робочих днів, або назв вихідних, або назв святкових днів. Підрахувати чого було більше: святкових чи вихідних.

enum WorkingDays {
  Mon = 1,
  Tue = 2,
  Wen = 3,
  Thu = 4,
  Fri = 5,
}
enum Weekends {
  Sat = "sat",
  Sun = "sun",
}
enum BankHoliday {
  NewYear = "new year",
  Christmas = "christmas",
  Easter = "easter",
}

const allDaysList: (number | string)[] = [
  ...Object.values(WorkingDays).filter((day) => typeof day === "number"),
  ...Object.values(Weekends),
  ...Object.values(BankHoliday),
];

function failRun(message: string): never {
  throw new Error(message);
}

function generateRandomIndex(maxNum: number, minNum: number = 0): number {
  return Math.floor(Math.random() * (maxNum - minNum + 1));
}

function generateRandomDaysArray(
  length: number,
  allDaysList: (number | string)[]
) {
  const randomDaysList: (number | string)[] = [];
  // console.log(allDaysList);
  for (let i = 0; i < length; i++) {
    const randomDayIndex = generateRandomIndex(allDaysList.length - 1);
    randomDaysList.push(allDaysList[randomDayIndex]);
  }
  // console.log(randomDaysList);
  return randomDaysList;
}

function countDays(list: (number | string)[]) {
  try {
    if (list.length === 0) failRun("Day list is empty ");
    const daysCount = {
      working: 0,
      weekend: 0,
      holidays: 0,
    };

    const weekends: (string | Weekends)[] = Object.values(Weekends);
    const holidays: (string | BankHoliday)[] = Object.values(BankHoliday);
    // console.log(holidays.includes("christmas"));
    // console.log(Array.isArray(holidays));
    // console.log(holidays, typeof holidays[0]);

    list.forEach((el) => {
      if (typeof el === "number" && Object.values(WorkingDays).includes(el))
        daysCount.working++;
      if (typeof el === "string") {
        // console.log(typeof el);

        if (weekends.includes(el)) daysCount.weekend++;
        if (holidays.includes(el)) daysCount.holidays++;
      }
    });
    return daysCount;
  } catch (error) {
    failRun(`Error: ${error}`);
  }
}

function displayData(): void {
  const randomDaysArray: (number | string)[] = generateRandomDaysArray(5, allDaysList)
  const amountDays = countDays(randomDaysArray)
  document.write(`Working days amount - ${amountDays.working}<br/>
    Weekends amount - ${amountDays.weekend}<br/>
    Bank holidays amount - ${amountDays.holidays}<br/>`)
}

// console.log(generateRandomIndex(10, 0));
// console.log(generateRandomDaysArray(10, allDaysList));
// console.log(countDays(generateRandomDaysArray(5, allDaysList)));

displayData()
