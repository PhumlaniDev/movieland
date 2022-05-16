import { useParams } from "react-router-dom";

import { IMAGE_URL, POSTER_SIZE } from "../config/config";

import Hero from "./Hero/Hero";
import Grid from "./Grid/Grid";
import Actor from "./Actor/Actor";
import Spinner from "./Spinner/Spinner";

import { useMovieFetch } from "../hooks/useMovieFetch";

import NoImage from "../images/No-Image.png";

const Movie = () => {
	const { movieId } = useParams();
	const { state: movie, loading, error } = useMovieFetch(movieId);

	if (loading) return <Spinner />;

	if (error) return <h1>Something Went Wrong...</h1>;

	return (
		<>
			<Hero movie={movie} />

			{/* <Grid header="Actors">
				{movie.actors.map((actor, index) => (
					<Actor
						key={index}
						name={actor.name}
						character={actor.character}
						imageURL={
							actor.profile_path
								? `${IMAGE_URL}${POSTER_SIZE}${actor.profile_path}`
								: NoImage
						}
					/>
				))}
			</Grid> */}
		</>
	);
};

export default Movie;
