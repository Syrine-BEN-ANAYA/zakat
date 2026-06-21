import '../styles/DashboardPage.css'

function DashboardPage() {
  const stats = [
    { label: 'الأسر المسجلة', value: '1,284', note: '+12 هذا الشهر' },
    { label: 'إجمالي المصروفات', value: '48.720 ر.ع', note: 'من سجل الأرشيف' },
    { label: 'طرود معلقة', value: '37', note: 'بانتظار الاستلام' },
    { label: 'كبار السن', value: '214', note: 'فوق 60 عاماً' },
    { label: 'حالات قصوى', value: '86', note: 'أشد احتياجاً' },
  ]

  const activities = [
    {
      action: 'صرف حقيبة مدرسية',
      details: 'أسرة سالم البلوشي',
      amount: '35.000 ر.ع',
      date: 'اليوم'
    },
    {
      action: 'خصم فاتورة من محفظة رقمية',
      details: 'مركز النور',
      amount: '18.500 ر.ع',
      date: 'أمس'
    },
    {
      action: 'إضافة أسرة جديدة',
      details: 'حالة اجتماعية: أرمل / أيتام',
      amount: '',
      date: '١٨ يونيو'
    }
  ]

  const priorities = [
    { level: 'قصوى', description: 'نصيب الفرد أقل من ٤٠ ر.ع', color: '#b33c3c' },
    { level: 'متوسطة', description: 'نصيب الفرد أقل من ٨٠ ر.ع', color: '#c49a2b' },
    { level: 'مكتفية', description: 'مراقبة دورية', color: '#2a7a3a' }
  ]

  return (
    <div className="dashboard-page">
      {/* En-tête de la page */}
      <header className="page-header">
        <div className="header-content">
          <div className="header-ornament">◈</div>
          <h1>لوحة التحكم التنفيذية</h1>
          <p className="header-subtitle">
            نظرة مباشرة على الأسر، المصروفات، الطرود، كبار السن، والحالات الأشد حاجة.
          </p>
        </div>
        <button className="btn-print">
          <span className="print-icon">◊</span> طباعة التقرير
        </button>
      </header>

      {/* Statistiques */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-note">{stat.note}</div>
              <div className="stat-border" />
            </div>
          ))}
        </div>
      </section>

      {/* Activités + priorités */}
      <section className="main-grid">
        <article className="activity-card">
          <div className="card-header">
            <h2>آخر النشاطات</h2>
            <span className="badge">اليوم</span>
          </div>
          <ul className="timeline">
            {activities.map((item, idx) => (
              <li key={idx}>
                <div className="timeline-marker">✦</div>
                <div className="timeline-content">
                  <div className="timeline-action">{item.action}</div>
                  <div className="timeline-details">
                    {item.details}
                    {item.amount && <span className="timeline-amount"> — {item.amount}</span>}
                  </div>
                </div>
                <div className="timeline-date">{item.date}</div>
              </li>
            ))}
          </ul>
        </article>

        <article className="priority-card">
          <div className="card-header">
            <h2>خريطة الأولوية</h2>
            <span className="badge muted">مساعدة عاجلة</span>
          </div>
          <div className="priority-list">
            {priorities.map((priority, idx) => (
              <div key={idx} className="priority-item">
                <span className="priority-swatch" style={{ backgroundColor: priority.color }} />
                <div className="priority-content">
                  <div className="priority-level">{priority.level}</div>
                  <div className="priority-description">{priority.description}</div>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  )
}

export default DashboardPage