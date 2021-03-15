import {    
    makeObservable,
    observable,
    computed
} from "mobx";

class Tweet {
    id= parseInt(Math.random() * 100000);
    text = null;
    likes = parseInt(Math.random() * 500);
    retweets = parseInt(Math.random() * 500);
    time = new Date().toDateString();
    constructor(text) {
        makeObservable(this, {
            text: observable,
            likes: observable,
            retweets: observable,
            getLikes: computed,
            getRetweets: computed,
            getTime: computed,
            getText: computed
        });
        this.text = text;
    }
    get getText() {
        return this.text;
    }
    get getTime() {
        return this.time;
    }
    get getLikes() {
        return this.likes;
    }
    get getRetweets() {
        return this.retweets;
    }
}

export default Tweet;