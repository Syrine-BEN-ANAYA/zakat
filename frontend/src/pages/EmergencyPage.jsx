import { useState } from 'react'
import '../styles/EmergencyPage.css'

function EmergencyPage() {
  const [activeTab, setActiveTab] = useState('emergency')

  const users = [
    {
      id: 1,
      username: 'admin',
      role: 'مدير النظام',
      status: 'نشط'
    },
    {
      id: 2,
      username: 'accountant',
      role: 'المحاسب',
      status: 'نشط'
    },
    {
      id: 3,
      username: 'merchant',
      role: 'مركز تجاري',
      status: 'نشط'
    }
  ]

  const auditLog = [
    {
      id: 1,
      action: 'تسجيل دخول',
      user: 'admin',
      time: 'قبل 5 دقائق'
    },
    {
      id: 2,
      action: 'تنبيه: عقد إيجار منتهي',
      family: 'أسرة 104568923',
      time: 'أمس'
    },
    {
      id: 3,
      action: 'تحديث بيانات معال تجاوز 18 سنة',
      time: '18 يونيو'
    }
  ]

  return (
    <div className="emergency-container">
      {/* ===== EN-TÊTE ===== */}
      <header className="emergency-header">
        <div className="header-title">
          <span className="header-ornament">◈</span>
          <h1>المساعدات العاجلة، الصلاحيات، وسجل التدقيق</h1>
        </div>
        <p className="header-subtitle">لوحات Frontend لإدارة المصادقات الثلاثية، المستخدمين، والتنبيهات التلقائية.</p>
      </header>

      {/* ===== TABS ===== */}
      <div className="tabs-navigation">
        <button
          className={`tab-btn ${activeTab === 'emergency' ? 'active' : ''}`}
          onClick={() => setActiveTab('emergency')}
        >
          ✦ طلب مساعدة عاجلة
        </button>
        <button
          className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          ✦ الصلاحيات والمستخدمون
        </button>
        <button
          className={`tab-btn ${activeTab === 'audit' ? 'active' : ''}`}
          onClick={() => setActiveTab('audit')}
        >
          ✦ سجل التدقيق
        </button>
      </div>

      {/* ===== TAB CONTENT ===== */}
      <div className="tab-content-wrapper">
        {/* Emergency Tab */}
        {activeTab === 'emergency' && (
          <section className="tab-content">
            <div className="emergency-request">
              <div className="request-header">
                <span className="request-icon">◈</span>
                <span className="request-type">فك كربة</span>
                <span className="request-amount">250.000 ر.ع</span>
              </div>
              <div className="request-status">
                <span className="status-badge status-pending">بانتظار المصادقة الثلاثية</span>
              </div>
            </div>

            <div className="approvals-section">
              <h3>المصادقات المطلوبة</h3>
              <div className="approvals-grid">
                <div className="approval-card approved">
                  <div className="approval-role">المدير</div>
                  <span className="approval-icon">✓</span>
                </div>
                <div className="approval-card pending">
                  <div className="approval-role">النائب</div>
                  <span className="approval-icon">◈</span>
                </div>
                <div className="approval-card pending">
                  <div className="approval-role">العضو</div>
                  <span className="approval-icon">◈</span>
                </div>
              </div>
            </div>

            <button className="btn-execute">
              <span className="btn-icon">✦</span> صرف المساعدة
            </button>
          </section>
        )}

        {/* Users Tab */}
        {activeTab === 'users' && (
          <section className="tab-content">
            <div className="users-list">
              {users.map((user) => (
                <article key={user.id} className="user-item">
                  <div className="user-info">
                    <div className="user-name">
                      <span className="username">{user.username}</span>
                      <span className="separator">✦</span>
                      <span className="role">{user.role}</span>
                    </div>
                    <div className="user-status">
                      <span className={`status-badge status-${user.status}`}>
                        {user.status}
                      </span>
                    </div>
                  </div>
                  <button className="btn-approve">اعتماد مستخدم</button>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Audit Log Tab */}
        {activeTab === 'audit' && (
          <section className="tab-content">
            <div className="audit-header">
              <h3>سجل التدقيق والتنبيهات</h3>
              <button className="btn-print">
                <span className="print-icon">◊</span> طباعة التقرير
              </button>
            </div>

            <div className="audit-timeline">
              {auditLog.map((log) => (
                <article key={log.id} className="audit-item">
                  <div className="audit-marker">✦</div>
                  <div className="audit-content">
                    <div className="audit-action">{log.action}</div>
                    <div className="audit-details">
                      {log.user && <span>المستخدم: {log.user}</span>}
                      {log.family && <span>{log.family}</span>}
                    </div>
                  </div>
                  <div className="audit-time">{log.time}</div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
      {/* ===== FIN DU CONTENU – PAS DE FOOTER LOCAL ===== */}
    </div>
  )
}

export default EmergencyPage