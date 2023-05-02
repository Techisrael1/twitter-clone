import React from "react";
import "./App.css";
// import FeedSection from "./Component/feedSection/FeedSection";
// import Widgets from "./Component/widgets/Widgets";
import Sidebar from "./Components/Sidebar/Sidebar";
import Widget from "./Components/Widgets/Widget";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Explore from "./Components/Pages/Explore";
import Notifications from "./Components/Pages/Notifications";
import Mesaages from "./Components/Pages/Mesaages";
import Bookmarks from "./Components/Pages/Bookmarks";
import TwitterBlue from "./Components/Pages/TwitterBlue";
import Profile from "./Components/Pages/Profile";
import More from "./Components/Pages/More";

const App = () => {
	return (
		<div className="app ">
			{/* Sidebar */}
			<Sidebar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/notifications" element={<Notifications />} />
					<Route path="/messages" element={<Mesaages />} />
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/twitter blue" element={<TwitterBlue />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/more" element={<More />} />
				</Routes>
			</BrowserRouter>
			{/* Feed */}

			{/* <FeedSection /> */}

			{/* Widgets */}
			<Widget />
		</div>
	);
};

export default App;
