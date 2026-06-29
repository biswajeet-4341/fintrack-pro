import { setUser } from "./storage.js";
import { loginUser, registerUser } from "./validation.js";

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.querySelector("#login-username").value;
        const password = document.querySelector("#login-password").value;

        const loginAttempt = loginUser(username, password);

        if (loginAttempt.success) {
            setUser(username);
            window.location.replace("index.html");
        } else {
            alert(loginAttempt.message);
        }
    });
}

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.querySelector("#reg-username").value;
        const password = document.querySelector("#reg-password").value;

        const registerAttempt = registerUser(username, password, "₹");

        if (registerAttempt.success) {
            alert(registerAttempt.message);
            window.location.replace("login.html");
        } else {
            alert(registerAttempt.message);
        }
    });
}
