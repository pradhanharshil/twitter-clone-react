import TopBar from "./TopBar";
import style from "./Feed.module.css";
import TweetCard from "../Tweet/TweetCard";
import NewTweet from "../Tweet/NewTweet";

const Feed = () => {
    return (
        <div className={style.feed}>
            <TopBar />
            <div className={style.tweets_list}>
                <NewTweet />
                <TweetCard />
                <TweetCard />
                <TweetCard />
                <TweetCard />
                <TweetCard />
                <TweetCard />
            </div>
        </div>
    );
};

export default Feed;