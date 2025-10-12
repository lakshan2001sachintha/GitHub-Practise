import { greet, sum, debounce, once, sleep } from './small.js';

console.log(greet('Asha'));        // "Hello, Asha!"
console.log(sum(1,2,3,4));         // 10



const init = once(() => console.log('initialized'));
init(); init(); // logs "initialized" only once

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

await sleep(500); // pauses ~500ms inside async function
