import { useState } from "react";
import AuthService from "../services/authService";
import "./LoginPage.css";

export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setError(null);
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      setError("Please enter username and password.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await AuthService.login(form);
      window.location.href = AuthService.getDashboardPath();
    } catch (err) {
      setError("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      {/* ── Left Panel ── */}
      <div className="login-left">
        <div className="login-left-content">

          {/* Logo */}
          <div className="login-logo">
            <img src="/src/assets/eventhublogo.jpg" alt="logo" />
            <span className="login-logo-name">EventHub</span>
          </div>

          {/* Tagline quote */}
          <div className="login-quote-block">
            <span className="login-quote-mark">"</span>
            <p className="login-quote-text">
              A great event doesn't happen by chance — it happens by planning, coordination and the right team at every step.
            </p>
          </div>

          {/* What is EventHub */}
          <div className="login-about-block">
            <p className="login-about-title">What is EventHub?</p>
            <p className="login-about-desc">
              EventHub is a Event Management and Resource Allocation Managemeny System built to simplify how events are planned, staffed and managed.
              From booking venues to allocating resources and tracking event status everything in one place.
            </p>
          </div>

          {/* Divider */}
          <div className="login-divider" />

          {/* Roles */}
          <p className="login-roles-title">Who can log in?</p>
          <div className="login-role-list">
            {[
              { icon: "📋", role: "Planner",  desc: "Create events, add resources, manage allocations" },
              { icon: "🏟️", role: "Staff",    desc: "View assigned events and update setup status" },
              { icon: "👥", role: "Client",   desc: "Check booking details and event schedule" },
            ].map((r) => (
              <div key={r.role} className="login-role-item">
                <span className="login-role-icon">{r.icon}</span>
                <div>
                  <div className="login-role-title">{r.role}</div>
                  <div className="login-role-desc">{r.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="login-right">
        <div className="login-form-box">
          <div className="login-form-header">
            <h1 className="login-form-title">Login</h1>
            <p className="login-form-subtitle">Enter your credentials to continue</p>
          </div>

          <div className="login-field-group">
            <label className="login-label">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Enter username"
              className="login-input"
              autoComplete="username"
            />
          </div>

          <div className="login-field-group">
            <label className="login-label">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Enter password"
              className="login-input"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="login-error">
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="login-submit-btn"
          >
            {loading ? "Please wait..." : "Login"}
          </button>

          <p className="login-register-link">
            New user?{" "}
            <a href="/register" className="login-link">Register here</a>
          </p>
        </div>
      </div>

    </div>
  );
}