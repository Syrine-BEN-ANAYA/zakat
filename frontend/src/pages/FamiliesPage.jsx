import '../styles/FamiliesPage.css'
import { useState } from 'react'

function FamiliesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPriority, setFilterPriority] = useState('all')

  const families = [
    {
      id: '104568923',
      name: 'سالم البلوشي',
      idNumber: '104568923',
      share: '32.400',
      students: '3',
      net: '194.400',
      actions: 'تعديل · سجل',
      priority: 'قصوى'
    },
    {
      id: '108774512',
      name: 'مريم الهنائية',
      idNumber: '108774512',
      share: '67.200',
      students: '1',
      net: '268.800',
      actions: 'تعديل · سجل',
      priority: 'متوسطة'
    },
    {
      id: '102315669',
      name: 'ناصر السعدي',
      idNumber: '102315669',
      share: '126.000',
      students: '0',
      net: '378.000',
      actions: 'تعديل · سجل',
      priority: 'مكتفية'
    }
  ]

  return (
    <div className="families-container">
      {/* ===== EN-TÊTE DE PAGE (titre et actions) ===== */}
      <div className="page-header">
        <div className="header-content">
          <div className="header-ornament">◈</div>
          <h1>سجل الأسر المستفيدة</h1>
          <p className="header-subtitle">بحث، تسجيل، تعديل، وطباعة بيانات الأسرة.</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">استيراد</button>
          <button className="btn-primary">تسجيل أسرة</button>
        </div>
      </div>

      {/* ===== CONTROLES (recherche + filtres) ===== */}
      <section className="families-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="بحث شامل بالرقم المدني، الاسم، الهاتف…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">◈</span>
        </div>

        <div className="filter-tabs">
          <button
            className={`filter-tab ${filterPriority === 'all' ? 'active' : ''}`}
            onClick={() => setFilterPriority('all')}
          >
            الكل
          </button>
          <button
            className={`filter-tab priority-red ${filterPriority === 'قصوى' ? 'active' : ''}`}
            onClick={() => setFilterPriority('قصوى')}
          >
            قصوى
          </button>
          <button
            className={`filter-tab priority-amber ${filterPriority === 'متوسطة' ? 'active' : ''}`}
            onClick={() => setFilterPriority('متوسطة')}
          >
            متوسطة
          </button>
          <button
            className={`filter-tab priority-green ${filterPriority === 'مكتفية' ? 'active' : ''}`}
            onClick={() => setFilterPriority('مكتفية')}
          >
            مكتفية
          </button>
        </div>
      </section>

      {/* ===== TABLEAU ===== */}
      <section className="families-table-wrapper">
        <table className="families-table">
          <thead>
            <tr>
              <th>الإجراءات</th>
              <th>الصافي</th>
              <th>نصيب الفرد</th>
              <th>الطلاب</th>
              <th>الاستحقاق</th>
              <th>رب الأسرة</th>
              <th>الرقم المدني</th>
              <th>الأولوية</th>
            </tr>
          </thead>
          <tbody>
            {families.map((family) => (
              <tr key={family.id} className={`priority-${family.priority.toLowerCase()}`}>
                <td className="actions-col">
                  <button className="btn-link">تعديل</button>
                  <span className="separator">·</span>
                  <button className="btn-link">سجل</button>
                </td>
                <td>{family.net} ر.ع</td>
                <td>{family.share}</td>
                <td>{family.students}</td>
                <td>-</td>
                <td className="name-col">{family.name}</td>
                <td>{family.idNumber}</td>
                <td>
                  <span className={`priority-badge priority-${family.priority.toLowerCase()}`}>
                    {family.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default FamiliesPage