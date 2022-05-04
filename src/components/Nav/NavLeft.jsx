export default function NavLeft() {
    return (
      <div className="navleft">
        <div className="navleft_menu">
          <span className="material-icons-sharp" id="menu">menu</span>
          <div>
            <span className="material-icons-sharp">home</span>
            <span className="material-icons-sharp">apps</span>
            <span className="material-icons-sharp">comment</span>
            <span className="material-icons-sharp">today</span>
            <span className="material-icons-sharp">person</span>
            <span className="material-icons-sharp">people</span>
          </div>
        </div>
        <div className="navleft_options">
            <span id="menu">Web interface</span>
          <div>
            <span className="text_muted">Dashboards</span>
            <span>Messages</span>
            <span>Notifications</span>
            <span>Friends</span>
            <span>Messages</span>
            <span>Calendar</span>
            <span>Users</span>
            <span>Top Charts</span>
          </div>
          <div>
          <span className="text_muted">Contacts</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
            <span>user</span>
          </div>
          <div>
            <span className="material-icons-sharp">people</span>
            <span className="material-icons-sharp">comment</span>
            <span className="material-icons-sharp">email</span>
          </div>
        </div>
      </div>
    );
  }