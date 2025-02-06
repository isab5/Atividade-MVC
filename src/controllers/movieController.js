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
            const film = new Movie (title, director, gender, duration, plays);
            list.addMovie(film);
            res.status(200).json({ message: "Filme criado com sucesso", film });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar música",
                error: error.message,
            });

        }
    },

    getAllMovies: (req, res) => {
        try {
            const songs = list.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error: error.message,
            });
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(list.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id!",
                error: error.message,
            });
        }
    },
    updateMovie: (req, res) => {
        try {
            res.status(200).json(list.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar filme!",
                error: error.message,
            });
        }
    },

}