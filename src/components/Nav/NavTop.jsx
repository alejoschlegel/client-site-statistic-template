import "./Nav.css";

export default function NavTop() {
  return (
    <div className="navtop">
        <div className="left">
            <span>Popular</span>
            <span>For you</span>
            <span>Messages</span>
        </div>
        <div className="right">
            <div>
                <span className="material-icons-sharp">search</span>
                <input type="text" placeholder="Search messages"/>
            </div>
            <div>
                <span className="material-icons-sharp">notifications</span>
                <div>user</div>
            </div>
        </div>
    </div>
  );
}