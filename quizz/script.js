// hook
var question = document.querySelector('.question');
var select = document.querySelector('.select-container');
var submit = document.querySelector('.submit');
// create element
var selectElement = document.createElement('select');
//question
var question1 = "Quel est le meilleur ide?";
var question2 = "Quel est la meilleur éditeur ?";
var question3 = "Quel est la plus belle plage ?";
var question4 = "Quel est la tour la plus grande ?";
var question5 = "Qui est le meilleur formateur?";
var response1 = ['vscode', 'phpstorm', 'sublimetext'];
var response2 = ['microsoft', 'playstation', 'nintendo'];
var response3 = ['rio', 'bali', 'habiti'];
var response4 = ['tour1', 'tour2', 'tour3'];
var response5 = ['Maxime', 'Jules', 'Marine'];
var questions = [question1, question2, question3, question4, question5];
var responses = [response1, response2, response3, response4, response5];
var currentQuestionIndex = 0;
var score = 0;
select.classList.add('hidden');
function updateQuestionAndOptions() {
    select.innerHTML = '';
    var currentResponse = responses[currentQuestionIndex];
    currentResponse.forEach(function (item, index) {
        var option = document.createElement('option');
        option.textContent = item;
        select.appendChild(option);
    });
    if (currentQuestionIndex !== 0) {
        window.alert("Votre score est de " + score + ' point.');
    }
    question.innerText = questions[currentQuestionIndex];
    currentQuestionIndex++;
}
submit.addEventListener('click', function () {
    select.style.display = 'block';
    submit.innerHTML = 'suivant';
    if (currentQuestionIndex === 1 && select.value === 'phpstorm'
        || currentQuestionIndex === 2 && select.value === 'microsoft'
        || currentQuestionIndex === 3 && select.value === 'bali'
        || currentQuestionIndex === 4 && select.value === 'tour2'
        || currentQuestionIndex === 5 && select.value === 'Jules') {
        score += 1;
    }
    if (currentQuestionIndex < 5) {
        updateQuestionAndOptions();
    }
    else {
        select.style.display = 'none';
        submit.style.display = 'none';
        question.innerText = 'Jeu terminé, votre résultat est de ' + score + ' point.';
        window.alert("Votre score est de " + score + ' point.');
    }
});
