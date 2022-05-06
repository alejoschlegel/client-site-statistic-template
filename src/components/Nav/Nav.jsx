import css from "./Nav.module.css";
import NavLeft from "./NavLeft";
import NavTop from "./NavTop";

export default function Nav() {
  return (
    <div className={css.nav_container}>
      <div className={css.nav}>
          <span className="material-icons-sharp nav_menu" id={css.menu}>menu</span>
          <div>
            <button><span className="material-icons-sharp">home</span></button>
            <button><span className="material-icons-sharp">apps</span></button>
            <button><span className="material-icons-sharp">comment</span></button>
            <button><span className="material-icons-sharp">today</span></button>
            <button><span className="material-icons-sharp">person</span></button>
            <button><span className="material-icons-sharp">people</span></button>
            <button><span className="material-icons-sharp">image</span></button>
          </div>
      </div>

      <div className={css.navleft_options}>
        <span className={css.navleft_options_webinterface}>Web interface</span>
        <div className={css.navleft_options_dashboards}>
          <span >Dashboards</span>
          <span>Messages</span>
          <span>Notifications</span>
          <span>Friends</span>
          <span>Messages</span>
          <span>Calendar</span>
          <span>Users</span>
          <span>Top Charts</span>
        </div>
        <div className={css.navleft_options_contact}>
          <span>Contacts</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
          <span>user</span>
        </div>
        <div className={css.navleft_options_bottom}>
          <span className="material-icons-sharp">people</span>
          <span className="material-icons-sharp">comment</span>
          <span className="material-icons-sharp">email</span>
        </div>
      </div>
    </div>
  );
}