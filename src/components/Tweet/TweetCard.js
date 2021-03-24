import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import style from "./Tweet.module.css";
import UserImage from "./UserImage";
import Panel from "./Panel";
import user from "../../assets/images/user.jpg";
import dots from "../../assets/icons/dots.png";
import CardContent from "../Widgets/CardContent";
import Menu from "../Menu/Menu";

const content = `A new version of ubuntu 21.04 has been
released. It comes with some exciting features
like new GNOME 4.0, support for fractional
scaling out of the box and many more.`;

const TweetCard = ({ text = content, time = `1h ago`, likes, retweets, deleteTweet = null, id = null }) => {
    const menuRef = useRef(null);
    const inputRef = useRef(null);
    const tweetTextRef = useRef(null);
    const [edit, setEdit] = useState(false);
    const handler = () => {
        // const display = menuRef.current.style.display;
        // display === "none" || display === ""
        //     ? menuRef.current.style.display = "block"
        //     : menuRef.current.style.display = "none"
        menuRef.current.style.display = "block";
    }
    const editHandler = () => {
        if (edit) {
            tweetTextRef.current.style.display = "none";
            inputRef.current.style.display = "block";
            inputRef.current.value = text;
            setEdit(state => !state);
        } else {
            tweetTextRef.current.style.display = "block";
            inputRef.current.style.display = "none";
            setEdit(state => !state);
        }
    }
    return (
        <div className={style.container}>
            <div className={style.tweet}>
                <UserImage img={user} />
                <div className={style.content}>
                    <div className={style.heading}>
                        <div className={style.user}>
                            <CardContent
                                className={style.card_content}
                                title="Ubuntu"
                                text="@Ubuntu" />
                            <span className={style.tweet_time}>{time}</span>
                        </div>
                        <div>
                            <img
                                onClick={handler}
                                className={style.dots}
                                src={dots}
                                alt="Dots" />
                        </div>
                    </div>
                    <Link to={`/tweet/${id}`}>
                        <div ref={tweetTextRef} className={style.tweet_text}>{text}</div>
                    </Link>
                    <textarea 
                        className={style.textarea_edit}
                        ref={inputRef} />
                    <Panel
                        likes={likes}
                        retweets={retweets} />
                </div>
            </div>
            <Menu
                ref={menuRef}
                deleteHandler={deleteTweet}
                editHandler={editHandler} />
        </div>
    );
}

export default observer(TweetCard);