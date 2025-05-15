const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const verifyBox = document.getElementById('verify')
const dragEl    = document.getElementById('drag')    
const dropEl    = document.getElementById('drop')    
const verifyMsg = document.getElementById('verify-msg')

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const feedbackEl= document.getElementById('feedback')
dragEl.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'drag');
});
dropEl.addEventListener('dragover', e => e.preventDefault());
dropEl.addEventListener('drop', e => {
  e.preventDefault();
  if (e.dataTransfer.getData('text/plain') === 'drag') {
    dragEl.style.top  = dropEl.offsetTop + 'px';
    dragEl.style.left = dropEl.offsetLeft + 'px';
    dragEl.setAttribute('draggable', false);
    dragEl.style.cursor = 'default';

    verifyMsg.style.color = '#27ae60';
    verifyMsg.textContent = '✔ Verification passed! Starting...';

    setTimeout(() => {
      verifyBox.classList.add('hidden'); 
      quiz.classList.remove('hidden');   
      loadQuiz();                 
    }, 700);
  }
});
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()
    feedbackEl.textContent = '';
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if (!answer) return

  const correct = answer === quizData[currentQuiz].correct
  if (correct) score++
  feedbackEl.style.color = correct ? '#27ae60' : '#c0392b'
  feedbackEl.textContent = correct ? 'Correct!' : 'Wrong!'

  setTimeout(() => {
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }，900）
})
