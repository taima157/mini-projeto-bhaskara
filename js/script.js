const form = document.querySelector("#calcbhaskara");
const numA = document.querySelector("#num-a");
const numB = document.querySelector("#num-b");
const numC = document.querySelector("#num-c");
const px1 = document.querySelector("#x1");
const px2 = document.querySelector("#x2")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    bhaskara();
})

function bhaskara() {
    let a = numA.value;
    let b = numB.value;
    let c = numC.value;

    let delta = (b * b) - 4 * a * c;
    let raizDelta = Math.sqrt(delta);

    let x1 = String(((-b + raizDelta) / (2 * a)).toFixed(2)).replace('.', ',');
    let x2 = String(((-b - raizDelta) / (2 * a)).toFixed(2)).replace('.', ',');

    if (delta >= 0) {
        px1.value = x1
        px2.value = x2
    }else {
        alert(`A equação não possui raiz real. Pois seu delta é ${delta}.`)
    }
}