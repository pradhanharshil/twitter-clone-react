import style from "./Sidebar.module.css";
import Input from "../Widgets/Input";
import FloatingPanel from "./FloatingPanel";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.sidebar_area}>
                <Input 
                    className={style.search}
                    placeholder="Search Twitter"
                    type="text" />
            <FloatingPanel />
            </div>
        </div>
    );
}

export default Sidebar;