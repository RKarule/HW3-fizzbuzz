
console.log('Script started');

function fizzBuzz () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
    var clearButton = document.getElementById('clear');
    clearButton.addEventListener("click", onClickClear);
}

function onClick() {
    onClickClear();
    console.log('Button hit');
        for(let i = 1; i<=100; i++){
            const number = document.createElement('div');
            number.className = "number" + i;
            elements.appendChild(number);
                if (i % 3 ===0 && i % 5 === 0){
                    number.setAttribute("id", "number" +i);
                    number.setAttribute("class", "FizzBuzz");
                    number.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    number.setAttribute("id", "number" +i);
                    number.setAttribute("class", "Fizz");
                    number.innerText="Fizz " + i;
                    
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    number.setAttribute("id", "number" +i);
                    number.setAttribute("class", "Buzz");
                    number.innerText="Buzz " + i;
                    
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    number.setAttribute("id", "number" +i);
                    number.setAttribute("class", "Empty");
                    number.innerText=i;
                    
                }
        }
}

function onClickClear () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Results cleared!');
}

 function addListeners() {
    const submit = document.getElementById('result');
    submit.onclick = onClick;
}



fizzBuzz();