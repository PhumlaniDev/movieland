import React from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context
import UserProvider from "./context/context";

import "./App.css";

import Home from "./components/Home";
import Movie from "./components/Movie";

function App() {
	return (
		<>
			<Router>
				<UserProvider>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/:movieId" element={<Movie />} />
					</Routes>
				</UserProvider>
			</Router>
		</>
	);
}

export default App;
