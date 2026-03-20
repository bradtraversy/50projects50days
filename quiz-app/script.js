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
        question: "Which HTTP method is used to retrieve data from a server?",
        a: "POST",
        b: "PUT",
        c: "GET",
        d: "DELETE",
        correct: "c",
    },
    {
        question: "What is the purpose of the 'localStorage' in JavaScript?",
        a: "To store temporary session data",
        b: "To store data permanently in the browser",
        c: "To store cookies only",
        d: "To store data on the server",
        correct: "b",
    },
    {
        question: "Which CSS property is used to change the text color?",
        a: "text-color",
        b: "font-color",
        c: "color",
        d: "foreground",
        correct: "c",
    },
    {
        question: "What does DOM stand for?",
        a: "Data Object Model",
        b: "Document Object Model",
        c: "Digital Ordinance Model",
        d: "Desktop Orientation Module",
        correct: "b",
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
const notesEl = document.getElementById('notes')
const saveNotesBtn = document.getElementById('save-notes')
const saveStatusEl = document.getElementById('save-status')
const starsEl = document.getElementById('rating-stars')
const highScoreEl = document.getElementById('high-score')

let currentQuiz = 0
let score = 0
let currentRating = 0

const NOTES_KEY = 'quiz_notes'
const RATINGS_KEY = 'quiz_ratings'

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY) || '{}')
    notesEl.value = notes[currentQuiz] || ''
}

function saveNotes() {
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY) || '{}')
    notes[currentQuiz] = notesEl.value
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
    saveStatusEl.textContent = '笔记已保存!'
    setTimeout(() => {
        saveStatusEl.textContent = ''
    }, 2000)
}

function loadRatings() {
    const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || '{}')
    const highScore = ratings[currentQuiz] || 0
    highScoreEl.textContent = highScore > 0 ? `历史最高分: ${highScore}分` : '历史最高分: 未评分'
    currentRating = 0
    updateStarsDisplay(0)
}

function saveRating(rating) {
    const ratings = JSON.parse(localStorage.getItem(RATINGS_KEY) || '{}')
    const currentHigh = ratings[currentQuiz] || 0
    if (rating > currentHigh) {
        ratings[currentQuiz] = rating
        localStorage.setItem(RATINGS_KEY, JSON.stringify(ratings))
        highScoreEl.textContent = `历史最高分: ${rating}分`
    }
}

function updateStarsDisplay(rating) {
    const stars = starsEl.querySelectorAll('.star')
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    })
}

starsEl.addEventListener('click', (e) => {
    if (e.target.classList.contains('star')) {
        currentRating = parseInt(e.target.dataset.rating)
        updateStarsDisplay(currentRating)
        saveRating(currentRating)
    }
})

starsEl.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('star')) {
        const rating = parseInt(e.target.dataset.rating)
        updateStarsDisplay(rating)
    }
})

starsEl.addEventListener('mouseleave', () => {
    updateStarsDisplay(currentRating)
})

saveNotesBtn.addEventListener('click', saveNotes)

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    loadNotes()
    loadRatings()
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
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})