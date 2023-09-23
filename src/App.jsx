//Functions//
import AwesomeButton from "./Functions/AwesomeButton";
import NavBar from "./Functions/Navbar";
import Header from "./Functions/Header";
import Paragraph from "./Functions/Paragraph";

//Images//
import ironhackLogo from "./images/ironhack-logo-xs.png";
import IronIconOne from "./images/icon1 iron.png";
import IronIconTwo from "./images/icon2 iron.png";
import IronIconThree from "./images/icon3 iron.png";
import IronIconFour from "./images/icon4 iron.png";
import MenuTop from "./images/menu-top-xs.png";

//Main.jsx//
function App() {
  return <>
   <NavBar/>
   <img src = {ironhackLogo} alt= "ironhackLogo"/>
   <img src = {MenuTop} alt= "MenuTop"/>
   <Header/>
   <Paragraph/>   
   <AwesomeButton/>
   <img src = {IronIconOne} alt= "IronIconOne"/>
   <img src = {IronIconTwo} alt= "IronIconTwo"/>
   <img src = {IronIconThree} alt= "IronIconThree"/>
   <img src = {IronIconFour} alt= "IronIconFour"/>
  </>;
}

export default App;