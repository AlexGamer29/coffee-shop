import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/img/logo.jpg";
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
              <img src={logo} alt="logo" />
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
                    to={`/Caphe`}
                  >
                    
                    Cà phê
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Newproduct`}
                  >
                    
                    Sản phẩm mới
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  
                  <Link to="/Menu">
                    
                    Menu <FiChevronDown />
                  </Link>
                  <div className={boxClassSubMenu.join(" ")}>
                  <ul style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingInlineStart:0,paddingLeft:40,paddingRight:40}} >
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Online`}
                      >
                        Tất cả
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/Offline`}
                      >
                      
                        Cà phê đá
                      </NavLink>
                      <p>Cà phê phong cách</p>
                      <p>Cà phê sành điệu</p>
                      <p>Cà phê moka</p>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                      
                        Cà phê sữa
                      </NavLink>
                      <p>Cà phê sữa dừa</p>
                      <p>Cà phê kem cheese</p>
                      <p>Cà phê đường nâu</p>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                      
                        Đá xay
                      </NavLink>
                      <p>Cà phê socola</p>
                      <p>Cà phê đá xay</p>
                      <p>Hoàng đào đá xay</p>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                      
                        Trà sữa
                      </NavLink>
                      <p>Matcha đậu đỏ</p>
                      <p>Trà sữa trân châu</p>
                     
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        activeClassName="is-active"
                        to={`/`}
                      >
                        Trà trái cây
                      </NavLink>
                      <p>Chanh tươi hoa lài</p>
                      <p>Trà tươi lục trà</p>
                      <p>Trà đào</p>
                    </li>
                  </ul>
                  </div>
                </li>
                <li className="menu-item ">
                  <NavLink
                    onClick={toggleClass}
                    activeClassName="is-active"
                    to={`/Contact`}
                  >
                    Liên hệ
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
