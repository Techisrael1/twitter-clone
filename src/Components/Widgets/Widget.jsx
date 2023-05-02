import React from "react";
import "./widget.css";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import { FaSearch } from "react-icons/fa";

const Widget = () => {
	return (
		<div className="widget">
			<div className="widgets-input">
				<FaSearch className="searchIcon"/>
				<input type="text" placeholder="Search Twitter" />
			</div>
			<div className="widgets-widgetcontainer">
				<h2>What's happening?</h2>
				<TwitterTweetEmbed tweetId={"858551177860055040"} />
				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="cleverqazi"
					options={{ height: 400 }}
				/>
				<TwitterShareButton
					url={"https://facebook.com/cleverprogrammer"}
					options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
				/>
			</div>
		</div>
	);
};

export default Widget;
