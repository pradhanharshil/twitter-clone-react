import style from "./Tweet.module.css";
import add_image from "../../assets/icons/add_image.png";
import gif from "../../assets/icons/gif.png";
import poll from "../../assets/icons/poll.png";
import emoji from "../../assets/icons/emoji.png";

const NewTweetIcons = () => {
    return (
        <div className={style.new_tweet_icons}>
            <img
                className={style.tweet_icon}
                src={add_image}
                alt="Add" />
            <img
                className={style.tweet_icon}
                src={gif}
                alt="GIF" />
            <img
                className={style.tweet_icon}
                src={poll}
                alt="Poll" />
            <img
                className={style.tweet_icon}
                src={emoji}
                alt="Emoji" />
        </div>
    );
}

export default NewTweetIcons;