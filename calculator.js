const button2 = document.querySelector('.button');
const button = document.querySelector(".light-switch");

button2.addEventListener('click', function(){
                let n1 = parseFloat(document.querySelector('.input1').value);
                let n2 = parseFloat(document.querySelector('.input2').value);
                
                let oper = document.querySelector('.operators').value;
                
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

////////

let toggleSwitch = new Boolean(true) ;

const backgroundToggle = function () {
    const elements = document.querySelectorAll("body, .theme")
    if(toggleSwitch = false){
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.classList.toggle("bg-dark")
            element.classList.toggle("text-white")
        }
        } else{
            element.classList.toggle("bg-dark")
            element.classList.toggle("text-white")
        }
}

button.addEventListener("click", function () {
    if(toggleSwitch = true){
        toggleSwitch = false ;
    } else {
        toggleSwitch = true ; 
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

const switchToggle = function () {
    const elements = document.querySelectorAll(".switch")
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.classList.toggle("text-white")
        element.classList.toggle("text-dark")
        element.classList.toggle("bg-light")
        element.classList.toggle("bg-dark")
    }
}
//let switchTest = JSON.parse(localStorage.setItem(toggleSwitch)); 

if (toggleSwitch = true){backgroundToggle()} ;
