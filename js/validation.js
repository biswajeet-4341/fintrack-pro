import { addUser, getUser } from "./storage.js";

export function registerUser(username, password, currency) {
    const attempt = {
        success: addUser(username, password, currency),
    };

    attempt.message =
        attempt.success ?
            "Registration successful! You can now log in."
        :   "Username already exists! Please choose another.";

    return attempt;
}

export function loginUser(username, password) {
    const user = getUser(username);

    const attempt = {
        success: user && user.password === password,
    };

    attempt.message = attempt.success ? "" : "Invalid username or password.";
    return attempt;
}
