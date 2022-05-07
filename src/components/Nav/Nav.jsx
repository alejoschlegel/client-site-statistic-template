import css from "./Nav.module.css";

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
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/29.jpg"/>
            <span>Adelaide da Cruz</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/men/55.jpg"/>
            <span>Joshua Chen</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/5.jpg"/>
            <span>David Roux</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/85.jpg"/>
            <span>Earl Elliott</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/63.jpg"/>
            <span>Eileen Gardner</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/31.jpg"/>
            <span>Esma Pekkan</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/20.jpg"/>
            <span>Caleb Lee</span>
          </div>
          <div className={css.contact}>
            <img src="https://randomuser.me/api/portraits/women/58.jpg"/>
            <span>Vilma Wainio</span>
          </div>
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