import React from "react";
import { useParams } from "react-router-dom";

import { IMAGE_URL, POSTER_SIZE } from "../config/config";

import Header from "./Header/Header";
import MovieDetails from "./MovieDetails/MovieDetails";
import Grid from "./Grid/Grid";
import Actor from "./Actor/Actor";
import Spinner from "./Spinner/Spinner";

import useMovieFetch from "../hooks/useMovieFetch";

import NoImage from "../images/No-Image.png";

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loading, error } = useMovieFetch(movieId);

	if (loading) {
		return <Spinner />;
	}
	if (error || !Array.isArray(movie.actors)) {
		return <h1>Something Went Wrong...</h1>;
	}

	return (
		<>
			<Header shown={false} />
			<MovieDetails movie={movie} />
			{/* <MovieInfoBar movie={movie} */}
			<Grid header="Actors">
				{movie.actors.map((actor) => (
					<Actor
						key={actor.credit_id}
						name={actor.name}
						character={actor.character}
						imageUrl={
							actor.profile_path
								? `${IMAGE_URL}${POSTER_SIZE}${actor.profile_path}`
								: NoImage
						}
					/>
				))}
			</Grid>
		</>
	);
};

export default Movie;
