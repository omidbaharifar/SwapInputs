function swap() {
    var firstInput = document.getElementById("first"),
        secondInput = document.getElementById("second"),
        firstInputValue = firstInput.value;

        firstInput.value = secondInput.value;
        secondInput.value = firstInputValue;
}


