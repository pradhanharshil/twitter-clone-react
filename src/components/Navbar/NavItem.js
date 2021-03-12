import style from "./Navbar.module.css";

const NavItem = ({logo, name}) => {
    return (
        <div className={style.item}>
            <img 
                className={style.item_logo}
                src={logo} 
                alt={name}/>
            <p>{name}</p>
        </div>
    );
}

export default NavItem;