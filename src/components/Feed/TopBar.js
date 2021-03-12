import style from "./Feed.module.css";
import icon from "../../assets/icons/topbar.png"

const TopBar = () => {
    return (
        <div className={style.topbar}>
            <p>Home</p>
            <img
                className={style.logo}
                src={icon}
                alt="Icon" />
        </div>
    );
}

export default TopBar;