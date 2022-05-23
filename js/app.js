// Tu código aquí.

let counter = document.querySelector("#counter");
console.log(counter);
let myCounter = parseInt(counter.textContent);
console.log(myCounter);

let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");


prevBtn.addEventListener("click", function () {
    myCounter--;
    counter.textContent = myCounter;

    setColor();
})

nextBtn.addEventListener("click", function () {
    myCounter++;
    counter.textContent = myCounter;

    setColor();
})

setColor = function () {
    myCounter < 0 ? counter.style.color = "red" : myCounter > 0 ? counter.style.color = "green" : counter.style.color = "black";
}