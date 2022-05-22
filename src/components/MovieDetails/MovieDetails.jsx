import React from "react";
import { calcTime, convertMoney } from "../../helpers/helpers";
import Card from "../Card/Card";
import { IMAGE_URL, POSTER_SIZE } from "../../config/config";
import NoImage from "../../images/No-Image.png";
import {
	Wrapper,
	Content,
	Date,
	Genre,
	TimeBudget,
	RateAverage,
} from "./MovieDetails.styles";

const MovieDetails = ({ movie }) => {
	return (
		<>
			<Wrapper backdrop={movie.backdrop_path}>
				<Content>
					<Date>
						<p>{movie.release_date}</p>
						<p>{movie.status}</p>
					</Date>
					<h1>{movie.original_title}</h1>
					<p>{movie.overview}</p>
					<hr />
					<Genre>
						{movie.genres.map((genre) => (
							<p key={genre.id}>{genre.name}</p>
						))}
					</Genre>
					<TimeBudget>
						<p>{calcTime(movie.runtime)}</p>
						<p>{convertMoney(movie.budget)}</p>
					</TimeBudget>
					<RateAverage>
						<p>Rating</p>
						<p>Language</p>
					</RateAverage>
					<RateAverage>
						{movie.vote_average}
						<RateAverage className="languages">
							{movie.spoken_languages.map((language, index) => (
								<p key={index}>{language.name}</p>
							))}
						</RateAverage>
					</RateAverage>
				</Content>
				<div>
					<Card
						image={
							movie.poster_path
								? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						movieHeight={true}
						clickable={false}
					/>
				</div>
			</Wrapper>
		</>
	);
};

export default MovieDetails;
