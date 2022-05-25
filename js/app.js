// Tu código aquí.


let myCounter = parseInt(counter.textContent);

update = function (valor) {
    let counter = document.querySelector("#counter");
    myCounter += valor;
    counter.textContent = myCounter;
    myCounter < 0 ? counter.style.color = "red" : myCounter > 0 ? counter.style.color = "green" : counter.style.color = "black";
}

document.querySelector(".prevBtn").addEventListener("click", () => {
    update(-1);
});

document.querySelector(".nextBtn").addEventListener("click", () => {
    update(1);
});