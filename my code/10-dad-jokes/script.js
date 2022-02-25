const button = document.getElementById("btn");
const span = document.getElementById("joke");

const url = "https://icanhazdadjoke.com";
const fetchJoke = async () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const resp = await fetch(url, config);
  const data = await resp.json();

  let joke = "";

  joke = data.joke;
  span.innerHTML = joke;
};

fetchJoke();
