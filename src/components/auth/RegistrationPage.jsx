import { useState } from "react";
import AuthService from "../services/authService";
import "./RegistrationPage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/eventhublogo.jpg";


const ROLES = [
  { value: "PLANNER", label: "Event Planner", icon: "📋", desc: "Create and manage events, allocate resources" },
  { value: "STAFF",   label: "Staff",         icon: "🏟️", desc: "Handle venue setup and event operations" },
  { value: "CLIENT",  label: "Client",        icon: "👥", desc: "View and track your event bookings" },
];

const STEPS = [
  { icon: "1️⃣", title: "Pick your role",      desc: "Choose whether you are a planner, staff or client" },
  { icon: "2️⃣", title: "Fill your details",   desc: "Enter your username, email and set a password" },
  { icon: "3️⃣", title: "Start using EventHub", desc: "Login and access your personalized dashboard" },
];

export default function RegistrationPage() {
  const [form, setForm] = useState({ username: "", email: "", password: "", confirmPassword: "", role: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError(null);
  };

  const validate = () => {
    if (!form.username || !form.email || !form.password || !form.confirmPassword || !form.role)
      return "Please fill in all fields.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Enter a valid email address.";
    if (form.password.length < 6)
      return "Password must be at least 6 characters.";
    if (form.password !== form.confirmPassword)
      return "Passwords do not match.";
    return null;
  };

  const handleRegister = async () => {
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setLoading(true);
    setError(null);
    try {
      await AuthService.register({ username: form.username, email: form.email, password: form.password, role: form.role });
      setSuccess(true);
    } catch {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-page">

      {/* ── Left Panel ── */}
      <div className="reg-left">
        <div className="reg-left-content">

          {/* Logo */}
          <div className="reg-logo">
            <img src={logo} alt="logo" />
            <span className="reg-logo-name">EventHub</span>
          </div>

          {/* Quote */}
          <div className="reg-quote-block">
            <span className="reg-quote-mark">"</span>
            <p className="reg-quote-text">
              Every successful event starts with the right team, the right tools and a clear plan. EventHub brings all three together.
            </p>
          </div>

          {/* How it works */}
          <div className="reg-about-block">
            <p className="reg-about-title">How it works</p>
            <p className="reg-about-desc">
              EventHub connects planners, staff and clients on one platform — making event coordination simple, fast and reliable.
            </p>
          </div>

          <div className="reg-divider-line" />

          {/* Steps */}
          <p className="reg-steps-title">Getting started is easy</p>
          <div className="reg-steps-list">
            {STEPS.map((s) => (
              <div key={s.title} className="reg-step-item">
                <span className="reg-step-icon">{s.icon}</span>
                <div>
                  <div className="reg-step-title">{s.title}</div>
                  <div className="reg-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="reg-right">
        {!success ? (
          <div className="reg-card">
            <div className="reg-card-header">
              <h1 className="reg-title">Create Account</h1>
              <p className="reg-subtitle">Fill in the details below to register</p>
            </div>

            <div className="reg-field-group">
              <label className="reg-label">Select Role *</label>
              <div className="reg-role-grid">
                {ROLES.map((r) => (
                  <button key={r.value}
                    onClick={() => { setForm((f) => ({ ...f, role: r.value })); setError(null); }}
                    className={`reg-role-btn${form.role === r.value ? " active" : ""}`}>
                    <span className="reg-role-icon">{r.icon}</span>
                    <span className="reg-role-label">{r.label}</span>
                    <span className="reg-role-desc">{r.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="reg-divider" />

            <div className="reg-two-col">
              <div className="reg-field-group">
                <label className="reg-label">Username *</label>
                <input name="username" value={form.username} onChange={handleChange} placeholder="Enter username" className="reg-input" />
              </div>
              <div className="reg-field-group">
                <label className="reg-label">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Enter email" className="reg-input" />
              </div>
            </div>

            <div className="reg-two-col">
              <div className="reg-field-group">
                <label className="reg-label">Password *</label>
                <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" className="reg-input" />
              </div>
              <div className="reg-field-group">
                <label className="reg-label">Confirm Password *</label>
                <input name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Re-enter password" className="reg-input" />
              </div>
            </div>

            {error && <div className="reg-error">⚠️ {error}</div>}

            <button onClick={handleRegister} disabled={loading} className="reg-submit-btn">
              {loading ? "Please wait..." : "Register"}
            </button>

            <p className="reg-login-link">
              Already have an account? <Link to="/login" className="reg-link">Login here</Link>
            </p>
          </div>

        ) : (
          <div className="reg-success-card">
            <div className="reg-success-icon">✅</div>
            <h2 className="reg-success-title">Registration Successful!</h2>
            <p className="reg-success-msg">
              Account created for <strong>{form.username}</strong> as{" "}
              <strong>{ROLES.find((r) => r.value === form.role)?.label}</strong>.
              <br />You can now login with your credentials.
            </p>
            <Link to="/login" className="reg-go-login-btn">Go to Login</Link>
          </div>
        )}
      </div>

    </div>
  );
}