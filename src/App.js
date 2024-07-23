// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Dashboard from './pages/DashboadPage';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Callback from './pages/CallbackPage'

function App() {
  return (
    <ChakraProvider>
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}
              <Route path="/auth/discord/callback" element={<Callback />} />
            </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;