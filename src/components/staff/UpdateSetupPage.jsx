import { useState } from "react";
import HttpService from "../services/httpService";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "./UpdateSetupPage.css";

const SETUP_OPTIONS = [
  { value: "NOT_STARTED", label: "Not Started", description: "Setup has not started yet.", icon: "⏳", cls: "not-started" },
  { value: "IN_PROGRESS", label: "In Progress", description: "Venue setup is ongoing.",   icon: "🔨", cls: "in-progress" },
  { value: "COMPLETED",   label: "Completed",   description: "Venue is ready.",           icon: "✅", cls: "completed"  },
];

export default function UpdateSetupPage() {
  const eventId   = 1; // TODO: replace with useParams()
  const eventTitle = "Annual College Fest 2025"; // TODO: fetch or pass via route state

  const [selected,   setSelected]   = useState(null);
  const [notes,      setNotes]      = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success,    setSuccess]    = useState(false);
  const [error,      setError]      = useState(null);

  const handleSubmit = async () => {
    if (!selected) return;
    setSubmitting(true);
    setError(null);
    try {
      await HttpService.put(`/api/staff/update-setup/${eventId}`, { setupStatus: selected, notes });
      setSuccess(true);
    } catch {
      setError("Failed to update. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="usp-page">
      <Navbar />
      <main className="usp-main">

        <a href={`/staff/event-details/${eventId}`} className="usp-back-link">
          &larr; Back to Event Details
        </a>

        <div className="usp-card">
          {!success ? (
            <>
              <div className="usp-card-top">
                <div className="usp-icon-circle">🏟️</div>
                <div>
                  <p className="usp-subtitle">Update Setup Status</p>
                  <h1 className="usp-title">{eventTitle}</h1>
                  <p className="usp-hint">Select the current setup stage for this event.</p>
                </div>
              </div>

              <div className="usp-divider" />

              <div className="usp-section">
                <label className="usp-section-label">Setup Stage *</label>
                <div className="usp-option-grid">
                  {SETUP_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setSelected(opt.value)}
                      className={`usp-option-btn ${opt.cls}${selected === opt.value ? " active" : ""}`}
                    >
                      <span className="usp-option-icon">{opt.icon}</span>
                      <div>
                        <div className="usp-option-label">{opt.label}</div>
                        <div className="usp-option-desc">{opt.description}</div>
                      </div>
                      {selected === opt.value && <span className="usp-checkmark">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="usp-section">
                <label className="usp-section-label">Notes (optional)</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any issues or comments about the setup..."
                  className="usp-textarea"
                  rows={4}
                />
              </div>

              {error && <div className="usp-error">⚠️ {error}</div>}

              <button
                onClick={handleSubmit}
                disabled={!selected || submitting}
                className={`usp-submit-btn${!selected || submitting ? " disabled" : ""}`}
              >
                {submitting ? "Please wait..." : "Submit Update"}
              </button>
            </>
          ) : (
            <div className="usp-success-box">
              <div className="usp-success-icon">✅</div>
              <h2 className="usp-success-title">Status Updated!</h2>
              <p className="usp-success-msg">
                Setup status for <strong>{eventTitle}</strong> has been marked as{" "}
                <strong>{SETUP_OPTIONS.find((o) => o.value === selected)?.label}</strong>.
              </p>
              <a href={`/staff/event-details/${eventId}`} className="usp-back-btn">
                &larr; Back to Event Details
              </a>
            </div>
          )}
        </div>

      </main>
      <Footer />
    </div>
  );
}