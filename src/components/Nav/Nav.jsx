import "./Nav.css";
import NavLeft from "./NavLeft";
import NavTop from "./NavTop";

export default function Nav() {
  return (
    <div className="nav">
      <NavLeft />
      <NavTop />
    </div>
  );
}