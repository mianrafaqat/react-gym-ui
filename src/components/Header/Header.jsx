import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={logo} className="logo" alt="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={bars}
            alt="bar"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Programs
            </Link>{" "}
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Why us
            </Link>{" "}
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              Plans
            </Link>{" "}
          </li>
          <li onClick={() => setMenuOpened(false)}>
            {" "}
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpened(false)}
            >
              {" "}
              Testimonials
            </Link>{" "}
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
