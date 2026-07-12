import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import zakatLogo from '../assets/zakat-logo.png'; // ← ton image


function Sidebar() {
  const menuItems = [
    { path: '/', label: 'لوحة التحكم', icon: '◈' },
    { path: '/families', label: 'سجل الأسر', icon: '◈' },
    { path: '/distribution', label: 'التوزيع الذكي', icon: '◈' },
    { path: '/merchant', label: 'بوابة التاجر', icon: '◈' },
    { path: '/accounting', label: 'المحاسبة', icon: '◈' },
    { path: '/emergency', label: 'مساعدات عاجلة', icon: '◈' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">◈</div>
                <img src={zakatLogo} alt="ZAKAT" className="sidebar-logo" />

        <h2>نظام زكاة</h2>
        <p>الذكي</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <span>◈ ◈ ◈</span>
      </div>
    </aside>
  );
}

export default Sidebar;