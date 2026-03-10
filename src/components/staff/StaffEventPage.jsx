import { useState, useEffect } from "react";
import HttpService from "../services/httpService";
import { getEventImage } from "../services/eventImageService";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import "./StaffEventPage.css";

const TYPE_ICON = { EQUIPMENT: "🔧", STAFF: "👤", VENUE: "🏛️" };

export default function StaffEventPage() {
  const eventId = 1; // TODO: replace with useParams()
  const [event, setEvent]     = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    HttpService.get(`/api/staff/event-details/${eventId}`)
      .then((res) => setEvent(res.data))
      .catch(() => setError("Could not load event details. Please try again."))
      .finally(() => setLoading(false));
  }, [eventId]);

  const formatDate = (dt) =>
    new Date(dt).toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  const formatTime = (dt) =>
    new Date(dt).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="sep-page">
      <Navbar />
      <main className="sep-main">

        <div className="sep-title-row">
          <p className="sep-breadcrumb">Staff &rarr; My Assignment</p>
          <h1 className="sep-page-title">Event Details</h1>
        </div>

        {loading && (
          <div className="sep-center-box">
            <p className="sep-loading-text">Loading please wait...</p>
          </div>
        )}

        {error && (
          <div className="sep-error-box">
            <span>⚠️</span><p>{error}</p>
          </div>
        )}

        {!loading && !error && event && (
          <div className="sep-grid">

            {/* Main event card */}
            <div className="sep-main-card">

              {/* Banner */}
              <div className="sep-banner">
                <img
                  src={getEventImage(event.title)}
                  alt={event.title}
                  className="sep-banner-img"
                />
                <div className="sep-banner-overlay" />
                <div className="sep-banner-content">
                  <h2 className="sep-event-title">{event.title}</h2>
                  <div className="sep-badges">
                    <span className={`sep-badge status-${event.status?.toLowerCase()}`}>
                      <span className="sep-dot" /> {event.status}
                    </span>
                    <span className={`sep-badge setup-${event.setupStatus?.toLowerCase().replace("_", "-")}`}>
                      <span className="sep-dot" /> Setup: {event.setupStatus?.replace("_", " ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="sep-card-body">
                <p className="sep-description">{event.description}</p>
                <div className="sep-info-grid">
                  <div className="sep-info-item">
                    <span className="sep-info-icon">📅</span>
                    <div>
                      <div className="sep-info-label">Date</div>
                      <div className="sep-info-value">{formatDate(event.dateTime)}</div>
                    </div>
                  </div>
                  <div className="sep-info-item">
                    <span className="sep-info-icon">🕐</span>
                    <div>
                      <div className="sep-info-label">Time</div>
                      <div className="sep-info-value">{formatTime(event.dateTime)}</div>
                    </div>
                  </div>
                  <div className="sep-info-item sep-full-col">
                    <span className="sep-info-icon">📍</span>
                    <div>
                      <div className="sep-info-label">Location</div>
                      <div className="sep-info-value">{event.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources card */}
            <div className="sep-resource-card">
              <div className="sep-resource-header">
                <h3 className="sep-section-title">Allocated Resources</h3>
                <span className="sep-count-pill">{event.resources?.length || 0}</span>
              </div>
              <div className="sep-resource-list">
                {event.resources?.map((r) => (
                  <div key={r.resourceId} className="sep-resource-item">
                    <span className="sep-resource-icon">{TYPE_ICON[r.type] || "📦"}</span>
                    <div className="sep-resource-info">
                      <div className="sep-resource-name">{r.name}</div>
                      <div className="sep-resource-type">{r.type}</div>
                    </div>
                    <div className="sep-resource-qty">
                      <span className="sep-qty-label">Qty</span>
                      <span className="sep-qty-value">{r.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <a href={`/staff/update-setup/${event.eventId}`} className="sep-update-btn">
                Update Setup Status
              </a>
            </div>

          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}