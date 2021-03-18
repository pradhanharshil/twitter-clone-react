import style from "./Navbar.module.css";
import home from "../../assets/icons/home.png";
import notifications from "../../assets/icons/notifications.png";
import messages from "../../assets/icons/messages.png";
import search from "../../assets/icons/search.png";

// home, search, notification, message
const BottomNav = () => {
    return (
        <div className={style.bottom_nav}>
            <div className={style.bottom_nav_items}>
                <img
                    className={style.bottom_nav_img}
                    src={home}
                    alt="Home" />
                <img
                    className={style.bottom_nav_img}
                    src={search}
                    alt="Search" />
                <img
                    className={style.bottom_nav_img}
                    src={notifications}
                    alt="notifications" />
                <img
                    className={style.bottom_nav_img}
                    src={messages}
                    alt="messages" />
            </div>
        </div>
    );
}

export default BottomNav;