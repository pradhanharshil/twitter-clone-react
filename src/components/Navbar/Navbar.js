import style from "./Navbar.module.css";
import NavItem from "./NavItem";
import Button from "../Widgets/Button";
import home from "../../assets/icons/home.png";
import explore from "../../assets/icons/explore.png";
import notifications from "../../assets/icons/notifications.png";
import messages from "../../assets/icons/messages.png";
import bookmarks from "../../assets/icons/bookmarks.png";
import lists from "../../assets/icons/lists.png";
import profile from "../../assets/icons/profile.png";
import more from "../../assets/icons/more.png";
import twitter from "../../assets/images/twitter.png";

const Navbar = () => {
    return (
        <div className={style.nav}>
            <div className={style.nav_logo}>
                <div>
                    <img
                        src={twitter}
                        alt="Twitter"
                        className={style.twitter_logo} />
                </div>
            </div>
            <div className={style.nav_items}>
                <NavItem
                    name="Home"
                    logo={home} />
                <NavItem
                    name="Explore"
                    logo={explore} />
                <NavItem
                    name="Notifications"
                    logo={notifications} />
                <NavItem
                    name="Messages"
                    logo={messages} />
                <NavItem
                    name="Bookmarks"
                    logo={bookmarks} />
                <NavItem
                    name="Lists"
                    logo={lists} />
                <NavItem
                    name="Profile"
                    logo={profile} />
                <NavItem
                    name="More"
                    logo={more} />
                <Button 
                    className={style.item_button}
                    children="Tweet"/>
            </div>
        </div>
    );
}

export default Navbar;