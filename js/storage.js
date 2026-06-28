const registeredUsers =
    JSON.parse(localStorage.getItem("registeredUsers")) || [];

export function addUser(username, password, currency) {
    if (getUser(username)) return false;

    registeredUsers.push({
        username,
        password,
        currency,
    });

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    return true;
}

export function getUser(username) {
    return registeredUsers.find((elem) => elem.username === username);
}

// export function setUser(username) {
//     const user = getUser(username);
//     localStorage.setItem("user", JSON.stringify({ username, currency }));
// }
