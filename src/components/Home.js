import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_URL } from "../config/config";

import Hero from "./Hero/Hero";
import Grid from "./Grid/Grid";
import SearchBar from "./SearchBar/SearchBar";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Spinner from "./Spinner/Spinner";

import NoImage from "../images/No-Image.png";

import HomeFetch from "../hooks/HomeFetch";

const Home = () => {
	const {
		state,
		loading,
		error,
		searchQuery,
		setSearchQuery,
		setIsLoadingMore,
	} = HomeFetch();

	if (error) {
		return <h1>Something Went Wrong...</h1>;
	}

	return (
		<>
			{!searchQuery && state.results[0] ? (
				<Hero
					backdrop={`${IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
				/>
			) : null}

			<SearchBar setSearchQuery={setSearchQuery}></SearchBar>

			<Grid header={searchQuery ? "Search Results" : "Popular Movies"}>
				{state.results.map((movie, index) => (
					<Card
						key={index}
						image={
							movie.poster_path
								? `${IMAGE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
					/>
				))}
			</Grid>

			{loading && <Spinner />}

			{state.page < state.total_pages && !loading && (
				<Button callback={() => setIsLoadingMore(true)}>Load More</Button>
			)}
		</>
	);
};

export default Home;
