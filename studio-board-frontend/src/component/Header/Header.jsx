import React from "react";
import "./Header.scss";
import logo from "../../assets/StudioLogo/Studio_Logo_Blue-Font_White-Background.png";
import { NavLink } from "react-router-dom";

import facebook from "../../assets/Icons/Icon-facebook.svg";
import twitter from "../../assets/Icons/Icon-twitter.svg";
import instagram from "../../assets/Icons/Icon-instagram.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__home">
            {/* <img className="header__logo-image" src={logo} /> */}
          </div>

          <ul className="header__nav">
            <li className="header__label">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Job Board
              </NavLink>
            </li>
            <li className="header__label">
              <NavLink
                to="/event"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Event
              </NavLink>
            </li>
            <li className="header__label">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="header__label2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
          <div className="header__social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="header__social-icon"
                src={facebook}
                alt="Facebook"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                className="header__social-icon"
                src={twitter}
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="header__social-icon"
                src={instagram}
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
