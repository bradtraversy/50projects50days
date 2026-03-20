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
    {
        question: "Which company developed the React library?",
        a: "Google",
        b: "Facebook (Meta)",
        c: "Microsoft",
        d: "Apple",
        correct: "b",
    },
    {
        question: "What is the default port number for Node.js?",
        a: "3000",
        b: "8080",
        c: "5000",
        d: "8000",
        correct: "a",
    },
    {
        question: "Which CSS property is used to change the text color?",
        a: "background-color",
        b: "font-color",
        c: "color",
        d: "text-color",
        correct: "c",
    },
    {
        question: "What does API stand for?",
        a: "Application Programming Interface",
        b: "Advanced Programming Interface",
        c: "Automated Processing Interface",
        d: "Application Process Integration",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const questionCounter = document.getElementById('question-counter')
const bestScoreEl = document.getElementById('best-score')
const ratingStars = document.querySelectorAll('.star')
const currentRatingEl = document.getElementById('current-rating')
const notesTextarea = document.getElementById('notes')
const saveNotesBtn = document.getElementById('save-notes')

let currentQuiz = 0
let score = 0
let currentRating = 0
let questionRatings = JSON.parse(localStorage.getItem('questionRatings')) || {}
let questionNotes = JSON.parse(localStorage.getItem('questionNotes')) || {}
let bestScore = parseInt(localStorage.getItem('bestScore')) || 0

loadQuiz()
updateBestScore()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
    questionCounter.innerText = `${currentQuiz + 1}/${quizData.length}`
    
    loadQuestionRating()
    loadQuestionNotes()
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

function updateBestScore() {
    bestScoreEl.innerText = `Best: ${bestScore}/${quizData.length}`
}

function saveBestScore() {
    if (score > bestScore) {
        bestScore = score
        localStorage.setItem('bestScore', bestScore)
        updateBestScore()
    }
}

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.dataset.value)
        currentRating = value
        updateRatingDisplay()
        saveQuestionRating()
    })

    star.addEventListener('mouseenter', () => {
        const value = parseInt(star.dataset.value)
        highlightStars(value)
    })

    star.addEventListener('mouseleave', () => {
        highlightStars(currentRating)
    })
})

function highlightStars(rating) {
    ratingStars.forEach(star => {
        const value = parseInt(star.dataset.value)
        if (value <= rating) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    })
}

function updateRatingDisplay() {
    highlightStars(currentRating)
    if (currentRating > 0) {
        currentRatingEl.innerText = `Your rating: ${currentRating}/5`
    } else {
        currentRatingEl.innerText = 'Not rated'
    }
}

function saveQuestionRating() {
    questionRatings[currentQuiz] = currentRating
    localStorage.setItem('questionRatings', JSON.stringify(questionRatings))
}

function loadQuestionRating() {
    currentRating = questionRatings[currentQuiz] || 0
    updateRatingDisplay()
}

saveNotesBtn.addEventListener('click', () => {
    saveQuestionNotes()
    alert('Notes saved successfully!')
})

function saveQuestionNotes() {
    questionNotes[currentQuiz] = notesTextarea.value
    localStorage.setItem('questionNotes', JSON.stringify(questionNotes))
}

function loadQuestionNotes() {
    notesTextarea.value = questionNotes[currentQuiz] || ''
}

submitBtn.addEventListener('click', () => {
    saveQuestionNotes()
    saveQuestionRating()
    
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            saveBestScore()
            quiz.innerHTML = `
                <div class="final-score">
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <p class="best-score">Best Score: ${bestScore}/${quizData.length}</p>
                    <button onclick="location.reload()">Play Again</button>
                </div>
            `
        }
    } else {
        alert('Please select an answer before submitting!')
    }
})