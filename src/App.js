import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Video from './pages/Video';
import Friends from './pages/Friends';
import Shop from './pages/Shop';
import Notification from './pages/Notification';
import Profile from './pages/Profile';
import { AuthProvider, useAuth } from './config/AuthContext';

function AppRoutes() {
  const { isLogged } = useAuth();

  return (
    <Routes>
      {isLogged ? (
        <>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Friends" element={<Friends />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Navigate to="/Home" />} />
        </>
      ) : (
        <>
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </>
      )}
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
