const form = document.getElementById("form");
const search = document.getElementById("search");
const profile = document.getElementById("profile");

let searchVal = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  searchVal = search.value;
  fetchURL("https://api.github.com/users/" + searchVal).then((data) => {
    displayData(data);
  });
});

async function fetchURL(url) {
  const res = await fetch(url);
  const data = await res.json();

  return data;
}

function displayData(user) {
  profile.innerHTML = "";

  const {
    avatar_url,
    bio,
    followers,
    following,
    name,
    public_repos,
    starred_url,
  } = user;

  const container = document.createElement("div");
  container.classList.add("container");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left");

  const img = document.createElement("img");
  img.src = avatar_url;
  img.alt = name;

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right");

  const h2 = document.createElement("h2");
  h2.classList.add("name");
  h2.append(document.createTextNode(name));

  const p = document.createElement("p");
  p.classList.add("bio");
  p.append(document.createTextNode(bio));

  const panelWrapper = document.createElement("section");

  const followersPanel = document.createElement("div");

  const followersNum = document.createElement("span");
  followersNum.classList.add("value");
  followersNum.append(document.createTextNode(followers));

  const followersLabel = document.createElement("strong");
  followersLabel.append(document.createTextNode("Followers"));

  const followingPanel = document.createElement("div");

  const followingNum = document.createElement("span");
  followingNum.classList.add("value");
  followingNum.append(document.createTextNode(following));

  const followingLabel = document.createElement("strong");
  followingLabel.append(document.createTextNode("Following"));

  const reposPanel = document.createElement("div");

  const reposNum = document.createElement("span");
  reposNum.classList.add("value");
  reposNum.append(document.createTextNode(public_repos));

  const reposLabel = document.createElement("strong");
  reposLabel.append(document.createTextNode("Repos"));

  profile.append(container);

  container.append(leftDiv);
  leftDiv.append(img);

  container.append(rightDiv);
  rightDiv.append(h2);
  rightDiv.append(p);
  rightDiv.append(panelWrapper);

  panelWrapper.append(followersPanel);
  panelWrapper.append(followingPanel);
  panelWrapper.append(reposPanel);

  followersPanel.append(followersNum);
  followersPanel.append(followersLabel);

  followingPanel.append(followingNum);
  followingPanel.append(followingLabel);

  reposPanel.append(reposNum);
  reposPanel.append(reposLabel);
}
