import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import dancing from "../../assets/Gif/Dancing.gif";
import travolta from "../../assets/Gif/Cigarette-Travolta.gif";
import garfield from "../../assets/Gif/Andrew-Garfield.gif";
import damme from "../../assets/Gif/JCVDamme.gif";
import dandbridge from "../../assets/Gif/Dorothy-Dandridge-Vintage.gif";
import { useState, useEffect } from "react";

const heroVideos = [
  { id: "video2", video: dancing },
  { id: "video5", video: travolta },
  { id: "video3", video: damme },
  { id: "video4", video: dandbridge },
  { id: "video1", video: garfield },
];

const SignIn = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="signin-container"
      style={{
        backgroundImage: `url(${heroVideos[currentIndex].video})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "70vh",
        position: "relative",
      }}
    >
      <div className="signin-box">
        <h1>Welcome to Studio Board</h1>
        <p>Sign in to access media and production opportunities</p>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="signin-button"
            onClick={() => navigate("/home")}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
