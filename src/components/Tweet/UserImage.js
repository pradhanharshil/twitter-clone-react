import style from "./Tweet.module.css";

const UserImage = ({img}) => {
    return (
        <div className={style.user_image}>
            <img className={style.image} src={img} alt="User" />
        </div>
    );
}

export default UserImage;