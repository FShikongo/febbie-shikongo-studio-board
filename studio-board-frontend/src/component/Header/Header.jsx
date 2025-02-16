import "./Header.scss";

export default function header() {
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__home">
            <Logo />
          </div>
          <ul className="header__nav">
            <li className="header__block">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Warehouses
              </NavLink>
            </li>
            <li className="header__block">
              <NavLink
                to="/inventory"
                className={({ isActive }) =>
                  isActive
                    ? "header__link header__link--active"
                    : "header__link"
                }
              >
                Inventory
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
