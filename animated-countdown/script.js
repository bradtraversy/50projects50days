// Select all the span elements inside the '.nums' container
const nums = document.querySelectorAll('.nums span');

// Select the '.counter' container
const counter = document.querySelector('.counter');

// Select the '.final' container, which shows the final message
const finalMessage = document.querySelector('.final');

// Select the replay button
const replay = document.querySelector('#replay');

// Start the animation sequence
runAnimation();

/**
 * Resets the DOM to its initial state.
 * - Removes the 'hide' class from the counter.
 * - Removes the 'show' class from the final message.
 * - Resets all span elements' classes to an empty value.
 * - Adds the 'in' class to the first number span to restart the animation.
 */
function resetDOM() {
  counter.classList.remove('hide'); // Make the counter visible again
  finalMessage.classList.remove('show'); // Hide the final message

  nums.forEach((num) => {
    num.classList.value = ''; // Clear all classes on the number spans
  });

  nums[0].classList.add('in'); // Start animation from the first number
}

/**
 * Runs the animation for the countdown.
 * - Listens for 'animationend' events on each number span.
 * - Handles transitioning between 'in' and 'out' states.
 * - Displays the final message when the last animation ends.
 */
function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1; // Index of the last number span

    // Add an event listener to handle animation transitions
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        // If the 'goIn' animation ends and it's not the last number:
        num.classList.remove('in'); // Remove 'in' class
        num.classList.add('out'); // Add 'out' class to trigger the next phase
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        // If the 'goOut' animation ends and there's a next number:
        num.nextElementSibling.classList.add('in'); // Start 'in' animation for the next number
      } else {
        // If it's the last number, hide the counter and show the final message:
        counter.classList.add('hide'); // Hide the counter
        finalMessage.classList.add('show'); // Show the final message
      }
    });
  });
}

// Add a click event listener to the replay button
replay.addEventListener('click', () => {
  resetDOM(); // Reset the DOM to its initial state
  runAnimation(); // Restart the animation sequence
});
