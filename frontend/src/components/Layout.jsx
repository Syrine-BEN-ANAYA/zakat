import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import '../styles/Layout.css';

function Layout({ user, onLogout }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-area">
        <TopBar user={user} onLogout={onLogout} />
        <main className="content-area">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;