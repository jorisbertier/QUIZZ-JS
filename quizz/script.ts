// hook
let question: HTMLDivElement = document.querySelector('.question')  as HTMLDivElement;
let select : HTMLSelectElement = document.querySelector('.select-container') as HTMLSelectElement;
let submit : HTMLButtonElement = (<HTMLButtonElement>document.querySelector('.submit'));

// create element
const selectElement = document.createElement('select');

//question
let question1: string = "Quel est le meilleur ide?";
let question2: string = "Quel est la meilleur éditeur ?";
let question3: string = "Quel est la plus belle plage ?";
let question4: string = "Quel est la tour la plus grande ?";
let question5: string = "Qui est le meilleur formateur?";
let response1: Array<string> = ['vscode', 'phpstorm', 'sublimetext'];
let response2: Array<string> = ['microsoft', 'playstation', 'nintendo'];
let response3: Array<string> = ['rio', 'bali', 'habiti'];
let response4: Array<string> = ['tour1', 'tour2', 'tour3'];
let response5: Array<string> = ['Maxime', 'Jules', 'Marine'];

const questions: Array<string> = [question1, question2, question3, question4, question5];
const responses: Array<Array<string>> = [response1, response2, response3, response4, response5];

let currentQuestionIndex:number = 0;
let score:number = 0;

select.classList.add('hidden');

function updateQuestionAndOptions() {
    select.innerHTML = '';

    const currentResponse = responses[currentQuestionIndex];
    currentResponse.forEach(function (item, index) {
        const option = document.createElement('option');
        option.textContent = item;
        select.appendChild(option);
    });

    if(currentQuestionIndex !== 0) {
        window.alert("Votre score est de " + score + ' point.');

    }
    question.innerText = questions[currentQuestionIndex];
    currentQuestionIndex ++;
}


submit.addEventListener('click', function() {
    select.style.display = 'block';
    submit.innerHTML = 'suivant';
    if (   currentQuestionIndex === 1 && select.value === 'phpstorm'
        || currentQuestionIndex === 2 && select.value === 'microsoft'
        || currentQuestionIndex === 3 && select.value === 'bali'
        || currentQuestionIndex === 4 && select.value === 'tour2'
        || currentQuestionIndex === 5 && select.value === 'Jules'
    ) {
        score += 1;
    }


    if(currentQuestionIndex < 5) {
        updateQuestionAndOptions();
    } else {
        select.style.display = 'none';
        submit.style.display = 'none';
        question.innerText = 'Jeu terminé, votre résultat est de ' + score + ' point.';
        window.alert("Votre score est de " + score + ' point.');

    }

});
