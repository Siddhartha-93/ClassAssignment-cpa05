// Movie Data Fetch From Server and display in page--- 
const ombd_Api = "1e3f8fc6";
let movieNameInput = document.getElementById("input")
let displayMovieData = document.getElementById("root")

let serverData = `http://www.omdbapi.com/?apikey=${ombd_Api}&s=`
let movieData = [];
async function fetchMovieData(movieName) {
    try {
        let res = await fetch(serverData + movieName)
        let data = await res.json()
        movieData = (data.Search)
        displayMovi(movieData)
    }
    catch (error) {
        console.log(error, "fatch not done");
    }
}

let displayMovi = (movieData) => {
    if (movieNameInput.value !== "") {
        if (movieData) {
            displayMovieData.innerHTML = "";
            movieData.forEach(({ Poster, Title, Year }) => {

                displayMovieData.innerHTML += ` <div>
            <img src="${Poster}" alt="No Image aveable">
            <p>${Title}</p>
            <p>${Year}</p>
            </div>`
            })
        }
        else {
            displayMovieData.innerHTML = `<p> NO Movie Found </p>`
            movieNameInput.value = "";
        }
    }
    else {
        displayMovieData.innerHTML = `<p> Find Your Favrite Movie </p>`
    }
}
// search engien function
let time = null;
movieNameInput.addEventListener("input", () => {
    clearTimeout(time);
    time = setTimeout(function () {
        fetchMovieData(movieNameInput.value)
    }, 1000)
})

