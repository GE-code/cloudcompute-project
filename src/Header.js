import { Menu, Search} from "semantic-ui-react";
import { Link } from "react-router-dom";
import './style.css';
function Header() {
    return (
        <Menu>
            <Menu.Item className="head">Amigos</Menu.Item>
            <Menu.Item position = "right" className="head" as={Link} to="/signup"
            >Sign in / Sign up</Menu.Item>
        </Menu>
    );
}

export default Header;