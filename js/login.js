const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const greeting = document.getElementById("greeting");

const savedUsername = localStorage.getItem("username");

if (savedUsername) {
    showGreeting(savedUsername);
}

function showGreeting(name) {
    greeting.textContent = `Hello, ${name}!`;
    greeting.style.display = "block";
    loginForm.style.display = "none";
}

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.stopPropagation();
    const username = usernameInput.value;
    localStorage.setItem("username", username);
    showGreeting(username);
});
