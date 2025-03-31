import { readFileSync } from 'node:fs';
const order = readFileSync('./meal-ordering-website.json', 'utf8');

const printOrder = JSON.parse(order);
console.log(printOrder);