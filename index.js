import { greet, sum, debounce, once, sleep } from './small.js';

console.log(greet('Asha'));        // "Hello, Asha!"
console.log(sum(1,2,3,4));         // 10

const onResize = debounce(() => console.log('resized'), 200);
// window.addEventListener('resize', onResize);

const init = once(() => console.log('initialized'));
init(); init(); // logs "initialized" only once

console.log("munasinghe rajapaksha sachintha lakshan")

console.log("sen");
console.log("ght");
console.log("ne");
console.log("tn");

console.log("v");
console.log("i");
console.log("e");
console.log("n");




await sleep(500); // pauses ~500ms inside async function
