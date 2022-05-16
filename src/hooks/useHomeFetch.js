import { useState, useEffect } from "react";
import API from "../API/api";
import { isPersistedSate } from "../helpers/helpers";

const initialSate = {
	page: 0,
	results: [],
	total_pages: 0,
	total_results: 0,
};

const HomeFetch = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [state, setState] = useState(initialSate);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const fetchMovies = async (page, searchQuery = "") => {
		try {
			setError(false);
			setLoading(true);
			const movies = await API.fetchMovies(searchQuery, page);
			setState((prev) => ({
				...movies,
				results:
					page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	// Initial page/first page
	useEffect(() => {
		fetchMovies(1);
	}, []);

	// Search Movies
	useEffect(() => {
		if (!searchQuery) {
			const sessionSate = isPersistedSate("homeMovieState");

			if (sessionSate) {
				setState(sessionSate);
				return;
			}
		}
		setState(initialSate);
		fetchMovies(1, searchQuery);
	}, [searchQuery]);

	// Load More Movie
	useEffect(() => {
		if (!isLoadingMore) {
			return;
		}

		fetchMovies(state.page + 1, searchQuery);
		setIsLoadingMore(false);
	}, [isLoadingMore, searchQuery, state.page]);

	// Cache data to storage
	useEffect(() => {
		if (!searchQuery) {
			return sessionStorage.setItem("homeMovieState", JSON.stringify(state));
		}
	}, [searchQuery, state]);

	return {
		state,
		loading,
		error,
		searchQuery,
		setSearchQuery,
		setIsLoadingMore,
	};
};

export default HomeFetch;
