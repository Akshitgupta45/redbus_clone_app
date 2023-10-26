import "./App.css";
import AppBar from "./components/AppBar";
import SearchBar from "./components/SearchBar";
import JourneyContext from "./context/userJourneyContext";
import { useState } from "react";
import Home from "./components/Home";
import Result from "./components/Result";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const [to, setTo] = useState("");
	const [from, setFrom] = useState("");
	return (
		<BrowserRouter>
			<JourneyContext.Provider
				value={{
					from: from,
					to: to,
					setFrom: setFrom,
					setTo: setTo,
				}}
			>
				<div className="App">
					<AppBar />
					<SearchBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/result" element={<Result />} />
					</Routes>
				</div>
			</JourneyContext.Provider>
		</BrowserRouter>
	);
}

export default App;
