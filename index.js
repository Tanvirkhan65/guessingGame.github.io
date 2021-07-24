/**
 * guessing game
 * maximum minimum law 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */ 
let low = 1;
let high = 10;
let correcrt_ans = Math.floor(Math.random() * (high - low + 1) + low);

for (let i = 0; i < 3; i++) {
    document.write(`<h1>your chances left ${3 - i}</h1>`);
  let guessing = parseInt(prompt("Enter e number between 0 - 10: "));
  
  if (guessing > correcrt_ans) {
    document.write("<h1> your input number greater than result </h1>");
    continue;
  } else if (guessing < correcrt_ans) {
    document.write("<h1> your input number less than result </h1>");
    continue;
  } else if (guessing == correcrt_ans) {
    document.write("<h1> Wow!! you guessing the correct number you win </h1>");
    continue;
  }
}