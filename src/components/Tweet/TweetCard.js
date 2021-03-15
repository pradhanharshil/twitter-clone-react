import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png";

const TweetCard = () => {
    return (
        <div className={style.tweet}>
            <UserImage img={user} />
            <div className={style.content}>
                <div className={style.heading}>
                    <div>
                        <span className={style.bold}>Ubuntu</span>
                        <span className={style.uname}>@Ubuntu</span>
                        <span className={style.tweet_time}>1h ago</span>
                    </div>
                    <div>
                        <img className={style.dots} src={dots} alt="Dots"/>
                    </div>
                </div>
                <div>
                    A new version of ubuntu 21.04 has been
                    released. It comes with some exciting features
                    like new GNOME 4.0, support for fractional
                    scaling out of the box and many more.
                </div>
                <Panel />
            </div>
        </div>
    );
}

export default TweetCard;