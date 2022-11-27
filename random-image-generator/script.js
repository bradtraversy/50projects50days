const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const picsumURL = 'https://picsum.photos'
const rows = 5

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    /* 
    Unplash's random-server is down at the moment. Use 'picsum' instead
    Picsum URL: https://picsum.photos/<width>/<height>/?<randomChar>
    */
   // img.src = `${unsplashURL}${getRandomSize()}`;
	img.src = `${picsumURL}/${getRandomNr()}/${getRandomNr()}/?${i}`;
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300
}