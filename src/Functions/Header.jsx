import imageLogo from "../images/ironhack-logo-xs.png";
import imageMenu from "../images/menu-top-xs.png";
import "../Styles/header.css";

function Header() {
  return <>
    <div className="d-flex header-Principal flex-column">
      <div className="logos-header">
        <img className="logo-header" src={imageLogo} alt="Logo Ironhack"/>
        <img className="menu-header" src={imageMenu} alt="Logo Menú" />
      </div>
      <div className="text-header">
        <h1 className="head-header">Say hello to React Js</h1>
        <p className="paragraph-header">You will learn how to use the most popular
          frontend library, and become a super Ninja developer.
        </p>
      </div>
      <div className="button-header">
        <button className="btn-header">Awesome!</button>
      </div>
    </div>
  </>
}
export default Header;