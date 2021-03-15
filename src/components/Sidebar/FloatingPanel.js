import { observer } from "mobx-react-lite";
import trends from "../../mobx/trends/Trends";
import style from "./Sidebar.module.css";
import TrendItem from "./TrendItem";

const FloatingPanel = () => {
    return (
        <div className={style.floating_panel}>
            <div className={style.header}>What's happening</div>
            {/* <TrendItem
                trend="IndiaVSEngland"
                count="1M" />
            <TrendItem
                trend="RoadSafetyWorldSeries"
                count="10K" />
            <TrendItem
                trend="BJP"
                count="100K" />
            <TrendItem
                trend="PetrolPrice"
                count="10M" />
            <TrendItem
                trend="CovidVaccination"
                count="1B" /> */}
            {trends.trends.map(trend => <TrendItem key={trend.trend} trend={trend.trend} count={trend.tweets}/>)}
        </div>
    );
}

export default observer(FloatingPanel);