import TopBar from "./TopBar";
import style from "./Feed.module.css";
import TweetsContainer from "./TweetsContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Thread from "../Thread/Thread";
import BottomNav from "../Navbar/BottomNav";

const Feed = () => {
    return (
        <div className={style.feed}>
            <Router>
                <TopBar title="Home" />
                <div className={style.tweets_list}>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={TweetsContainer} />
                        <Route
                            exact
                            path="/tweet/:id"
                            component={Thread} />
                    </Switch>
                </div>
                <BottomNav />
            </Router>
        </div>
    );
};

export default Feed;