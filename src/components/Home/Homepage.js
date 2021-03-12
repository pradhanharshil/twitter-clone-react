import style from "./Homepage.module.css";
import Navbar from "../Navbar/Navbar";
import Feed from "../Feed/Feed";
import Sidebar from "../Sidebar/Sidebar"

const Homepage = () => {
    return (
        <div className={style.homepage}>
            <Navbar />
            <Feed />
            <Sidebar />
        </div>
    );
};

export default Homepage;