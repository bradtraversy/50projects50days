const counters = document.querySelectorAll('.counter')
const resetBtn = document.getElementById('reset-btn'); 
const themeToggle = document.getElementById('theme-toggle'); // Select the toggle button
const body = document.body;

// The main function that starts the counter animation
function startCounter() {
    counters.forEach(counter => {
        // Clear any running timers
        if (counter.timer) {
            clearTimeout(counter.timer);
        }
        
        // Reset the inner text to '0' before starting
        counter.innerText = '0'; 

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
            const increment = target / 200

            if(c < target) {
                // Update the text and schedule the next update
                counter.innerText = `${Math.ceil(c + increment)}`
                counter.timer = setTimeout(updateCounter, 1) // Store the timer ID
            } else {
                // Set the final target value
                counter.innerText = target
            }
        }
        
        // Start the animation for the current counter
        updateCounter()
    })
}


// --- Reset Logic ---

function resetCounters() {
    counters.forEach(counter => {
        // 1. Stop any current animations
        if (counter.timer) {
            clearTimeout(counter.timer);
        }
        
        // 2. Reset the display value to zero
        counter.innerText = '0';
    });
    
    // 3. Restart the entire animation process after a short delay
    setTimeout(startCounter, 50); 
}


// --- Theme Toggle Logic ---

themeToggle.addEventListener('click', () => {
    // Toggle the dark-mode class on the body element
    body.classList.toggle('dark-mode');

    // Change the button icon for better UI feedback
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerText = '☀️'; // Change to Sun icon for light mode
    } else {
        themeToggle.innerText = '🌙'; // Change to Moon icon for dark mode
    }
});


// --- Event Listeners and Initial Run ---

// Start the animation when the page loads
startCounter(); 

// Listen for the reset button click
resetBtn.addEventListener('click', resetCounters);