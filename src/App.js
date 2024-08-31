import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VolunteerInfoPage from "./components/VolunteerInfoPage";
import VolunteerRegistrationForm from "./components/VolunteerRegistrationForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VolunteerInfoPage />} />
        <Route path="/volunteer-registration" element={<VolunteerRegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
