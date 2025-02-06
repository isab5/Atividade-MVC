const Movie = require("../models/Movie");
const MovieList = require("../models/MovieList");

const list = new MovieList();

const movie1 = new Movie("Homem de ferro", "Jon Favreau", "ação", "2h 6m");

list.addMovie(movie1);

list.addMovie(new Movie("Coraline e o Mundo Secreto", "Henry Selick", "terror", "1h 40m"));

const router = {
    addMovie: (req, res) => {
        try {
            const { title, director, gender, duration } = req.body;
            if (!title || !director || !gender || !duration) {
                throw new Error ("Preencha todos os campos!");
            }
            const film = new Movie (title, director, gender, duration);
            list.addMovie(film);
            res.status(200).json({ message: "Filme criado com sucesso", film });
        } catch (error) {
            res.status(400).json({
                message: "Erro ao criar música",
                error});

        }
    },

    getAllMovies: (req, res) => {
        try {
            const movies = list.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filmes",
                error});
        }
    },

    getMovieById: (req, res) => {
        try {
            const id = req.params.id;
            res.status(200).json(list.getMovieById(id));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao buscar filme por id!",
                error});
        }
    },
    updateMovie: (req, res) => {
        try {
            res.status(200).json(list.updateMovie(req.params.id, req.body));
        } catch (error) {
            res.status(404).json({
                message: "Erro ao atualizar filme!",
                error});
        }
    },
    deleteMovie: (req, res) => {
        try {
            const film = req.params.id;
            list.deleteMovie(film);
            res.status(200).json({ message: "Filme deletado com sucesso!", film});
        } catch (error) {
            res.status(404).json({ message: "erro ao deletar filmes!", error})
        }
    }
};

module.exports = router;