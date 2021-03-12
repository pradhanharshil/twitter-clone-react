import TopBar from "./TopBar";
import style from "./Feed.module.css";
import TweetCard from "../Tweet/TweetCard";

const Feed = () => {
    return (
        <div className={style.feed}>
            <TopBar />
            <div className={style.tweets_list}>
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