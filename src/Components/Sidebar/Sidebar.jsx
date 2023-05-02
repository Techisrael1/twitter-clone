import React from "react";
import "./sidebar.css";
import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineVerified } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { GiFeather } from "react-icons/gi";
import SidebarOption from "../SidebarOption/SidebarOption";
import { BsBookmark } from "react-icons/bs";

const Sidebar = () => {
	return (
		<div className="sidebar">
			{/* Twitter icon */}
			<a href="#">
				<FaTwitter className="styledIcon" />
			</a>
			<a href="/">
				<SidebarOption active Icon={BiHomeCircle} text="Home" />
			</a>

			<a href="/explore">
				<SidebarOption Icon={BiHash} text="Explore" />
			</a>
			<a href="/notifications">
				<SidebarOption
					Icon={IoMdNotificationsOutline}
					text="Notifications"
				/>
			</a>
			<a href="/messages">
				<SidebarOption Icon={FaRegEnvelope} text="Messages" />
			</a>
			<a href="/bookmarks">
				<SidebarOption Icon={BsBookmark} text="bookmarks" />
			</a>
			<a href="/twitter blue">
				<SidebarOption Icon={MdOutlineVerified} text="Twitter Blue" />
			</a>
			<a href="/profile">
				<SidebarOption Icon={CgProfile} text="Profile" />
			</a>
			<a href="/more">
				<SidebarOption Icon={CiCircleMore} text="More" />
			</a>

			{/* <Button className= 'sidebar-tweet'>Tweet</Button>       */}
			<button variant="outlined" className="sidebar__tweet">
				<GiFeather className="feat" />
				Tweet
			</button>
		</div>
	);
};

export default Sidebar;
