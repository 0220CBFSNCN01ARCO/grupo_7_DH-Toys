
window.onload = () => {
    let cantidades = document.querySelectorAll("#count");
    var plusElements = document.querySelectorAll("#plus");
    for (var i = 0; i < plusElements.length; i++) {
        (function (index) {
            plusElements[index].addEventListener("click", function () {
                for (var j = 0; j < plusElements.length; j++) {
                    if (plusElements[j] === this) {
                        cantidades[j].value = parseInt(cantidades[j].value) + 1
                    }
                }
            }, false);
        })(i);
    }
    var minusElements = document.querySelectorAll("#minus");
    for (var i = 0; i < minusElements.length; i++) {
        (function (index) {
            minusElements[index].addEventListener("click", function () {
                for (var j = 0; j < minusElements.length; j++) {
                    if (minusElements[j] === this && parseInt(cantidades[j].value) > 1) {
                        cantidades[j].value = parseInt(cantidades[j].value) - 1
                    }
                }
            }, false);
        })(i);
    }
}
