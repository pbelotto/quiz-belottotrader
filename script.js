
const quizEl = document.getElementById('quiz');
const formEl = document.getElementById('form');

const questions = [
  {
    question: "Na sua última sequência de perdas, o que te fez continuar?",
    answers: [
      "Pura teimosia",
      "Medo de admitir que não estava preparado",
      "Coragem e estratégia",
      "Vontade de provar que 'dessa vez vai'"
    ]
  },
  {
    question: "Quando você toma um stop, o que costuma fazer?",
    answers: [
      "Tento recuperar logo em seguida",
      "Fico paralisado e travo nas próximas entradas",
      "Aceito o stop e sigo o plano",
      "Duvido da estratégia e penso em mudar tudo"
    ]
  },
  {
    question: "Qual dessas frases você já disse pra si mesmo?",
    answers: [
      "Não aguento mais isso",
      "Vou só tentar recuperar e encerrar",
      "Preciso me controlar melhor",
      "Fui disciplinado, mas o mercado me testou"
    ]
  },
  {
    question: "Como você reage quando vê outros ganhando e você perdendo?",
    answers: [
      "Aumento a mão pra tentar compensar",
      "Me saboto, opero mal por raiva",
      "Me concentro em melhorar meu processo",
      "Fecho o gráfico e fico com sentimento de fracasso"
    ]
  },
  {
    question: "Se você acorda mal emocionalmente, o que faz?",
    answers: [
      "Opero mesmo assim, vai que dá",
      "Opero com o dobro de atenção",
      "Avalio se devo operar ou não",
      "Nem percebo, já tô no gráfico antes de pensar"
    ]
  }
];

let current = 0;

function renderQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    quizEl.innerHTML = `<h2>${q.question}</h2>` +
      q.answers.map(ans => `<button onclick="next()">${ans}</button>`).join("");
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
