const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')




async function getMovies(url) {
    try {
        showLoading();
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        if (data.results.length === 0) {
            main.innerHTML = '<div class="no-results"><h2>No movies found</h2><p>Try searching for a different movie or check your spelling.</p></div>';
        } else {
            showMovies(data.results);
        }
    } catch (error) {
        console.error('Fetch error:', error);
        main.innerHTML = `<div class="error-message"><h2>Oops! Something went wrong</h2><p>Please check your internet connection and try again.</p><button onclick="location.reload()" class="retry-btn">Retry</button></div>`;
    }
}


function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview, release_date, id, genre_ids } = movie;
        
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        
        const year = release_date ? new Date(release_date).getFullYear() : 'N/A';
        const poster = poster_path ? IMG_PATH + poster_path : 'https://via.placeholder.com/300x450/2e3152/ffffff?text=No+Image';
        
        movieEl.innerHTML = `
            <img src="${poster}" alt="${title}" loading="lazy">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
            </div>
            <div class="overview">
                <h3>${title} (${year})</h3>
                <p>${overview ? overview.substring(0, 150) + '...' : 'No overview available.'}</p>
                <div class="movie-actions">
                    <button class="btn-watch" onclick="watchMovie(${id})">Watch Now</button>
                    <button class="btn-trailer" onclick="watchTrailer('${title}')">Trailer</button>
                    <button class="btn-details" onclick="showMovieDetails(${id})">Details</button>
                </div>
            </div>
        `;
        
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function watchMovie(movieId) {
    showNotification('Opening movie player...', 'info');
    // Simulate opening a movie player
    setTimeout(() => {
        showNotification('Movie player is ready!', 'success');
    }, 1000);
}

function watchTrailer(movieTitle) {
    showNotification(`Loading trailer for: ${movieTitle}`, 'info');
    // Simulate opening trailer
    setTimeout(() => {
        showNotification('Trailer is playing!', 'success');
    }, 1500);
}

async function showMovieDetails(movieId) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`);
        const movie = await response.json();
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="modal-body">
                    <div class="modal-poster">
                        <img src="${movie.poster_path ? IMG_PATH + movie.poster_path : 'https://via.placeholder.com/300x450/2e3152/ffffff?text=No+Image'}" alt="${movie.title}">
                    </div>
                    <div class="modal-info">
                        <h2>${movie.title}</h2>
                        <div class="movie-meta">
                            <span class="year">${movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</span>
                            <span class="runtime">${movie.runtime ? movie.runtime + ' min' : 'N/A'}</span>
                            <span class="rating ${getClassByRate(movie.vote_average)}">${movie.vote_average.toFixed(1)}</span>
                        </div>
                        <p class="overview-text">${movie.overview || 'No overview available.'}</p>
                        <div class="genres">
                            ${movie.genres ? movie.genres.map(genre => `<span class="genre-tag">${genre.name}</span>`).join('') : ''}
                        </div>
                        <div class="modal-actions">
                            <button class="btn-watch" onclick="watchMovie(${movie.id})">Watch Now</button>
                            <button class="btn-trailer" onclick="watchTrailer('${movie.title}')">Watch Trailer</button>
                            <button class="btn-add-list" onclick="addToMyList(${movie.id})">Add to My List</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => modal.remove();
        
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
        
    } catch (error) {
        showNotification('Failed to load movie details', 'error');
    }
}

function addToMyList(movieId) {
    showNotification('Added to My List!', 'success');
    // Here you would typically save to localStorage or send to backend
}

// Search functionality
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value.trim()

    if (searchTerm) {
        getMovies(SEARCH_API + encodeURIComponent(searchTerm));
        search.value = '';
    } else {
        showNotification('Please enter a search term.', 'error');
    }
})

// Real-time search suggestions
let searchTimeout;
search.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    const searchTerm = e.target.value.trim();
    
    if (searchTerm.length > 2) {
        searchTimeout = setTimeout(() => {
            getMovies(SEARCH_API + encodeURIComponent(searchTerm));
        }, 500);
    }
});

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize the app
getMovies(API_URL);



})
