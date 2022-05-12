import { API_URL, API_KEY, SEARCH_URL, POPULAR_URL } from "../config/config";

const apiSettings = {
	fetchMovies: async (searchQuery, page) => {
		const endpoint = searchQuery
			? `${SEARCH_URL}${searchQuery}&page${page}`
			: `${POPULAR_URL}&page${page}`;
		return await (await fetch(endpoint)).json();
	},

	fetchMovie: async (movieId) => {
		const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
		return await (await fetch(endpoint)).json();
	},

	fetchCredits: async (movieId) => {
		const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
		return await (await fetch(creditsEndpoint)).json();
	},
};

export default apiSettings;
