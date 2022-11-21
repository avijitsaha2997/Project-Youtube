import AppsIcon from "@mui/icons-material/Apps";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">

            <div className="header__left">
                <MenuOpenIcon />
                <Link to='/'>
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png">
                    </img>
                </Link>

            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search..." type="text" />

                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />
                </Link>


            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Avijit Saha" src="https://avatars.githubusercontent.com/u/56964612?s=400&u=37f3f3febc834566da0a2b8618153c6bd85ea6d0&v=4" />
            </div>

        </div>
    );
}

export default Header;
