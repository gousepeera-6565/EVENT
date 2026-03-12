import "./Footer.css";
import logo from "../../assets/eventhublogo.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            <img src={logo} alt="EventHub Logo" className="footer-logo-img" />
            <span className="footer-logo">EventHub</span>
          </div>
          <p className="footer-tagline">Event Management & Resource Allocation Platform for planners, staff and clients.</p>
        </div>

        {/* Links */}
        <div className="footer-links-col">
          <p className="footer-col-title">Company</p>
          <a href="/about"    className="footer-link">ℹ️ About Us</a>
          <a href="/feedback" className="footer-link">💬 Feedback</a>
          <a href="/contact"  className="footer-link">📬 Contact</a>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-title">Platform</p>
          <a href="/planner/completed-events" className="footer-link">✅ Completed Events</a>
          <a href="/staff-directory"          className="footer-link">👥 Staff Directory</a>
        </div>

        <div className="footer-links-col">
          <p className="footer-col-title">Roles</p>
          <span className="footer-tag">Planner</span>
          <span className="footer-tag">Staff</span>
          <span className="footer-tag">Client</span>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} EventHub. All rights reserved.</p>
      </div>
    </footer>
  );
}