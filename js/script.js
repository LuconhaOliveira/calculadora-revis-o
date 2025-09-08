let number1 = 0;
let number2 = 0;
let operation;

const setTime = ()=>{
    setInterval(() => {
        const now = new Date();
        const horas = now.getHours();
        const minutos = now.getMinutes().toString().padStart(2, '0');
        const segundos = now.getSeconds().toString().padStart(2, '0');

        document.querySelector('#real-time-clock').textContent = `${horas}:${minutos}:${segundos}`
    },1000);
};

document.addEventListener('DOMContentLoaded',()=>{
    setTime();
    buttons = document.querySelectorAll('.calculator__keys button');
    buttons.forEach(element => {
        element.addEventListener('click',()=>{changeNumber(element)});
    });
});


const changeNumber =(button)=>{
    value = button.getAttribute("data-number") || button.getAttribute("data-action");
     console.log(value,number1, number2, operation);
    let display = document.getElementById('display');
    switch(value){
        case 'backspace':
            display.textContent=display.textContent.slice(0,-1);
            if(!display.textContent) display.textContent=0;
            number1=display.textContent;
            break;
        case 'negative':
            parseFloat(display.textContent)>0? display.textContent = '-'+display.textContent:display.textContent = display.textContent.slice(1);
            number1=display.textContent;
            break;
        case 'invert':
            display.textContent = 1/display.textContent;
            number1=display.textContent;
            break;
        case 'factorial':
            let res=1;
            for(let i=1;i<=display.textContent;i++){
                res=res*i;
            };
            display.textContent = res;
            number1=display.textContent;
            break;
        case 'clear':
            display.textContent = '0';
            number1=0;
            number2=0;
            break;
        case 'decimal':
            if(display.textContent[display.textContent.length-1]=='.')break;
            if(parseFloat(display.textContent)-parseInt(display.textContent)==0)display.textContent += '.';
            break;
        case 'add':
            number2? display.textContent = parseFloat(number2)+parseFloat(number1) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'subtract':
            number2? display.textContent = parseFloat(number2)-parseFloat(number1) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'multiply':
            number2? display.textContent = parseFloat(number2)*parseFloat(number1) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'divide':
            number2? display.textContent = parseFloat(number2)/parseFloat(number1) : display.textContent=0;
            number2=number1;
            number1=0;
            operation=value;
            break;
        case 'power':
            display.textContent = parseInt(display.textContent)**2;
            number1=display.textContent;
            break;
        case 'sqrt':
            parseFloat(number1)>0?display.textContent = Math.sqrt(parseFloat(display.textContent)):display.textContent='Entrada inválida';
            number1=display.textContent;
            break;
        case 'percentage':
            number2? display.textContent = parseFloat(number1)/100*parseFloat(number2) : display.textContent=parseFloat(number1)/100;
            number1=display.textContent;
            break;

        case 'calculate':
            switch(operation){
                case 'add':
                    display.textContent = parseFloat(number2)+parseFloat(number1);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'subtract':
                    display.textContent = parseFloat(number2)-parseFloat(number1);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'multiply':
                    display.textContent = parseFloat(number2)*parseFloat(number1);
                    number1=display.textContent;
                    number2=0;
                    break;
                case 'divide':
                    number2==0?display.textContent = parseFloat(number2)/parseFloat(number1):display.textContent='Não é possível dividir por zero';
                    number1=display.textContent;
                    number2=0;
                    break;
            }
            break;

        default:
            let displayNumber = display.textContent;
            if(parseFloat(displayNumber)){
                displayNumber += value;
            }else{
                displayNumber = value;
            }
            display.textContent = displayNumber;
            number1=display.textContent;
            break;

    }
};

