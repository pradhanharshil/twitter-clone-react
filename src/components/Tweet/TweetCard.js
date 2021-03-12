import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";

const TweetCard = () => {
    return (
        <div className={style.tweet}>
            <UserImage img={user}/>
            <div className={style.content}>
                <div>
                    <span className={style.bold}>Ubuntu</span>
                    <span className={style.uname}>@Ubuntu</span>
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