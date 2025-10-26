const panels = document.querySelectorAll('.panel');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

let currentActive = 0; // Track the index of the currently active panel
let intervalId = null; // To store the interval timer

// --- Core Functions ---

// Function to set a specific panel as active
function setActivePanel(index) {
    removeActiveClasses();
    if (panels[index]) { // Check if the panel exists
        panels[index].classList.add('active');
        currentActive = index;
    }
}

// Function to remove active classes from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

// Function to start the auto-cycle
function startAutoCycle() {
    if (intervalId === null) { // Only start if not already running
        console.log("Starting auto-cycle"); // Debug log
        intervalId = setInterval(() => {
            let nextActive = (currentActive + 1) % panels.length; // Calculate next index, wraps around
            setActivePanel(nextActive);
        }, 3000); // Change panel every 3 seconds (3000ms)
    }
}

// Function to stop the auto-cycle
function stopAutoCycle() {
    console.log("Stopping auto-cycle"); // Debug log
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId
}

// --- Event Listeners ---

// Original click event listener (stops auto-cycle on manual click)
panels.forEach((panel, index) => {
    panel.addEventListener('click', () => {
        stopAutoCycle(); // Stop auto-play when user clicks
        setActivePanel(index);
    });

    // Keyboard accessibility (Enter/Space) - stops auto-cycle
    panel.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            stopAutoCycle();
            setActivePanel(index);
        }
        // Add arrow key logic here if you implemented it previously
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            stopAutoCycle(); // Stop auto-cycle on arrow key nav
            const prevPanelIndex = (index - 1 + panels.length) % panels.length;
            panels[prevPanelIndex].focus();
            // Optionally activate the focused panel immediately
            // setActivePanel(prevPanelIndex);
        }
        if (event.key === 'ArrowRight') {
            event.preventDefault();
            stopAutoCycle(); // Stop auto-cycle on arrow key nav
            const nextPanelIndex = (index + 1) % panels.length;
            panels[nextPanelIndex].focus();
            // Optionally activate the focused panel immediately
            // setActivePanel(nextPanelIndex);
        }
    });
});

// Event listener for Play button
playBtn.addEventListener('click', () => {
    // Ensure the current one is visually active before starting
    if (!panels[currentActive].classList.contains('active')) {
         setActivePanel(currentActive);
    }
    startAutoCycle();
});

// Event listener for Pause button
pauseBtn.addEventListener('click', () => {
    stopAutoCycle();
});

// --- Initial Setup ---
// Find the initially active panel from the HTML to set the starting index
panels.forEach((panel, index) => {
    if (panel.classList.contains('active')) {
        currentActive = index;
    }
});