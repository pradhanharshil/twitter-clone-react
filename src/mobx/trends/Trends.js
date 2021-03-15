import { makeAutoObservable } from "mobx";

const initState = [
    {
        trend: "IndiaVSEngland",
        tweets: "1M"
    },
    {
        trend: "RoadSafetyWorldSeries",
        tweets: "10K"
    },
    {
        trend: "BJP",
        tweets: "100K"
    },
    {
        trend: "PetrolPrice",
        tweets: "10M"
    },
    {
        trend: "CovidVaccination",
        tweets: "1B"
    },
    {
        trend: "100DaysOfCode",
        tweets: "10K"
    }
]

class Trends {
    trends = initState;
    constructor() {
        makeAutoObservable(this);
    }
    get getTrends() {
        return this.trends;
    }
    addTrend(title, tweets) {
        this.trends.push({ title, tweets });
    }
    deleteTrend(title) {
        const index = this.trends.findIndex(trend => trend.trend === title);
        if (index > -1) {
            this.trends.splice(index, 1);
        }
    }
}

export default new Trends();