import "./Footer.scss";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img
            className="footer__logo-img"
            src="your-logo-url-here"
            alt="Studio Board"
          />
        </div>

        <section className="footer__subscribe">
          <h3 className="footer__subscribe-title">
            Subscribe to our newsletter
          </h3>
          <p className="footer__subscribe-text">
            Sign up with your email address to receive news and updates.
          </p>
          <form
            action="https://example.com/subscribe"
            method="POST"
            className="footer__subscribe-form"
          >
            <input
              type="email"
              className="footer__subscribe-input"
              placeholder="Email Address"
              required
            />
            <button type="submit" className="footer__subscribe-button">
              Sign Up
            </button>
          </form>
        </section>

        <section className="footer__connect">
          <h3 className="footer__connect-title">Connect</h3>
          <ul className="footer__connect-list">
            <li className="footer__connect-item">Job</li>
            <li className="footer__connect-item">Event</li>
            <li className="footer__connect-item">Network</li>
          </ul>
        </section>

        <section className="footer__social">
          <h3 className="footer__social-title">Follow Us</h3>
          <div className="footer__social-links">
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__social-icon"
                src="your-image-url-here"
                alt="TikTok"
              />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img
                className="footer__social-icon"
                src="your-image-url-here"
                alt="Twitter"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer__social-icon"
                src="your-image-url-here"
                alt="Instagram"
              />
            </a>
          </div>
        </section>

        <section className="footer__copy">
          <p className="footer__copy">
            &copy; Studio Board Inc. All Rights Reserved.
          </p>
        </section>
      </div>
    </footer>
  );
}
