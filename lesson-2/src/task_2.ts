//---- Задача 2. Створити функцію, яка дозволяє знайти або останню цифру числа, або останній символ числа.

function getLastSymbol(val: number): number;
function getLastSymbol(val: string): string;

function getLastSymbol(val: number | string): number | string {
  if (typeof val === "number") return val % 10;
  if (typeof val === "string") return val[val.length - 1];
  else throw new Error("No value");
}

const num = 12345
const str = 'Hello'

document.write(`Last symbol of <b>${num}</b> - ${getLastSymbol(num).toString()}<br/>`);
document.write(`Last symbol of <b>${str}</b> - ${getLastSymbol("Hello")}<br/>`);

// const h = 'hello'
// document.write(h.slice(-1));
// document.write(h.at(-1)!);
