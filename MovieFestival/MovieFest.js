
function Genre(name) {
    this.name = name;

    this.getData = function () {
        return this.name;
    }
}
function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;


    this.getData = function () {
        return 'Movie: ' + this.title + ', ' + 'Genre: ' + this.genre.getData() + ' Length: ' + this.length
    }
}
var drama = new Genre("drama");
var action = new Genre("action");
var comedy = new Genre("comedy")

var titanik = new Movie("titanik", drama, 210);
var hunt = new Movie("hunt", drama, 110);
var exam = new Movie("exam", drama, 150);
var professional = new Movie("professional", drama, 230);


function Program(date) {

    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;

    this.addMovie = function (movie) {
        this.listOfMovies.push(movie);
        this.numberOfMovies++;

        console.log(date + ', ' + '\n' + "Movie:", movie.getData());
    }

    this.getData = function () {
        return 'Program: ' + this.date + ', ' + ' List of movies: ' + this.listOfMovies + 'Number of movies: ' + this.numberOfMovies;

    }
}
var day1 = new Program("01-01-2020");
var day2 = new Program("02-01-2020");




day1.addMovie(titanik);
day1.addMovie(exam);
day2.addMovie(hunt);
day2.addMovie(professional);

function Festival(name) {
    this.name = name;
    this.listOfProgram = [];
    this.numberOfMoviesAll = 0;

    this.addProgram = function (program) {
        this.listOfProgram.push(program);
        console.log(this.listOfProgram);
    }
    this.addNumOfAllMovies = function (num) {
    }
}

var festival = new Festival("Cannes movie festival");

festival.addProgram(day1);
festival.addProgram(day2);

festival.addNumOfAllMovies(day1);
festival.addNumOfAllMovies(day2);









