let factor1, factor2;
const spanFactor1 = document.getElementById('factor1');
const spanFactor2 = document.getElementById('factor2');
const spanAnswer = document.getElementById('answer');
const buttonNewQuestion = document.getElementById('buttonNewQuestion');
const buttonShowAnswer = document.getElementById('buttonShowAnswer');

const toggleButtons = () => {
    buttonNewQuestion.classList.toggle('hidden');
    buttonShowAnswer.classList.toggle('hidden');
}

const newQuestion = () => {
    factor1 = Math.floor(Math.random() * 8) + 2 ;
    factor2 = Math.floor(Math.random() * 8) + 2 ;
    spanFactor1.textContent = factor1;
    spanFactor2.textContent = factor2;
    spanAnswer.textContent = '??';
    toggleButtons();
}

const showAnswer = () => {
    spanAnswer.textContent = factor1 * factor2;
    toggleButtons();
}

window.onload = newQuestion();

buttonNewQuestion.addEventListener('click', () => {
    newQuestion();
});

buttonShowAnswer.addEventListener('click', () => {
    showAnswer();
});