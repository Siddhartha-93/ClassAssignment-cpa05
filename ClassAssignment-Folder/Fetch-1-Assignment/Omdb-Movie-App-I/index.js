

const ombd_Api = "1e3f8fc6";
const nameMovie = document.getElementById("movie")
const displays = document.getElementById("display")

let allMoviUrl = `http://www.omdbapi.com/?apikey=${ombd_Api}&s=`

function fetchMovie(movieName){ 
fetch(allMoviUrl + movieName)
.then (function(res){
    return res.json()
})
.then(function(movieList){
    let movies = movieList.Search
    displayMovie(movies)
}) 
.catch(function(error){
    console.log("API not fetch",error)
})
}
function displayMovie(item){
    displays.innerHTML = ""
    item.forEach(data => {
        
        let movieCard = document.createElement("div")
        movieCard.className ="movieCard"
        
        let movieImg = document.createElement("img")
        movieImg.className = "movieImg"
        movieImg.src = data.Poster
        
        let movieName = document.createElement("p")
        movieName.className= "p"
        movieName.textContent = data.Title
        
        let movieYear = document.createElement("p")
        movieYear.textContent = data.Year
        
        movieCard.append(
            movieImg,
            movieName,
            movieYear
            )

            displays.append(movieCard)
        });
    }
    
    searchButton.addEventListener('click', () =>{
        displays.innerHTML = ""
        fetchMovie(nameMovie.value)
        nameMovie.value = ""


    }) 
    

