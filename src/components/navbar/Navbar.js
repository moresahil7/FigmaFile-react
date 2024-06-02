import React,{useState} from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";


const Menu = () => (
        <React.Fragment>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>

        </React.Fragment>
    )


//BEM -> Block element modifier
const Navbar = () => {
    const [togglemenu, setTogglemenu] = useState(false)
  return (
    <div className="gpt3_navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3_navbar-links_container">
        <Menu/>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
      <p>Sign in</p>
      <button type="button">Sign Up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {togglemenu
          ? <RiCloseLine color="#ffffff" size={30} onClick={() => setTogglemenu(false) } />
          : <RiMenu3Line color="#ffffff" size={30} onClick={() => setTogglemenu(true) } />
        }
        {
            togglemenu &&(
                <div className="gpt3_navbar-menu_container scale-up-center">
                    <div className="gpt3_navbar-menu_container-links">
                        <Menu/>
                    </div>
                        <div className="gpt3_navbar-menu_container-links-sign">
                        <p>Signin</p>
                        <button>Sign Up</button>
                    </div> 
                </div>
                
            )}
      </div>
    </div>
  );
};

export default Navbar;
