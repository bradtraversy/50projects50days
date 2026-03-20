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
        question: "Which company developed JavaScript?",
        a: "Microsoft",
        b: "Netscape",
        c: "Google",
        d: "Apple",
        correct: "b",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script href='xxx.js'>",
        b: "<script name='xxx.js'>",
        c: "<script src='xxx.js'>",
        d: "<script file='xxx.js'>",
        correct: "c",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "alertBox('Hello World');",
        b: "msg('Hello World');",
        c: "alert('Hello World');",
        d: "msgBox('Hello World');",
        correct: "c",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "*",
        b: "-",
        c: "=",
        d: "x",
        correct: "c",
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
const noteInput = document.getElementById('note-input')
const saveNoteBtn = document.getElementById('save-note')
const ratingContainer = document.getElementById('rating-container')
const ratingValue = document.getElementById('rating-value')
const highScoreDisplay = document.getElementById('high-score-display')

let currentQuiz = 0
let score = 0
let currentRating = 0

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('quizNotes')) || {}
    return notes
}

function saveNote(questionIndex, note) {
    const notes = loadNotes()
    notes[questionIndex] = note
    localStorage.setItem('quizNotes', JSON.stringify(notes))
}

function getNote(questionIndex) {
    const notes = loadNotes()
    return notes[questionIndex] || ''
}

function loadHighScores() {
    const highScores = JSON.parse(localStorage.getItem('quizHighScores')) || {}
    return highScores
}

function saveHighScore(questionIndex, rating) {
    const highScores = loadHighScores()
    const currentHigh = highScores[questionIndex] || 0
    if (rating > currentHigh) {
        highScores[questionIndex] = rating
        localStorage.setItem('quizHighScores', JSON.stringify(highScores))
        return true
    }
    return false
}

function getHighScore(questionIndex) {
    const highScores = loadHighScores()
    return highScores[questionIndex] || 0
}

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    if (noteInput) {
        noteInput.value = getNote(currentQuiz)
    }

    currentRating = 0
    updateRatingDisplay()
    
    if (highScoreDisplay) {
        const highScore = getHighScore(currentQuiz)
        highScoreDisplay.textContent = highScore > 0 ? `历史最高分: ${highScore}分` : '暂无评分记录'
    }
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

function updateRatingDisplay() {
    const stars = ratingContainer.querySelectorAll('.star')
    stars.forEach((star, index) => {
        if (index < currentRating) {
            star.classList.add('active')
        } else {
            star.classList.remove('active')
        }
    })
    ratingValue.textContent = currentRating > 0 ? `${currentRating}分` : '未评分'
}

if (ratingContainer) {
    ratingContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('star')) {
            currentRating = parseInt(e.target.dataset.value)
            updateRatingDisplay()
            
            const isNewHighScore = saveHighScore(currentQuiz, currentRating)
            if (isNewHighScore && highScoreDisplay) {
                const highScore = getHighScore(currentQuiz)
                highScoreDisplay.textContent = `历史最高分: ${highScore}分`
                highScoreDisplay.classList.add('new-record')
                setTimeout(() => {
                    highScoreDisplay.classList.remove('new-record')
                }, 1000)
            }
        }
    })
}

if (saveNoteBtn) {
    saveNoteBtn.addEventListener('click', () => {
        const note = noteInput.value.trim()
        saveNote(currentQuiz, note)
        
        const originalText = saveNoteBtn.textContent
        saveNoteBtn.textContent = '已保存!'
        saveNoteBtn.classList.add('saved')
        setTimeout(() => {
            saveNoteBtn.textContent = originalText
            saveNoteBtn.classList.remove('saved')
        }, 1500)
    })
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
            const allNotes = loadNotes()
            const allHighScores = loadHighScores()
            
            let notesHtml = '<div class="result-notes"><h3>题目笔记汇总:</h3>'
            quizData.forEach((q, index) => {
                const note = allNotes[index] || '无笔记'
                const highScore = allHighScores[index] || 0
                notesHtml += `
                    <div class="note-item">
                        <strong>第${index + 1}题:</strong> 
                        <span class="note-text">${note}</span>
                        <span class="note-score">最高分: ${highScore}分</span>
                    </div>
                `
            })
            notesHtml += '</div>'

            quiz.innerHTML = `
                <div class="quiz-header">
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    ${notesHtml}
                </div>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
