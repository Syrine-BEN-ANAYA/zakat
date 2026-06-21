import '../styles/TopBar.css';

function TopBar({ user, onLogout }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-ornament">✦</span>
        <h1>لجنة الزكاة – السويق</h1>
      </div>
      <div className="topbar-right">
        <div className="user-info">
          <span className="user-role">{user.role}</span>
          <span className="user-name">{user.name}</span>
        </div>
        <button onClick={onLogout} className="logout-btn">
          خروج
        </button>
      </div>
    </header>
  );
}

export default TopBar;