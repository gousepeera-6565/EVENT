import AuthService from "../services/authService";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/eventhublogo.jpg";

const ROLE_LABELS = { PLANNER: "Planner Portal", STAFF: "Staff Portal", CLIENT: "Client Portal" };

// Shared links visible to all roles
const SHARED_LINKS = [
  { label: "Completed", href: "/planner/completed-events" },
  { label: "Staff",     href: "/staff-directory" },
];

const NAV_LINKS = {
  PLANNER: [
    { label: "Dashboard",    href: "/planner/events" },
    { label: "Create Event", href: "/planner/create-event" },
    { label: "Add Resource", href: "/planner/add-resource" },
    { label: "Allocate",     href: "/planner/allocate" },
    ...SHARED_LINKS,
  ],
  STAFF: [
{ label: "My Event", href: "/staff/event-details/1" },
    ...SHARED_LINKS,
  ],
  CLIENT: [
 { label: "My Booking", href: "/client/booking-details/1" },
    ...SHARED_LINKS,
  ],
};

export default function Navbar() {
  const navigate = useNavigate();
  const role     = AuthService.getRole();
  const username = AuthService.getUsername();
  const links    = NAV_LINKS[role] || [];

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <span className="navbar-icon">
            <img src={logo} alt="EventHub Logo" className="navbar-logo-img" />
          </span>
          <span className="navbar-logo">EventHub</span>
          {role && <span className="navbar-role-tag">{ROLE_LABELS[role]}</span>}
        </div>

        <div className="navbar-links">
          {links.map((l) => (
          <Link key={l.label} to={l.href} className="navbar-link">{l.label}</Link>
          ))}
        </div>

        <div className="navbar-right">
          {username && <span className="navbar-username">👤 {username}</span>}
          <button onClick={handleLogout} className="navbar-logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  );
}