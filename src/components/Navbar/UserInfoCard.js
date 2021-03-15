import style from "./Navbar.module.css";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png"

const UserInfoCard = () => {
    return (
        <div className={style.user_info_card}>
            <img 
                src={user}
                className={style.user_info_card_img}
                alt="User" />
            <div className={style.user_detail}>
                <span className={style.bold}>Ubuntu</span>
                <span className={style.uname}>@Ubuntu</span>
            </div>
            <div>
                <img
                    className={style.options_img}
                    src={dots}
                    alt="" />
            </div>
        </div>
    );
}

export default UserInfoCard;