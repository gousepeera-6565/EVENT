// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import AuthService from "./components/services/authService";

// // Auth
// import LoginPage from "./components/auth/LoginPage";
// import RegistrationPage from "./components/auth/RegistrationPage";

// // Planner
// import CreateEventForm from "./components/planner/CreateEventForm";
// import AddResourceForm from "./components/planner/AddResourceForm";
// import ResourceAllocatePage from "./components/planner/ResourceAllocatePage";
// import ViewEventsPage from "./components/planner/ViewEventsPage";
// import CompletedEventsPage from "./components/planner/CompletedEventsPage";
// import StaffDirectoryPage from "./components/staff/StaffDirectoryPage";
// import AboutPage from "./components/pages/AboutPage";
// import FeedbackPage from "./components/pages/FeedbackPage";
// import ContactPage from "./components/pages/ContactPage";

// // Staff
// import StaffEventPage from "./components/staff/StaffEventPage";
// import UpdateSetupPage from "./components/staff/UpdateSetupPage";

// // Client
// import BookingDetailsPage from "./components/client/BookingDetailsPage";

// import "./App.css";

// // ── Protected Route wrapper ──
// function ProtectedRoute({ children, allowedRoles }) {
//   if (!AuthService.isLoggedIn()) return <Navigate to="/login" replace />;
//   const role = AuthService.getRole();
//   if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/login" replace />;
//   return children;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Default redirect */}
//         <Route path="/" element={<Navigate to="/login" replace />} />

//         {/* ── Auth (Member 8) ── */}
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegistrationPage />} />

//         {/* ── Planner (Member 9) ── */}
//         <Route
//           path="/planner/events"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER"]}>
//               <ViewEventsPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/planner/create-event"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER"]}>
//               <CreateEventForm />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/planner/add-resource"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER"]}>
//               <AddResourceForm />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/planner/completed-events"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
//               <CompletedEventsPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/planner/allocate"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER"]}>
//               <ResourceAllocatePage />
//             </ProtectedRoute>
//           }
//         />

//         {/* ── Staff (Member 10) ── */}
//         <Route
//           path="/staff/event-details/:eventId"
//           element={
//             <ProtectedRoute allowedRoles={["STAFF"]}>
//               <StaffEventPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/staff/update-setup/:eventId"
//           element={
//             <ProtectedRoute allowedRoles={["STAFF"]}>
//               <UpdateSetupPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* ── Client (Member 10) ── */}
//         <Route
//           path="/client/booking-details/:eventId"
//           element={
//             <ProtectedRoute allowedRoles={["CLIENT"]}>
//               <BookingDetailsPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* ── Shared Pages (all roles) ── */}
//         <Route
//           path="/staff-directory"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
//               <StaffDirectoryPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
//               <AboutPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/feedback"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
//               <FeedbackPage />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/contact"
//           element={
//             <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
//               <ContactPage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/login" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthService from "./components/services/authService";

// Auth
import LoginPage from "./components/auth/LoginPage";
import RegistrationPage from "./components/auth/RegistrationPage";

// Planner
import CreateEventForm from "./components/planner/CreateEventForm";
import AddResourceForm from "./components/planner/AddResourceForm";
import ResourceAllocatePage from "./components/planner/ResourceAllocatePage";
import ViewEventsPage from "./components/planner/ViewEventsPage";
import CompletedEventsPage from "./components/planner/CompletedEventsPage";
import StaffDirectoryPage from "./components/staff/StaffDirectoryPage";
import LandingPage from "./components/pages/LandingPage";
import AboutPage from "./components/pages/AboutPage";
import FeedbackPage from "./components/pages/FeedbackPage";
import ContactPage from "./components/pages/ContactPage";

// Staff
import StaffEventPage from "./components/staff/StaffEventPage";
import UpdateSetupPage from "./components/staff/UpdateSetupPage";

// Client
import BookingDetailsPage from "./components/client/BookingDetailsPage";

import "./App.css";

// ── Protected Route wrapper ──
function ProtectedRoute({ children, allowedRoles }) {
  if (!AuthService.isLoggedIn()) return <Navigate to="/login" replace />;
  const role = AuthService.getRole();
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/login" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default redirect */}
        <Route path="/" element={<LandingPage />} />

        {/* ── Auth (Member 8) ── */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* ── Planner (Member 9) ── */}
        <Route
          path="/planner/events"
          element={
            <ProtectedRoute allowedRoles={["PLANNER"]}>
              <ViewEventsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner/create-event"
          element={
            <ProtectedRoute allowedRoles={["PLANNER"]}>
              <CreateEventForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner/add-resource"
          element={
            <ProtectedRoute allowedRoles={["PLANNER"]}>
              <AddResourceForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner/completed-events"
          element={
            <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
              <CompletedEventsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/planner/allocate"
          element={
            <ProtectedRoute allowedRoles={["PLANNER"]}>
              <ResourceAllocatePage />
            </ProtectedRoute>
          }
        />

        {/* ── Staff (Member 10) ── */}
        <Route
          path="/staff/event-details/:eventId"
          element={
            <ProtectedRoute allowedRoles={["STAFF"]}>
              <StaffEventPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff/update-setup/:eventId"
          element={
            <ProtectedRoute allowedRoles={["STAFF"]}>
              <UpdateSetupPage />
            </ProtectedRoute>
          }
        />

        {/* ── Client (Member 10) ── */}
        <Route
          path="/client/booking-details/:eventId"
          element={
            <ProtectedRoute allowedRoles={["CLIENT"]}>
              <BookingDetailsPage />
            </ProtectedRoute>
          }
        />

        {/* ── Shared Pages (all roles) ── */}
        <Route
          path="/staff-directory"
          element={
            <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
              <StaffDirectoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback"
          element={
            <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
              <FeedbackPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute allowedRoles={["PLANNER", "STAFF", "CLIENT"]}>
              <ContactPage />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;