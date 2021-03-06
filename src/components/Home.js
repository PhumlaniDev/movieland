import { BACKDROP_SIZE, IMAGE_URL, POSTER_SIZE } from "../config/config";

import { useHomeFetch } from "../hooks/useHomeFetch";

import HeroImage from "./HeroImage/HeroImage";
import Header from "./Header/Header";
import Grid from "./Grid/Grid";
import Card from "./Card/Card";
import Spinner from "./Spinner/Spinner";
import Button from "./Button/Button";

import NoImage from "../images/No-Image.png";

const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
		useHomeFetch();

	if (loading) {
		return <Spinner />;
	}

	if (error) {
		return <h1>Something Went Wrong</h1>;
	}

	return (
		<>
			<Header setSearchTerm={setSearchTerm} shown={true} />
			{!searchTerm && state.results[0] ? (
				<HeroImage
					image={`${IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}

			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{state.results.map((movie) => (
					<Card
						key={movie.id}
						clickable
						image={
							movie.poster_path
								? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						movieId={movie.id}
					/>
				))}
			</Grid>

			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				<Button callback={() => setIsLoadingMore(true)}> Load More</Button>
			)}
		</>
	);
};

export default Home;
