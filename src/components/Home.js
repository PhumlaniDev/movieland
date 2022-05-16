import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_URL } from "../config/config";

import Hero from "./Hero/Hero";
import Grid from "./Grid/Grid";
import Header from "./Header/Header";
import Card from "./Card/Card";
import Button from "./Button/Button";
import Spinner from "./Spinner/Spinner";
import Footer from "./Footer/Footer";

import NoImage from "../images/No-Image.png";

import useHomeFetch from "../hooks/useHomeFetch";

const Home = () => {
	const {
		state,
		loading,
		error,
		searchQuery,
		setSearchQuery,
		setIsLoadingMore,
	} = useHomeFetch();

	if (error) {
		return <h1>Something Went Wrong...</h1>;
	}

	return (
		<>
			<Header setSearchQuery={setSearchQuery}></Header>

			{!searchQuery && state.results[0] ? (
				<Hero
					backdrop={`${IMAGE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					overview={state.results[0].overview}
				/>
			) : null}

			<Grid header={searchQuery ? "Search Results" : "Popular Movies"}>
				{state.results.map((movie) => (
					<Card
						key={movie.setIsLoadingMore}
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
				<Button callback={() => setIsLoadingMore(true)}>Load More</Button>
			)}
			<Footer />
		</>
	);
};

export default Home;
