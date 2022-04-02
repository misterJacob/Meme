
// import logo from "../images/logo.svg";
// import Airbnb from '../images/airbnb-logo.png'
// import Airbnb from '../images/airbnb-logo.svg'
import Airbnb from "../images/Airbnb_Logo_Bélo.svg"

function Header() {
  return (
    <header>
      <nav className="nav">
        {/* <img src={logo} alt="logo" className="App-logo" width="60px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
        <img src={Airbnb} alt="logo" className='logo' />



      </nav>
    </header>
  );
}

export default Header