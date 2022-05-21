import React from "react";
import { useParams } from "react-router-dom";

import { IMAGE_URL, POSTER_SIZE } from "../config/config";

import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";

import useMovieFetch from "../hooks/useMovieFetch";

import NoImage from "../images/No-Image.png";

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loading, error } = useMovieFetch(movieId);

	// if (loading) return <Spinner />;
	if (error) return <h1>Something Went Wrong</h1>;

	return (
		<>
			<Header />
			<MovieDetails movie={movie} />
		</>
	);
};

export default Movie;
