import "./Logo.scss";
import logo from "../../assets/Logo/Whistler_film_festivals_logo.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} className="logo" alt="Studio Board Logo" />
    </Link>
  );
}
