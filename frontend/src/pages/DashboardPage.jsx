import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/DashboardPage.css';

function DashboardPage() {
  // Données
  const growthData = [
    { month: 'يناير', families: 1050, seniors: 180, critical: 65 },
    { month: 'فبراير', families: 1095, seniors: 195, critical: 72 },
    { month: 'مارس', families: 1150, seniors: 205, critical: 79 },
    { month: 'أبريل', families: 1205, seniors: 212, critical: 82 },
    { month: 'مايو', families: 1250, seniors: 210, critical: 84 },
    { month: 'يونيو', families: 1284, seniors: 214, critical: 86 },
  ];

  const priorityData = [
    { name: 'حالات قصوى', value: 86, color: '#b33c3c' },
    { name: 'متوسطة', value: 342, color: '#c49a2b' },
    { name: 'مكتفية', value: 856, color: '#2a7a3a' },
  ];

  const expensesData = [
    { category: 'تعليم', amount: 15200 },
    { category: 'صحة', amount: 12800 },
    { category: 'غذاء', amount: 14300 },
    { category: 'سكن', amount: 5600 },
    { category: 'ملابس', amount: 820 },
  ];

  const kpis = [
    { label: 'الأسر المسجلة', value: '1,284', note: '+12 هذا الشهر' },
    { label: 'إجمالي المصروفات', value: '48,720', note: 'من سجل الأرشيف' },
    { label: 'طرود معلقة', value: '37', note: 'بانتظار الاستلام' },
    { label: 'كبار السن', value: '214', note: 'فوق 60 عاماً' },
  ];

  const timeline = [
    { action: 'صرف حقيبة مدرسية', details: 'أسرة سالم البلوشي', amount: '35.000 ر.ع', date: 'اليوم' },
    { action: 'خصم فاتورة من محفظة رقمية', details: 'مركز النور', amount: '18.500 ر.ع', date: 'أمس' },
    { action: 'إضافة أسرة جديدة', details: 'حالة اجتماعية: أرمل / أيتام', amount: '', date: '١٨ يونيو' }
  ];

  const priorities = [
    { level: 'قصوى', description: 'نصيب الفرد أقل من ٤٠ ر.ع', color: '#b33c3c' },
    { level: 'متوسطة', description: 'نصيب الفرد أقل من ٨٠ ر.ع', color: '#c49a2b' },
    { level: 'مكتفية', description: 'مراقبة دورية', color: '#2a7a3a' }
  ];

  return (
    <div className="dashboard-page">
      {/* ===== EN-TÊTE DE LA PAGE ===== */}
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

      {/* ===== STATISTIQUES ===== */}
      <section className="stats-section">
        <div className="stats-grid">
          {kpis.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-note">{stat.note}</div>
              <div className="stat-border" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== CHARTS ROW 1 ===== */}
      <div className="charts-grid">
        {/* Line Chart */}
        <article className="chart-card">
          <div className="card-header">
            <h2>تطور الأسر المسجلة</h2>
            <span className="badge">آخر 6 أشهر</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
              <XAxis dataKey="month" stroke="#5a6a5a" style={{ fontSize: '12px' }} />
              <YAxis stroke="#5a6a5a" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0d3b1e', border: 'none', borderRadius: '8px', color: '#f7f0e0' }} />
              <Legend />
              <Line type="monotone" dataKey="families" stroke="#1a6b3a" name="الأسر" strokeWidth={3} dot={{ r: 4, fill: '#1a6b3a' }} />
              <Line type="monotone" dataKey="seniors" stroke="#d4af37" name="كبار السن" strokeWidth={3} dot={{ r: 4, fill: '#d4af37' }} />
              <Line type="monotone" dataKey="critical" stroke="#b33c3c" name="حالات قصوى" strokeWidth={3} dot={{ r: 4, fill: '#b33c3c' }} />
            </LineChart>
          </ResponsiveContainer>
        </article>

        {/* Pie Chart */}
        <article className="chart-card">
          <div className="card-header">
            <h2>خريطة الأولويات</h2>
            <span className="badge muted">توزيع الحالات</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={priorityData} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={100} fill="#d4af37" dataKey="value">
                {priorityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value} />
            </PieChart>
          </ResponsiveContainer>
        </article>
      </div>

      {/* ===== CHARTS ROW 2 ===== */}
      <div className="main-grid">
        {/* Bar Chart */}
        <article className="chart-card">
          <div className="card-header">
            <h2>توزيع المصروفات</h2>
            <span className="badge">حسب الفئة</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={expensesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ede8dc" />
              <XAxis dataKey="category" stroke="#5a6a5a" style={{ fontSize: '12px' }} />
              <YAxis stroke="#5a6a5a" style={{ fontSize: '12px' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0d3b1e', border: 'none', borderRadius: '8px', color: '#f7f0e0' }} />
              <Bar dataKey="amount" fill="#1a6b3a" name="المبلغ (ر.ع)" />
            </BarChart>
          </ResponsiveContainer>
        </article>

        {/* Timeline + Priority Grid */}
        <div className="side-content">
          {/* Timeline */}
          <article className="activity-card">
            <div className="card-header">
              <h2>آخر النشاطات</h2>
              <span className="badge">اليوم</span>
            </div>
            <ul className="timeline">
              {timeline.map((item, idx) => (
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

          {/* Priority */}
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
        </div>
      </div>

      {/* ===== FOOTER STATS ===== */}
      <div className="footer-stats">
        <div className="footer-stat-item">
          <div className="footer-stat-label">معدل الرضا</div>
          <div className="footer-stat-value" style={{ color: '#2a8a4a' }}>94%</div>
        </div>
        <div className="footer-stat-item">
          <div className="footer-stat-label">الكفاءة الإدارية</div>
          <div className="footer-stat-value" style={{ color: '#1a6b3a' }}>87%</div>
        </div>
        <div className="footer-stat-item">
          <div className="footer-stat-label">الحالات المعالجة</div>
          <div className="footer-stat-value" style={{ color: '#0d3b1e' }}>1,284</div>
        </div>
        <div className="footer-stat-item">
          <div className="footer-stat-label">متوسط الاستجابة</div>
          <div className="footer-stat-value" style={{ color: '#d4af37' }}>2.3h</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;