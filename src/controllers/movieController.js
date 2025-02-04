const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const list = new MovieList();

const movie1 = new Movie("Homem de ferro", "Jon Favreau", "ação", "2h 6m", 10);

list.addMovie(movie1);

list.addMovie(new Song("Coraline e o Mundo Secreto", "Henry Selick", "terror", "1h 40m", 7));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, director, gender, duration, plays } = req.body;
            if (!title || !director || !gender || !duration) {
                throw new Error ("Preencha todos os campos!");
            }
            const film = new Movie (title, director, gender, duration, plays)
        } catch (error) {

            
        }
}