import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:movieId" element={<Movie />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
