document.querySelector(".button").addEventListener("click", addMovieOnClick);

function addMovieOnClick() {
    var movieData = collectFormData()
    if (!document.querySelector(".title").value || !document.querySelector(".duration").value) {
        document.querySelector(".error").textContent = "Enter title and length!"
    }
    else {
        var movie1 = new Movie(movieData)

        list1.addMovie(movie1)
        var listItem = document.createElement("li")
        listItem.textContent = movie1.getDataMovie()
        document.querySelector(".list").append(listItem)
        document.querySelector(".totalDuration").textContent = list1.getData();
    }

}

function collectFormData() {
    var inputTitle = document.querySelector(".title").value;   //////u Jquery-u samo .val
    var inputLength = document.querySelector(".duration").value;
    var selectGenre = document.querySelector(".genre").value;

    var movieData = {
        title: inputTitle,
        length: inputLength,
        genre: selectGenre
    }
    return movieData
}
class Movie {
    constructor(movieData) {
        this.title = movieData.title
        this.duration = movieData.length
        this.genre = new Genre(movieData.genre)
    }
    getDataMovie() {
        return `${this.title}, duration:${this.duration}, genre:${this.genre.getDataGenre()}`
    }
}
class Genre {
    constructor(name) {
        this.name = name
    }
    getDataGenre() {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()
    }
}
class List {
    constructor() {
        this.movieList = []
        this.totalNumberOfMovies = 0;
    }
    addMovie(movie) {
        this.totalNumberOfMovies = this.movieList.push(movie);
    }
    getData() {
        var totalDuration = 0
        for (var i = 0; i < this.movieList.length; i++) {
            totalDuration += parseInt(this.movieList[i].duration)
        }
        return totalDuration
    }
}
var list1 = new List()


