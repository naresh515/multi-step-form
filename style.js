const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll("#submit");
const nextBtns1 = document.querySelectorAll("#submit1");
const nextBtns2 = document.querySelectorAll("#submit2");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");
const progressJar = document.querySelectorAll(".progress");
const btnComplete = document.querySelector(".btn-complete");

btnComplete.addEventListener("click", () => {
    document.getElementsByTagName('form').submit
})
let formStepsNum = 0;

function updateFormSteps() {

    formSteps.forEach(formStep => {
        formStep.classList.contains("active") &&
            formStep.classList.remove("active");
    })
    formSteps[formStepsNum].classList.add("active");
}

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("active");
        } else {
            progressStep.classList.remove("active");
        }
    })
}

nextBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const firstName = $('#firstName').val();
        const lastName = $('#lastName').val();
        if (firstName === "" || lastName == "") {
            console.log("fill this");
        } else {
            formStepsNum++;
            updateFormSteps();
            updateProgressBar();
        }

    })
})

nextBtns1.forEach(btn => {
    btn.addEventListener("click", function () {
        const mob = $('#phoneNumber').val();
        const email = $('#email').val();
        if (mob === "" || email == "") {
            console.log("fill this");
        } else {
            formStepsNum++;
            updateFormSteps();
            updateProgressBar();
        }

    })
})

nextBtns2.forEach(btn => {
    btn.addEventListener("click", function () {
        const birth = $('#birthdate').val();
        if (birth === "") {
            console.log("fill this");
        } else {
            formStepsNum++;
            updateFormSteps();
            updateProgressBar();
        }

    })
})

prevBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    })
})

function myFunction() {
    document.querySelector(".progress-step").innerHTML = "&#10004;";
    console.log("working");
}


$(document).ready(function () {
    $("#submit").click(function (e) {

        e.preventDefault()

        var user = $('#firstName').val();
        if (user == "") {
            $("#show_error").html('** The username must be field between 3 and 25 latters');
        } else {
            $("#show_error").empty()
        }

        var user1 = $('#lastName').val();
        if (user1 == "") {
            $("#show_error1").html('** The username must be field between 3 and 25 latters');
        } else {
            $("#show_error1").empty()
        }
    });

    $("#submit1").click(function (e) {
        e.preventDefault()
        var mob = $('#phoneNumber').val();
        if (mob == "") {
            $("#show_error3").html('** The Mobile No. length will be 10 Number');
        } else {
            $("#show_error3").empty()
        }

        var userinput = $('#email').val();
        var pattern = /^\b[a-zA-Z0-9.]+@[a-zA-Z0-9.]+.[a-z][A-Z]{2,4}\b$/i
        if (!pattern.test(userinput)) {
            $("#show_error2").html('** Please Enter Valid Email Address');
        } else {
            $("#show_error2").empty()
        }
    });

    $("#submit2").click(function (e) {
        e.preventDefault()
        var birth = $('#birthdate').val();
        if (birth == "") {
            $("#show_error4").html('** Please Fill this field');
        } else {
            $("#show_error4").empty()

        }
        console.log(this);
    });
});