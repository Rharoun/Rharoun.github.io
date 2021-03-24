const button = document.querySelector(".light-off");


//button.addEventListener("click", changeHandler);

//setInterval(function(){
// const current = new Date();
//console.log(current.getSeconds());
//console.log(current.getSeconds() % 5 === 0);
//if (current.getSeconds() % 5 === 0){
//  changeHandler();
//}
//}, 7000);

button.addEventListener("click", function () {
    const elements = document.querySelectorAll("body, .theme")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("bg-dark")
        element.classList.toggle("text-white")
    }
})

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".light-off")
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