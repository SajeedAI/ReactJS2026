import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col">
          <h3>Maithrivanam Academy</h3>
          <p>
            Building modern digital solutions, EdTech platforms,
            and innovative software products for the future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: info@moltresinnovations.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Moltres Innovations. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
