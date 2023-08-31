

const bouton = document.querySelector('#monBouton');
bouton.addEventListener('click', function() {

    let number1 = parseInt(document.querySelector('.number1').value);
    let number2 = parseInt(document.querySelector('.number2').value);
    let operation = document.querySelector('.operation').value;
    let total = document.querySelector('.total');
    let result = 0;

    if(operation == '+') {
        result = (number1 + number2) ;
    }
    else if(operation == '-') {
        result = (number1 - number2) ;
    }
    else if(operation == '/') {
        result = (number1 / number2) ;
    }
    else if(operation == '*') {
        result = (number1 * number2) ;
    }
    else if(operation == '%') {
        result = (number1 % number2);
    }
    else 
    { console.log('Opérateur non valide.');}
    
    total.innerHTML = 'Resultat :' + result;

    
});