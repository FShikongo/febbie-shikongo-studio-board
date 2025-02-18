import React from "react";
import "./Header.scss";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__home">
            <Logo />
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
        </div>
      </header>
    </>
  );
}
