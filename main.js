const button = document.querySelector(".light-switch");


button.addEventListener("click", function () {
    const elements = document.querySelectorAll("body, .theme")
   for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("bg-dark")
        element.classList.toggle("text-white")
    }
 })

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".light-switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("btn-dark")
        element.classList.toggle("btn-light")
        element.classList.toggle("text-white")
        element.classList.toggle("text-dark")
    }
})

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("text-white")
        element.classList.toggle("text-dark")
        element.classList.toggle("bg-light")
        element.classList.toggle("bg-dark")
    }
})


const buttonToggle = function () {
    const elements = document.querySelectorAll(".light-off")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("btn-dark")
        element.classList.toggle("btn-light")
        element.classList.toggle("text-white")
        element.classList.toggle("text-dark")
    }
}

