import "./LandingPage.css";
import { Link } from "react-router-dom";
import AuthService from "../services/authService";
import logo from "../../assets/eventhublogo.jpg";

const FEATURES = [
  { icon: "📋", title: "Event Planning",       desc: "Create and manage events with all details in one place — date, time, location and description." },
  { icon: "📦", title: "Resource Management",  desc: "Add equipment, venues and staff as resources. Keep track of what is available and what is in use." },
  { icon: "🔗", title: "Resource Allocation",  desc: "Assign resources to events easily. Avoid double bookings and conflicts with a clear allocation view." },
  { icon: "👥", title: "Staff Coordination",   desc: "Assign staff to events, track setup status and keep everyone updated on their responsibilities." },
  { icon: "📊", title: "Event Tracking",       desc: "Monitor event status from planned to ongoing to completed. View all past events in one place." },
  { icon: "🧾", title: "Client Bookings",      desc: "Clients can log in and view their event booking details, schedule and assigned resources." },
];

const STEPS = [
  { step: "01", title: "Register & Login",    desc: "Create an account as a Planner, Staff or Client and login to your dashboard." },
  { step: "02", title: "Create Your Event",   desc: "Planners add event details like title, date, location and description." },
  { step: "03", title: "Add Resources",       desc: "Add required equipment, venues and staff members as resources in the system." },
  { step: "04", title: "Allocate & Manage",   desc: "Assign resources to events, update setup status and track everything live." },
];

const TESTIMONIALS = [
  { name: "Ravi Kumar",   role: "Event Planner",   text: "EventHub made it so easy to manage our college fest. Everything from resource booking to staff assignment was handled in one place.", avatar: "RK" },
  { name: "Priya Sharma", role: "Staff Member",    text: "I can see my assigned event, check what resources are allocated and update the setup status without any confusion.", avatar: "PS" },
  { name: "Arjun Reddy",  role: "Client",          text: "As a client I could log in and see all my booking details clearly. No need to call anyone for updates.", avatar: "AR" },
];

