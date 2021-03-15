import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import icon from "../../assets/images/user.jpg";
import Button from "../Widgets/Button";
import NewTweetIcons from "./NewTweetIcons";

const NewTweet = () => {
    return (
        <div className={style.new_tweet}>
            <UserImage img={icon} />
            <div className={style.add_tweet}>
                <textarea 
                    className={style.textarea}
                    placeholder="What's happening ?" />
                <div className={style.new_tweet_actions}>
                    <NewTweetIcons />
                    <Button 
                        className={style.tweet_button}
                        children="Tweet"/>
                </div>
            </div>
        </div>
    );
}

export default NewTweet;