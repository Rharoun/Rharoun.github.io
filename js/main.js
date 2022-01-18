const button = document.querySelector(".light-switch");
console.log(localStorage)
const mode1 = localStorage.getItem('mode')


button.addEventListener("click", function () {
    const mode1 = localStorage.getItem('mode')
    
    if(localStorage.length == 0){
        localStorage.setItem('mode', 0)
    }
    
    if(mode1 == 0){
        localStorage.removeItem('mode', 0)
        localStorage.setItem('mode', 1)
    }
    if(mode1 == 1){
        localStorage.removeItem('mode', 1)
        localStorage.setItem('mode', 0)
    }
    console.log(localStorage)


 })
 button.addEventListener("click", function () {
 const elements = document.querySelectorAll("body, .theme")
   for (let i = 0; i < elements.length; i++) {
    const mode1 = localStorage.getItem('mode')
        const element = elements[i];
        if(mode1 == 1){
            element.classList.add("bg-dark")
            element.classList.add("text-white")
        }
        if(mode1 == 0){
            element.classList.remove("bg-dark")
            element.classList.remove("text-white")
        }
    }
})

const elements = document.querySelectorAll("body, .theme")
   for (let i = 0; i < elements.length; i++) {
    const mode1 = localStorage.getItem('mode')
        const element = elements[i];
        if(mode1 == 1){
            element.classList.add("bg-dark")
            element.classList.add("text-white")
        }
        if(mode1 == 0){
            element.classList.remove("bg-dark")
            element.classList.remove("text-white")
        }
    }

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".light-switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const mode1 = localStorage.getItem('mode')
            if(mode1 == 1){
                element.classList.add("btn-dark")
                element.classList.add("btn-primary-outline")
            }
            if(mode1 == 0){
                element.classList.remove("btn-dark")
                element.classList.remove("btn-primary-outline")
            }
    }
})

const elements1 = document.querySelectorAll(".light-switch")
for (let i = 0; i < elements1.length; i++) {
    const element = elements1[i];
    const mode1 = localStorage.getItem('mode')
        if(mode1 == 1){
            element.classList.add("btn-dark")
            element.classList.add("btn-primary-outline")
        }
        if(mode1 == 0){
            element.classList.remove("btn-dark")
            element.classList.remove("btn-primary-outline")
        }
}

button.addEventListener("click", function () {
    const elements = document.querySelectorAll(".switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const mode1 = localStorage.getItem('mode')
        if(mode1 == 1){
            element.classList.add("text-white")
            element.classList.remove("text-dark")
            element.classList.remove("bg-light")
            element.classList.add("bg-dark")
        }
        if(mode1 == 0){
            element.classList.remove("text-white")
            element.classList.add("text-dark")
            element.classList.add("bg-light")
            element.classList.remove("bg-dark")
        }
    }
})

const elements2 = document.querySelectorAll(".switch")
    for (let i = 0; i < elements2.length; i++) {
        const element = elements2[i];
        const mode1 = localStorage.getItem('mode')
        if(mode1 == 1){
            element.classList.add("text-white")
            element.classList.remove("text-dark")
            element.classList.remove("bg-light")
            element.classList.add("bg-dark")
        }
        if(mode1 == 0){
            element.classList.remove("text-white")
            element.classList.add("text-dark")
            element.classList.add("bg-light")
            element.classList.remove("bg-dark")
    }
}


const buttonToggle = function () {
    const elements = document.querySelectorAll(".light-off")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const mode1 = localStorage.getItem('mode')
        if(mode1 == 1){
            element.classList.add("btn-dark")
            element.classList.remove("btn-light")
            element.classList.add("text-white")
            element.classList.remove("text-dark")
        }
        if(mode1 == 0){
            element.classList.remove("btn-dark")
            element.classList.add("btn-light")
        element.classList.remove("text-white")
        element.classList.add("text-dark")
      }
    }
}

const elements3 = document.querySelectorAll(".light-off")
    for (let i = 0; i < elements3.length; i++) {
        const element = elements3[i];
        const mode1 = localStorage.getItem('mode')
        if(mode1 == 1){
            element.classList.add("btn-dark")
            element.classList.add("btn-light")
            element.classList.add("text-white")
            element.classList.add("text-dark")
        }
        if(mode1 == 0){
            element.classList.remove("btn-dark")
        element.classList.remove("btn-light")
        element.classList.remove("text-white")
        element.classList.remove("text-dark")
      }
    }

