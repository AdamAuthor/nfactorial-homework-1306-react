import logo from "./img/konoha.png";
import "./navbar.css";

function Navbar() {
    return (
        <div className="container">
        <div className="navbar">
        <img src={logo} alt="error" className="logo" />
        <div className="inputContainer">
            <input type="text" className="inputBox" />
        </div>
        </div>
    </div>
    );
}

export default Navbar;
