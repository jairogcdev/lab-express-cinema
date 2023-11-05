const express = require("express");
const router = express.Router();
const Movies = require("../models/Movie.model");

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

router.get("/movies", async (req, res, next) => {
  try {
    let movies = await Movies.find();
    res.render("movies", { movies });
  } catch (err) {
    next(err);
  }
});

router.get("/movie/:id", async (req, res, next) => {
  try {
    let movie = await Movies.findById(req.params.id);
    console.log("_----------------------------------------------------_");
    console.log(movie);
    res.render("details", { movie });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
