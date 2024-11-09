const form = document.querySelector("form");
const main = document.querySelector("main");

const apiKey = `e8a0c51b`

const renderInfo = (movie) => {
    main.innerHTML = `
        <img src='${movie.Poster}' width='300px'/>
        <h1>${movie.title}</h1>
        <p>Bio: ${movie.Awards}</p>
        <p>Public Repos: ${movie.Country}</p>
    `;
}
const fetchInfo = async (movieName) => {
    try {
        const promise = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
        const movie = await promise.json();
        renderInfo(movie);
    } catch(error) {
        console.log(`Error: ${error}`);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetchInfo(form.movieName.value);
})