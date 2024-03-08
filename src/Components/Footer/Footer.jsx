import { Home } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PolicyIcon from '@mui/icons-material/Policy';
import "./Footer.css";
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <section className="footer-box">
            <Link to="/home"><Home style={{ color: "#70b9be" }}/></Link>
            <Link to="/search"><PolicyIcon style={{ color: "#70b9be" }}/></Link>
            <FavoriteIcon style={{ color: "#70b9be" }}/>
            <AccountCircleIcon style={{ color: "#70b9be" }}/>
        </section>
    );
}
 
export default Footer;