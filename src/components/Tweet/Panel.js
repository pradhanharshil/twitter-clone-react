import style from "./Tweet.module.css";
import like from "../../assets/icons/like.png";
import comment from "../../assets/icons/comment.png";
import retweet from "../../assets/icons/retweet.png";
import reply from "../../assets/icons/reply.png";

const Panel = () => {
    return (
        <div className={style.panel}>
            <img
                className={style.icon} 
                src={comment}
                alt="Comment"/>
            <img
                className={style.icon} 
                src={retweet}
                alt="Retweet"/>
            <img
                className={style.icon} 
                src={like}
                alt="Like"/>
            <img
                className={style.icon} 
                src={reply}
                alt="Reply"/>
        </div>
    );  
}

export default Panel;