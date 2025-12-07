

const password = document.getElementById("password");
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    } else {
        password.type = "password";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }
});


const form = document.getElementById("form");
const registerBox = document.querySelector(".register");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");


const CORRECT_NAME = "Komila";
const CORRECT_EMAIL = "komilaxibziddinova06@gmail.com";
const CORRECT_PASSWORD = "01072003";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const enteredName = nameInput.value.trim();
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = password.value; 

    if (
        enteredName === CORRECT_NAME &&
        enteredEmail === CORRECT_EMAIL &&
        enteredPassword === CORRECT_PASSWORD
    ) {

        registerBox.style.backgroundColor = "#aaf9bcff";
        registerBox.style.borderColor = "#c3e6cb";
        registerBox.style.boxShadow = "0 0 20px #28a745";
        registerBox.innerHTML =
            '<h2 style="color: #155724; text-align: center; padding: 50px;"> 🥳 Muvaffaqiyatli kirish! 🥳 </h2>';

        setTimeout(() => {
          
            window.location.href = "dashboard.html"; 
        }, 2000);
    } else {

        alert("❌ Ism, Email yoki Parol noto'g'ri. Iltimos tekshiring.");

        registerBox.style.borderColor = "red";
        registerBox.style.boxShadow = "0 0 10px red";

        setTimeout(() => {
            registerBox.style.borderColor = "#e3e3e3";
            registerBox.style.boxShadow = "none";
        }, 500);
    }
});
