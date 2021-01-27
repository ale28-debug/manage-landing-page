var checkInput = document.getElementsByTagName('input')[0];
var feedback = document.getElementsByClassName('feedback')[0];

checkInput.addEventListener('click', function () {
    if (checkInput = " ") {
        feedback.innerHTML = " The input is empty! ";
    }
    else {
        feedback.innerHTML = " ";
    }
});







