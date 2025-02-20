const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

function generateJoke() {
   const config = {
     headers: {
       Accept: 'application/json',
     },
   };

   fetch('https://icanhazdadjoke.com', config)
     .then((res) => res.json())
     .then((data) => {
       jokeEl.textContent = data.joke;
     });
 }

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
