import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

// Pages
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import FamiliesPage from './pages/FamiliesPage';
import DistributionPage from './pages/DistributionPage';
import MerchantPage from './pages/MerchantPage';
import AccountingPage from './pages/AccountingPage';
import EmergencyPage from './pages/EmergencyPage';

// Layout
import Layout from './components/Layout';

function App() {
  // 🔥 Forcer l'affichage du Dashboard pour le développement
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // ← passage à true
  const [user, setUser] = useState({
    name: 'مدير النظام',
    role: 'admin'
  });

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser({
      name: username === 'admin' ? 'مدير النظام' : 'مستخدم',
      role: username === 'admin' ? 'admin' : 'user'
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({ name: '', role: '' });
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <Route path="*" element={<LoginPage onLogin={handleLogin} />} />
        ) : (
          <Route element={<Layout user={user} onLogout={handleLogout} />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/families" element={<FamiliesPage />} />
            <Route path="/distribution" element={<DistributionPage />} />
            <Route path="/merchant" element={<MerchantPage />} />
            <Route path="/accounting" element={<AccountingPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
}

export default App;