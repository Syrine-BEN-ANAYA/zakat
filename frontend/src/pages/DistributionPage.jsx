import { useState } from 'react'
import '../styles/FamiliesPage.css'

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
      priority: 'قصوى'
    },
    {
      id: '108774512',
      name: 'مريم الهنائية',
      idNumber: '108774512',
      share: '67.200',
      students: '1',
      net: '268.800',
      priority: 'متوسطة'
    },
    {
      id: '102315669',
      name: 'ناصر السعدي',
      idNumber: '102315669',
      share: '126.000',
      students: '0',
      net: '378.000',
      priority: 'مكتفية'
    }
  ]

  const filteredFamilies = filterPriority === 'all'
    ? families
    : families.filter(f => f.priority === filterPriority)

  const filteredBySearch = searchTerm
    ? filteredFamilies.filter(f =>
        f.name.includes(searchTerm) ||
        f.idNumber.includes(searchTerm)
      )
    : filteredFamilies

  return (
    <div className="families-container">
      {/* ===== EN-TÊTE ===== */}
      <header className="families-header">
        <div className="header-top">
          <div className="header-title">
            <span className="header-ornament">◈</span>
            <h1>سجل الأسر المستفيدة</h1>
          </div>
          <div className="header-actions">
            <button className="btn-secondary">◊ استيراد</button>
            <button className="btn-primary">✦ تسجيل أسرة</button>
          </div>
        </div>
        <p className="header-subtitle">بحث، تسجيل، تعديل، وطباعة بيانات الأسرة.</p>
      </header>

      {/* ===== CONTROLES ===== */}
      <section className="families-controls">
        <div className="search-box">
          <span className="search-icon">◈</span>
          <input
            type="text"
            placeholder="بحث شامل بالرقم المدني، الاسم، الهاتف…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
            {filteredBySearch.map((family) => (
              <tr key={family.id}>
                <td className="actions-col">
                  <button className="btn-link">تعديل</button>
                  <span className="separator">✦</span>
                  <button className="btn-link">سجل</button>
                </td>
                <td className="net-col">{family.net} ر.ع</td>
                <td>{family.share}</td>
                <td>{family.students}</td>
                <td>—</td>
                <td className="name-col">{family.name}</td>
                <td>{family.idNumber}</td>
                <td>
                  <span className={`priority-badge priority-${family.priority}`}>
                    {family.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ===== PIED DE TABLEAU ===== */}
        <div className="table-footer">
          <span className="footer-ornament">◈ ◈ ◈</span>
          <span className="table-count">إجمالي الأسر: {filteredBySearch.length}</span>
          <span className="footer-ornament">◈ ◈ ◈</span>
        </div>
      </section>
    </div>
  )
}

export default FamiliesPage