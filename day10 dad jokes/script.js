const jokeEL = document.getElementById("joke")
const jokeBtn = document.getElementById("jokeBtn")

jokeBtn.addEventListener("click", generateJoke)

generateJoke()

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  }
  fetch("https://icanhazdadjoke.com", config)
    .then(res => res.json())
    .then(data => {
      jokeEL.innerHTML = data.joke
    })
}
