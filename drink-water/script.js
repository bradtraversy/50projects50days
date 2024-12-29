const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const goalDisplay = document.getElementById('goal-display');
const glassInfo = document.getElementById('glass-info');

let goal = 2; // Default goal in liters
let mlPerGlass = (goal * 1000) / 8; // Default milliliters per glass

function setGoal() {
    const inputGoal = parseFloat(document.getElementById('goal').value);
    if (inputGoal >= 0.5 && inputGoal <= 5) {
        goal = inputGoal;
        // Calculate ml per glass by dividing total ml by 8 glasses
        mlPerGlass = Math.round((goal * 1000) / 8);

        // Update display elements
        glassInfo.textContent = `Each glass represents: ${mlPerGlass} ml`;
        goalDisplay.textContent = `Goal: ${goal} Liters`;
        liters.textContent = `${goal.toFixed(2)}L`;

        // Update text inside each small cup
        smallCups.forEach((cup) => {
            cup.textContent = `${mlPerGlass} ml`;
        });

        updateBigCup();
    } else {
        alert('Please set a goal between 0.5 and 5 liters.');
    }
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling?.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${(fullCups / totalCups) * 330}px`;
        percentage.innerText = `${Math.round((fullCups / totalCups) * 100)}%`;
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${(goal - (mlPerGlass / 1000) * fullCups).toFixed(2)}L`;
    }
}