import '../index.css'
import { IoPaperPlaneOutline } from 'react-icons/io5';
import logo from '../assets/images/horse.png'
import { FaPhone } from "react-icons/fa";


const navigation = [
  { title: "Home", href: "#" },
  { title: "About us", href: "#" },
  { title: "why us", href: "#" },
  { title: "team", href: "#" },
  { title: "Services", href: "#" },
];




function Header() {
  return (
    <>
      <header className="header">
        <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
      <div className="header-top">
        
        <div className="header-contact">
          <span className="header-contact-icon">
          <IoPaperPlaneOutline />
          </span>
          <p className="header-contact-text">info@horseclub.com</p>
        </div>
        

        <div className="logo">
          <img src={logo} alt="logo" width="40px" />
          <p className="logo-text">horse club</p>
        </div>
        


        <div className="header-contact">
          <p className="header-contact-text">+254 750 059 353</p>
          <span className="header-contact-icon">
            <FaPhone />
          </span>
        </div>
        
      </div>
      <div className="header-bottom">
        <nav>
          <ul className="nav-list">
            {navigation.map((item, index) => (
              <li key={index} className="nav-list-item">
                <a href={item.href} className="nav-list-item-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header
