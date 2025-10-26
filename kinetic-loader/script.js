const kineticLoader = document.querySelector('.kinetic');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    // Adds the 'reverse' class if it's not there, removes it if it is
    kineticLoader.classList.toggle('reverse');
});