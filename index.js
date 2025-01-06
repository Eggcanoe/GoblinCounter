let countEl = document.getElementById("count-el");
console.log(countEl);

//Initialize the counter to 0 when page is loaded
let count = 0;

//Increases number by 1
function increment() {
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}

//Decreases number by 1
function decrease() {
  count = count - 1;
  countEl.innerText = count;
  console.log(count);
}

//Resets the number to 0
function reset() {
  count = 0;
  countEl.innerText = count;
}
