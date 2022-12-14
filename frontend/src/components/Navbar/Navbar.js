import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/img/logo.jpg";

import "./Navbar.css";

const Navbar = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink exact activeClassName="is-active" to="/">
              <img src={logo} alt="logo" className="img__logo" />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}
              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    activeClassName="is-active"
                    onClick={toggleClass}
                    to={`/coffee`}
                  >
                    C?? ph??
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/new-product`}
                  >
                    S???n ph???m m???i
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="/menu">
                    Menu <FiChevronDown style={{ display: "inline-block" }} />
                  </Link>
                  <div className={boxClassSubMenu.join(" ")}>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingInlineStart: 0,
                        paddingLeft: 40,
                        paddingRight: 40,
                      }}
                    >
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          T???t c???
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          C?? ph?? ????
                        </NavLink>
                        <p className="sub__menu__item">C?? ph?? phong c??ch</p>
                        <p className="sub__menu__item">C?? ph?? s??nh ??i???u</p>
                        <p className="sub__menu__item">C?? ph?? moka</p>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          C?? ph?? s???a
                        </NavLink>
                        <p className="sub__menu__item">C?? ph?? s???a d???a</p>
                        <p className="sub__menu__item">C?? ph?? kem cheese</p>
                        <p className="sub__menu__item">C?? ph?? ???????ng n??u</p>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          ???? xay
                        </NavLink>
                        <p className="sub__menu__item">C?? ph?? socola</p>
                        <p className="sub__menu__item">C?? ph?? ???? xay</p>
                        <p className="sub__menu__item">Ho??ng ????o ???? xay</p>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          Tr?? s???a
                        </NavLink>
                        <p className="sub__menu__item">Matcha ?????u ?????</p>
                        <p className="sub__menu__item">Tr?? s???a tr??n ch??u</p>
                      </li>
                      <li>
                        <NavLink
                          onClick={toggleClass}
                          activeClassName="is-active"
                          to={`/`}
                        >
                          Tr?? tr??i c??y
                        </NavLink>
                        <p className="sub__menu__item">Chanh t????i hoa l??i</p>
                        <p className="sub__menu__item">Tr?? t????i l???c tr??</p>
                        <p className="sub__menu__item">Tr?? ????o</p>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/contact`}
                  >
                    Li??n h???
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
