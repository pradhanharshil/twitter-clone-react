import TopBar from "./TopBar";
import style from "./Feed.module.css";
import TweetsContainer from "./TweetsContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const Feed = () => {
    return (
        <div className={style.feed}>
            <TopBar title="Home" />
            <div className={style.tweets_list}>
                <Router>
                    <Switch>
                        <Route 
                            exact 
                            path="/"
                            component={TweetsContainer} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Feed;