const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("Message");

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
           item.classList.add("error");
           item.parentElement.classList.add("error"); 
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();

        } );

    item.addEventListener("keyup", () => {
        if (item.value != "") {
            item.classList.remove("error");
            item.parentElement.classList.remove("error"); 
        }
        else {
            item.classList.add("error");
            item.parentElement.classList.add("error"); 
        }
    });
}
}

function checkEmail() {
    const emailRe = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    const errorTxtEmail = document.querySelector(".error-txt.email")
    
    if (!email.value.match(emailRe)) {
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if (email != ""){
            errorTxtEmail.innerText = "Įveskite tikrą elektroninį paštą";
        } 
        else {
            errorTxtEmail.innerText = "Šis laukas privalomas";
        };

    } 
    else {
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") 
    && !phone.classList.contains("error") && !message.classList.contains("error"))  {
        console.log("ok");

        form.reset();
        return false;
    }

})