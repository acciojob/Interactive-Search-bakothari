let button = document.querySelector(".btn");
    let input = document.querySelector(".input");
    let searchDiv = document.querySelector(".search");

    if (button && input && searchDiv) {
        button.addEventListener("click", () => {
            searchDiv.classList.add("active");
            input.focus();
        });
    }