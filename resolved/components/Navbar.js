
import Logo from "../images/airbnb-logo.png";

export default function Navbar(){
    return(
        <header>
            <nav className="nav">
            <img src={Logo} className="logo" />

            </nav>
        </header>
    )
}