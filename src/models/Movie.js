const { v4: uuid4 } = require("uuid");

class Movie {
    constructor(title, director, gender, duration, plays = 0) {
        this.id = uuid4();
        this.title = title;
        this.director = director;
        this.gender = gender;
        this.duration = duration;
        this.plays = plays;
    }

    play() {
        this.play += 1;
    }
}

module.exports = Movie;