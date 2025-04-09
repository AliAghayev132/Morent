import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { IoOptionsOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import myImage from '../../assets/image/profileNavbar.jpg';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return <nav>

        <div className="navbar">
            <div className="navbar__left">
                <FaBars className="bar-icons" />
                <div className="navbar__left__title">
                    <h1>morent</h1>
                </div>
                <div className="navbar__input">
                    <CiSearch className="search-icon" />
                    <input type="search" placeholder="Search something here" />
                    <IoOptionsOutline className="options-icon" />
                </div>
            </div>
            <div className="navbar__right">
                <div className="navbar__right__icons">
                    <FaHeart className="right-icons" />
                    <div className="point__icon">
                        <BsFillBellFill className="right-icons point" />
                    </div>
                    <IoMdSettings className="right-icons" />
                </div>
                <div className="navbar__profile">
                    <img src={myImage} />
                </div>
            </div>
        </div>
    </nav>
};

export default Navbar;