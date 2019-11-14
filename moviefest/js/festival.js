"use strict"
var a = (function () {
    console.log("Hi");
    class Genre {
        constructor(name) {
            this.name = name
        }
        getData() {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase()
        }
    }
    class Movie {
        constructor(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.duration = length;
        }
        getData() {
            return `${this.title}, ${this.duration}min, ${this.genre.getData()}`
        }
    }
    class Program {
        constructor(date) {
            this.date = new Date(date);
            this.listOfMovies = [];
            this.totalNumberOfMovies = 0;
        }
        addMovie(movie) {
            this.totalNumberOfMovies = this.listOfMovies.push(movie)
        }
        getData() {
            var pLength = 0;
            var res = ""
            for (var i = 0; i < this.listOfMovies.length; i++) {
                pLength += parseInt(this.listOfMovies[i].duration)
                res += "\t" + this.listOfMovies[i].getData() + "\n"
            }
            return this.date.getDate() + "." + (this.date.getMonth() + 1) + "." + this.date.getFullYear() + ", program length from all " + this.totalNumberOfMovies + " movies:" + pLength + "min\n" + res;
        }
    }
    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
            this.totalNumberOfMovies = 0;
        }
        addProgram(program) {
            this.totalNumberOfMovies = this.listOfPrograms.push(program);
        }
        getData() {
            var numberOfMovies = 0;
            var res = "";
            for (var i = 0; i < this.listOfPrograms.length; i++) {
                res += this.listOfPrograms[i].getData()
                numberOfMovies += this.listOfPrograms[i].totalNumberOfMovies
            }
            return this.name + "has " + numberOfMovies + "movie titles\n" + res;
        }
    }
    function createMovie(title, length, genre) {
        var genreI = new Genre(genre);
        return new Movie(title, genreI, length);
    }
    function createProgram(date) {
        return new Program(date);
    }

    var festival = new Festival("Weekend Festival")

    var program1 = createProgram("2017-10-28")
    var program2 = createProgram("2017-10-29")

    var movie1 = createMovie(document.querySelector(".title").value, document.querySelector(".duration").value, document.querySelector(".genre").value)
    // var movie2 = createMovie("War for the Planet of the Apes", 140, "Drama")
    // var movie3 = createMovie("The Dark Tower", 95, "Fantasy")
    // var movie4 = createMovie("Deadpool", 108, "Comedy")


    program1.addMovie(movie1)
    // program1.addMovie(movie2)
    // program1.addMovie(movie3)

    // program2.addMovie(movie4)

    // festival.addProgram(program1)
    // festival.addProgram(program2)

    // console.log(festival.getData())
})()

