const button = document.querySelector(".light-off");

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("bg-dark")
        element.classList.toggle("bg-light")
        element.classList.toggle("text-white")
        element.classList.toggle("text-dark")
    }
})