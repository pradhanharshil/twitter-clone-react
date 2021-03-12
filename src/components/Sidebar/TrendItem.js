import style from "./Sidebar.module.css";

const TrendItem = ({trend, count}) => {
    return (
        <div className={style.trend_item}>
            <div className={style.trend}>
                #{trend}
            </div>
            <div className={style.tweets}>
                {count} Tweets
            </div>
        </div>
    );
}

export default TrendItem;