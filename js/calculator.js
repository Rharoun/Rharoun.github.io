const button2 = document.querySelector('.button');
const button = document.querySelector(".light-switch");

button2.addEventListener('click', function(){
                let n1 = parseFloat(document.querySelector('.input1').value);
                let n2 = parseFloat(document.querySelector('.input2').value);
                
                let oper = document.querySelector('.buttons').value;
                
                if(oper === '+')
                {
                    document.querySelector('.result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.querySelector('.result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.querySelector('.result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.querySelector('.result').value = n1*n2;
                }
                if(oper === '%')
                {
                    document.querySelector('.result').value = n1*n2/100;
                }
})


console.log(localStorage)
const mode1 = localStorage.getItem('mode')

button.addEventListener("click", function () {
    const mode1 = localStorage.getItem('mode')
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
