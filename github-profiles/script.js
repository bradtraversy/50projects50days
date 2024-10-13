const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Fetch user data from GitHub API
async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);  // Create user card with fetched data
    getRepos(username);    // Fetch and display user's repositories
  } catch (err) {
    if (err.response && err.response.status == 404) {
      createErrorCard('No profile with this username');
    } else {
      createErrorCard('An error occurred while fetching user data');
    }
  }
}

// Fetch user's repositories from GitHub API
async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + '/repos?sort=created');
    addReposToCard(data);  // Add repositories to the user card
  } catch (err) {
    createErrorCard('Problem fetching repositories');
  }
}

// Create user card with profile information
function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';
  
  // HTML structure for user profile card
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${userID}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>  <!-- Container for repositories -->
      </div>
    </div>
  `;
  
  main.innerHTML = cardHTML;  // Insert card into the main container
}

// Create error card if user is not found or if there’s an issue
function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  main.innerHTML = cardHTML;
}

// Add repositories to the user card
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  
  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();  // Prevent the form from submitting traditionally
  
  const user = search.value.trim();  // Get the username input value
  
  if (user) {
    getUser(user);  // Fetch and display user info
    search.value = '';  // Clear the search input
  }
});
