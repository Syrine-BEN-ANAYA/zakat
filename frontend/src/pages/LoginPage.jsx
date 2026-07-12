import { useState } from 'react'
import '../styles/LoginPage.css'
import zakatLogo from '../assets/zakat-logo.png'

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* ===== CARTE PRINCIPALE ===== */}
        <div className="login-card">
          <div className="login-header">
            <div className="logo-block">
              <img
                src={zakatLogo}
                alt="ZAKAT – لجنة الزكاة بولاية السويق"
                className="logo-image"
              />
              <div className="gold-divider"></div>
            </div>
            <p className="login-subtitle">تسجيل الدخول الآمن</p>
          </div>

          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">اسم المستخدم</label>
              <input
                type="text"
                id="username"
                placeholder="أدخل اسم المستخدم"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>
              <input
                type="password"
                id="password"
                placeholder="أدخل كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-login">
              تسجيل الدخول الآمن
            </button>
          </form>
        </div>

        {/* ===== PIED DE PAGE (description) ===== */}
        <div className="login-description">
          <div className="gold-line"></div>
          <p className="highlight">نظام الزكاة الذكي – لجنة مسقط</p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage