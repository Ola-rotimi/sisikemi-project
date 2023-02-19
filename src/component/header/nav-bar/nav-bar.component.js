import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import Search from "../search/search.component";
import { ReactComponent as Logo } from "../../../assets/sisi-kemi-logo.svg";
import "./nav-bar.styles.scss";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="nav-container">
      <section className="nav-top"></section>
      <section className="nav-menu">
        <div className="nav-logo">
          <Link to="/">
            <Logo className="logo-img" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/newin">NEW IN</Link>
          <Link to="/shop">SHOP</Link>
          <Link to="/sale">SALE</Link>
          <Link to="rtw">RTW</Link>
          <Link to="/collection">COLLECTION</Link>
          <Link to="bridals">BRIDALS</Link>
        </div>
        <div className="nav-profile">
          <Search />
          <Link to="/signin">
            <CgProfile />
          </Link>
        </div>
        <div className="hamburger">
          {click ? (
            <FaTimes onClick={handleClick} />
          ) : (
            <FaBars onClick={handleClick} />
          )}
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default NavBar;
