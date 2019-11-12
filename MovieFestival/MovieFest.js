
function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return this.name;
}
String.prototype.print = function () {
    return ">> " + this + " <<";
}
var drama = new Genre("drama");
var action = new Genre("action");
var comedy = new Genre('comedy')

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
}
Movie.prototype.getData = function () {
    return 'Movie: ' + this.title + ', ' + 'Genre: ' + this.genre.getData() + ' Length: ' + this.length
}

var titanik = new Movie("Titanik", drama, 210);
var hunt = new Movie("Hunt", drama, 110);
var exam = new Movie("Exam", drama, 150);
var professional = new Movie("Professional", drama, 230);

function Program(date) {

    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = 0;
}

Program.prototype.addMovie = function (movie) {

    this.listOfMovies.push(movie);
    this.numberOfMovies++;
}

Program.prototype.getProgramLength = function () {
    var totalLength = 0;

    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i];
        totalLength += movie.length;
    }
    return totalLength;
}

Program.prototype.getData = function () {
    var output = this.date + ', ' + this.getProgramLength() + ' min\n';
    for (var i = 0; i < this.listOfMovies.length; i++) {
        var movie = this.listOfMovies[i]
        output += movie.getData() + '\n';
    }
    return output;
}

var day1 = new Program("01-01-2020");
var day2 = new Program("02-01-2020");

day1.addMovie(titanik);
day1.addMovie(exam);
day2.addMovie(hunt);
day2.addMovie(exam);

day1.getData();
day2.getData();

function Festival(name) {
    this.name = name;
    this.listOfProgram = [];
    this.numberOfMoviesAll = 0;
}
Festival.prototype.addProgram = function (program) {
    this.numberOfMoviesAll += program.listOfMovies.length
    this.listOfProgram.push(program)
}
Festival.prototype.getFestivalData = function () {
    var output = this.name + ' has ' + this.numberOfMoviesAll + ' movies titles \n';
    for (var i = 0; i < this.listOfProgram.length; i++) {
        var program = this.listOfProgram[i];
        output += program.getData();
    }
    return output;
}
var festival = new Festival("Cannes movie festival,");

festival.addProgram(day1);
festival.addProgram(day1);

console.log("--------------");
console.log(festival.getFestivalData().print());











