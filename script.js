//your JS code here. If required.
let searchDiv = document.querySelector(".search");
let button = document.querySelector(".btn");
let input = document.querySelector(".input");

button.addEventListener("click", () => {
    searchDiv.classList.add("active");
    input.focus();
});
