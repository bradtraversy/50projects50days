const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);  // Parse the target value
    let current = 0;  // Initial value of counter
    const increment = target / 200;  // Determine increment per frame

    const updateCounter = () => {
        // If the counter hasn't reached the target
        if (current < target) {
            current += increment;  // Increment counter
            counter.innerText = Math.ceil(current);  // Update the inner text with rounded value

            // Use requestAnimationFrame for smoother animation
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;  // Ensure the target value is set when done
        }
    };

    // Start the counter animation
    updateCounter();
});
