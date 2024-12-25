const myButton = document.querySelector('#myButton');
const apiKey = 'bd53b199';
const type = 'movie';
const result=document.getElementById('result');
const page = 1;

myButton.addEventListener('click', () => {
    result.innerHTML= '';
  const query = document.querySelector('#moviee').value;
  const year = document.querySelector('#yr').value;


  const url = `http://www.omdbapi.com/?s=${encodeURIComponent(query)}&type=${type}&y=${year}&page=${page}&apikey=${apiKey}`;


  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Status:${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.Response === "True") {
        console.log(data.Search);
        data.Search.forEach((movie) => {
          const movieElement = document.createElement('div');
          movieElement.classList.add('movie');
          movieElement.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <img src="${movie.Poster}" alt="${movie.Title}" style="width: 100px;">
            <p>IMDB ID: ${movie.imdbID}</p>
          `;
          result.appendChild(movieElement);
        });
      } else {
        console.error("Error:", data.Error);
        const movieElement = document.createElement('div');
          movieElement.classList.add('movie');
          movieElement.innerHTML = `
            <h3>Movie Not found!</h3>
          `;
          result.appendChild(movieElement);

      }
    })
    .catch(error => {
      console.error(error);
    });
});
