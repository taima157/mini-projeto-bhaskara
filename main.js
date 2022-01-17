const form = document.querySelector("#calcbhaskara");
const numA = document.querySelector("#a");
const numB = document.querySelector("#b");
const numC = document.querySelector("#c");
const px1 = document.getElementById("x1");
const px2 = document.getElementById("x2")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    bhaskara();
})

function bhaskara() {
    let a = numA.value;
    let b = numB.value;
    let c = numC.value;

    let delta =  (b * b) - 4 * a * c;
    let raizDelta = Math.sqrt(delta);

    let x1 = ((-b + raizDelta) / (2 * a)).toFixed(4);
    let x2 = ((-b - raizDelta) / (2 * a)).toFixed(4);

    let resultado = {
        x1: x1,
        x2: x2
    }

    if (delta >= 0) {
        px1.innerText= resultado.x1;
        px2.innerText= resultado.x2;
    }else {
        alert(`A equação não possui raiz real. Pois seu delta é ${delta}.`)
    }
}