export default function LandingPage() {
  return (
    <div className="lp-page">

      {/* ── Navbar ── */}
      <nav className="lp-nav">
        <div className="lp-nav-inner">
          <div className="lp-nav-brand">
            <img src={logo} alt="logo" className="lp-nav-logo" />
            <span className="lp-nav-name">EventHub</span>
          </div>
          <div className="lp-nav-links">
            <a href="#features"  className="lp-nav-link">Features</a>
            <a href="#howitworks" className="lp-nav-link">How it Works</a>
            <a href="#testimonials" className="lp-nav-link">Reviews</a>
          </div>
          <div className="lp-nav-actions">
            <Link to="/login" className="lp-nav-login">Login</Link>
            <Link to="/register" className="lp-nav-register">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="lp-hero">
        <div className="lp-hero-inner">
          <div className="lp-hero-text">
            <span className="lp-hero-tag">Event Management System</span>
            <h1 className="lp-hero-title">
              Plan Events.<br />
              Manage Resources.<br />
              <span className="lp-hero-highlight">Deliver Results.</span>
            </h1>
            <p className="lp-hero-desc">
              EventHub is a complete event management platform for planners, staff and clients.
              Handle everything from resource allocation to setup tracking — all in one system.
            </p>
            <div className="lp-hero-btns">
              <Link to="/register" className="lp-btn-primary">Create an Account</Link>
              <Link to="/login" className="lp-btn-white">Login</Link>
            </div>
            <div className="lp-hero-roles">
              {[
                { icon: "📋", label: "For Planners" },
                { icon: "🏟️", label: "For Staff" },
                { icon: "👥", label: "For Clients" },
              ].map((r) => (
                <span key={r.label} className="lp-hero-role-tag">
                  {r.icon} {r.label}
                </span>
              ))}
            </div>
          </div>
          <div className="lp-hero-visual">
            <div className="lp-hero-card">
              <div className="lp-hero-card-header">
                <span className="lp-hero-card-dot red" />
                <span className="lp-hero-card-dot yellow" />
                <span className="lp-hero-card-dot green" />
                <span className="lp-hero-card-title">Event Dashboard</span>
              </div>
              {[
                { title: "Annual College Fest",    status: "ONGOING",   color: "#e65100", bg: "#fff3e0" },
                { title: "CSE Dept Symposium",     status: "PLANNED",   color: "#1565c0", bg: "#e3f2fd" },
                { title: "Freshers Welcome Day",   status: "COMPLETED", color: "#2e7d32", bg: "#e8f5e9" },
              ].map((e) => (
                <div key={e.title} className="lp-hero-event-row">
                  <div className="lp-hero-event-icon">📅</div>
                  <div className="lp-hero-event-info">
                    <div className="lp-hero-event-title">{e.title}</div>
                    <div className="lp-hero-event-loc">📍 JNTU Auditorium</div>
                  </div>
                  <span className="lp-hero-event-status" style={{ color: e.color, background: e.bg }}>
                    {e.status}
                  </span>
                </div>
              ))}
              <div className="lp-hero-card-footer">
                <span>3 events · 7 resources allocated</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── Features ── */}
      <section className="lp-features" id="features">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <p className="lp-section-eyebrow">Features</p>
            <h2 className="lp-section-title">Everything You Need to Run an Event</h2>
            <p className="lp-section-subtitle">
              EventHub covers the full event lifecycle — from planning to completion.
            </p>
          </div>
          <div className="lp-features-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="lp-feature-card">
                <span className="lp-feature-icon">{f.icon}</span>
                <h3 className="lp-feature-title">{f.title}</h3>
                <p className="lp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="lp-how" id="howitworks">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <p className="lp-section-eyebrow">How it Works</p>
            <h2 className="lp-section-title">Get Started in 4 Simple Steps</h2>
            <p className="lp-section-subtitle">
              Setting up and managing your event on EventHub is straightforward.
            </p>
          </div>
          <div className="lp-steps-grid">
            {STEPS.map((s, i) => (
              <div key={s.step} className="lp-step-card">
                <div className="lp-step-num">{s.step}</div>
                {i < STEPS.length - 1 && <div className="lp-step-arrow">→</div>}
                <h3 className="lp-step-title">{s.title}</h3>
                <p className="lp-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="lp-testimonials" id="testimonials">
        <div className="lp-section-inner">
          <div className="lp-section-header">
            <p className="lp-section-eyebrow">Reviews</p>
            <h2 className="lp-section-title">What Users Say</h2>
          </div>
          <div className="lp-testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="lp-testimonial-card">
                <p className="lp-testimonial-text">"{t.text}"</p>
                <div className="lp-testimonial-author">
                  <div className="lp-testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="lp-testimonial-name">{t.name}</div>
                    <div className="lp-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-title">Ready to Manage Your Next Event?</h2>
          <p className="lp-cta-desc">
            Join EventHub and manage your events, resources and team from one platform.
          </p>
          <div className="lp-cta-btns">
            <a href="/register" className="lp-btn-primary">Create an Account</a>
            <a href="/login"    className="lp-btn-white">Login</a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div className="lp-footer-brand">
            <img src={logo} alt="logo" className="lp-footer-logo" />
            <span className="lp-footer-name">EventHub</span>
          </div>
          <p className="lp-footer-copy">© 2025 EventHub. Event Management & Resource Allocation System.</p>
          <div className="lp-footer-links">
            <Link to="/about"    className="lp-footer-link">About</Link>
            <Link to="/contact"  className="lp-footer-link">Contact</Link>
            <Link to="/feedback" className="lp-footer-link">Feedback</Link>
            <Link to="/register" className="lp-footer-link">Create an Account</Link>
            <Link to="/login" className="lp-footer-link">Login</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
