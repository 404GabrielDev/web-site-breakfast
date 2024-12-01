import "./header.css";
import {
  background,
  iconMenu,
  iconClosed,
  facebook,
  instagram,
  whatsapp,
} from "../../assets/Javascript/images";
import { useState } from "react";

const Header = () => {

    const[openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }



  return (
    <>
      <header>
        <div className="menu-mobile">
          <h1>Best coffe in the city</h1>
          <img src={iconMenu} alt="icon" onClick={toggleMenu} />
        </div>

        <div className={`container-mobile ${openMenu ? 'open' : ''}`}>
          <div className="header-mobile">
            <h1>Many varieties</h1>
            <img src={iconClosed} alt="icon-closed" onClick={toggleMenu} />
          </div>

          <div className="navbar-mobile">
            <ul>
              <li>Drinks</li>
              <li>Coffe</li>
              <li>Specials</li>
              <li>All Menu</li>
            </ul>
          </div>

          <div className="container-socialMedia">
            <div>
            <h1>Social Media</h1>
            </div>

            <div className="icons-socialMedia">
                <img src={facebook} />
                <img src={instagram} />
                <img src={whatsapp} />
            </div>
            
          </div>
        </div>

        <div className="container-menuDesktop">
          <div>Best Coffe</div>
          <div>
          <ul>
              <li>Drinks</li>
              <li>Coffe</li>
              <li>Specials</li>
              <li>All Menu</li>
            </ul>
          </div>
          <div>
            <button>Contact</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
