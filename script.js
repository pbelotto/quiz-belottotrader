
const quizEl = document.getElementById('quiz');
const formEl = document.getElementById('form');

const questions = [
    "Quando você toma um stop, o que costuma fazer?",
    "Na sua última sequência de perdas, o que te fez continuar?",
    "Qual dessas frases você já disse pra si mesmo?",
    "Como você reage quando vê outros ganhando e você perdendo?",
    "Se você acorda mal emocionalmente, o que faz?"
];

let current = 0;

function renderQuestion() {
    if (current < questions.length) {
        quizEl.innerHTML = `
            <p>${questions[current]}</p>
            <button onclick="next()">A</button>
            <button onclick="next()">B</button>
            <button onclick="next()">C</button>
            <button onclick="next()">D</button>
        `;
    } else {
        quizEl.style.display = "none";
        formEl.style.display = "block";
    }
}

function next() {
    current++;
    renderQuestion();
}

renderQuestion();

formEl.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = "https://www.youtube.com/watch?v=7HOuy_yxP-Y";
});
