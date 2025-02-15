import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Index } from '../components';
import { MyProfile } from '../components/MyProfile';
import { Services } from '../components/Services';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';

export const MyRoutes = () => {
  return (
    <BrowserRouter>

      {/* Header and Navigation Bar */}
      {/* Add your navigation bar here if needed */}

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      {/* Add your footer here if needed */}

    </BrowserRouter>
  );
};
