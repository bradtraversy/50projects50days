const startButton = document.getElementById('startButton');
const content = document.querySelector('.starter__content');
const starter = document.querySelector('.starter');

if (startButton && content) {
  startButton.addEventListener('click', () => {
    if (starter) starter.classList.add('starter--active');

    content.innerHTML = `
      <div class="hero__result">
        <h1>¡Perfecto!</h1>
        <p>El proyecto ya respondió a tu clic. Ahora puedes ver contenido dinámico y continuar personalizando esta plantilla.</p>
        <ul class="result__list">
          <li>Contenido actualizado al instante</li>
          <li>Botón <strong>Volver</strong> sin recargar todo el sitio</li>
          <li>Base lista para agregar más secciones</li>
        </ul>
        <button type="button" id="resetButton">Volver</button>
      </div>
    `;

    const resetButton = document.getElementById('resetButton');
    if (resetButton) {
      resetButton.addEventListener('click', () => {
        if (starter) starter.classList.remove('starter--active');
        window.location.reload();
      });
    }
  });
}

