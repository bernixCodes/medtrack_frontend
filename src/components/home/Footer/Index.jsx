import "./footer.css";
import pic from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-top">
          <div className="footer-subscribe">
            <input type="email" placeholder="Your E-mail" />
            <button>Subscribe</button>
          </div>

          <div className="footer-icons">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        <div className="hr"></div>

        <div className="footer-mid">
          <div className="footer-info">
            <img src={pic} alt="" className="logo" />
            <p>
              Our medical center offers the widest range of services in the
              area. We strive to provide our patients with the most high-quality
              help by top-notch experts in their fields.
            </p>
          </div>

          <div className="footer-sub">
            <div className="footer-departments">
              <h2>Departments</h2>
              <p>Laboratory Analysis</p>
              <p>Pediatric</p>
              <p>Rehabilitation</p>
              <p>Gynaecological</p>
              <p>Ophthalmology</p>
              <p>Cardiac</p>
            </div>

            <div className="footer-departments">
              <h2>Contacts</h2>
              <p>Laboratory Analysis</p>
              <p>Pediatric</p>
              <p>Rehabilitation</p>
            </div>

            <div className="footer-quicklinks">
              <h2>Quick Links</h2>
              <p>Home</p>
              <p>Pharmacy</p>
              <p>Labs</p>
              <p>Blog</p>
              <p>Contacts</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-sign">
        <div className="sign-info">
          <p>&copy; 2024 MedCare. All rights reserved.</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
