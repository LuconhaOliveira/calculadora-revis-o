let number1 = 0;
let number2 = 0;
let operation;

const setTime = ()=>{
    setInterval(() => {
        const now = new Date();
        const horas = now.getHours();
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');
        const dataAtual = now.toLocaleDateString('pt-BR');

        document.querySelector('#real-time-clock').textContent = ```${horas}:${minutos}:${segundos}```
    },1000);
};

document.addEventListener('DOMContentLoaded',()=>{
    buttons = document.querySelectorAll('.calculator__keys button');
    buttons.forEach(element => {
        element.addEventListener('click',()=>{changeNumber(element)});
    });
    setTime();
});


const changeNumber =(button)=>{
    value = button.getAttribute("data-number") || button.getAttribute("data-action");
    console.log(value);
    let display = document.getElementById('display');
    let displayNumber = display.textContent;
    switch(value){
        case 'clear':
            display.textContent = '0';
            number1=0;
            number2=0;
            break;
        case 'decimal':
            display.textContent = '.'
            break;
        case 'add':
            number2? display.textContent = parseFloat(number1)+parseFloat(number2) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'subtract':
            number2? display.textContent = parseFloat(number1)-parseFloat(number2) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'multiply':
            number2? display.textContent = parseFloat(number1)*parseFloat(number2) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'divide':
            display.textContent = parseFloat(display.textContent)**2;
            number1=display.textContent;
            break;
        case 'power':
            display.textContent = Math.sqrt(parseFloat(display.textContent));
            number1=display.textContent;
            break;
        case 'sqrt':
            number2? display.textContent = parseFloat(number1)+parseFloat(number2) : display.textContent=0;
            number1=display.textContent;
            break;
        case 'percentage':
            number2? display.textContent = parseFloat(number1)/100*parseFloat(number2) : display.textContent=parseFloat(number1)/100;
            number1=display.textContent;
            break;

        case 'calculate':
            switch(operation){
                case 'add':
                    display.textContent = parseFloat(number1)+parseFloat(number2);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'subtract':
                    display.textContent = parseFloat(number1)-parseFloat(number2);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'multiply':
                    display.textContent = parseFloat(number1)*parseFloat(number2);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'divide':
                    display.textContent = parseFloat(number1)/parseFloat(number2);
                    number1=display.textContent;
                    number2=0;
                    break;
            }
            break;

        default:
            if(parseFloat(displayNumber)){
                displayNumber += value;
            }else{
                displayNumber = value;
            }
            display.textContent = displayNumber;
            break;

    }
};

