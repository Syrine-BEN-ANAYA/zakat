import '../styles/AccountingPage.css'
import { useState } from 'react'

function AccountingPage() {
  const [transferAmount, setTransferAmount] = useState('1,200')
  const [expenseCategory, setExpenseCategory] = useState('stationary')

  const accounts = [
    { name: 'الحسابات البنكية', amount: '126,420', icon: '◈' },
    { name: 'الخزينة النقدية', amount: '8,940', icon: '◊' },
    { name: 'قيمة المخزون', amount: '22,300', icon: '✦' },
    { name: 'إجمالي الأصول', amount: '157,660', icon: '◈' }
  ]

  const inventory = [
    { id: 1, name: 'سلة غذائية', quantity: '420', unit: 'وحدة', price: '6.500' },
    { id: 2, name: 'بطاقة شراء', quantity: '180', unit: 'قسيمة', price: '10.000' }
  ]

  return (
    <div className="accounting-container">
      {/* ===== EN-TÊTE ===== */}
      <header className="accounting-header">
        <div className="header-title">
          <span className="header-ornament">◈</span>
          <h1>المحاسبة الشاملة والمصاريف</h1>
        </div>
        <p className="header-subtitle">حسابات بنكية، خزينة، مخزون، دفتر أستاذ، وسندات صرف في واجهة واحدة.</p>
      </header>

      {/* ===== COMPTES ===== */}
      <section className="accounts-section">
        <div className="accounts-grid">
          {accounts.map((account, idx) => (
            <div key={idx} className="account-card">
              <div className="account-icon">{account.icon}</div>
              <div className="account-name">{account.name}</div>
              <div className="account-amount">{account.amount} ر.ع</div>
              <div className="account-border" />
            </div>
          ))}
        </div>
      </section>

      {/* ===== OPÉRATIONS ===== */}
      <div className="operations-grid">
        {/* ===== TRANSFERTS ===== */}
        <section className="transfers-section">
          <div className="card-header">
            <h2>تحويل بين الحسابات</h2>
            <span className="badge">نشط</span>
          </div>
          <div className="transfer-form">
            <div className="form-group">
              <label>من حساب</label>
              <select className="select-field">
                <option>بنك مسقط</option>
                <option>بنك الخليج</option>
              </select>
            </div>

            <div className="form-group">
              <label>إلى حساب</label>
              <select className="select-field">
                <option>الخزينة النقدية</option>
                <option>المخزون</option>
              </select>
            </div>

            <div className="form-group">
              <label>المبلغ</label>
              <input
                type="text"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
                className="input-field"
              />
            </div>

            <button className="btn-transfer">
              <span className="btn-icon">✦</span> تنفيذ التحويل
            </button>
          </div>
        </section>

        {/* ===== DÉPENSES ===== */}
        <section className="expenses-section">
          <div className="card-header">
            <h2>تسجيل مصروف</h2>
            <span className="badge muted">جديد</span>
          </div>
          <div className="expense-form">
            <div className="form-group">
              <label>الفئة</label>
              <select
                value={expenseCategory}
                onChange={(e) => setExpenseCategory(e.target.value)}
                className="select-field"
              >
                <option value="stationary">قرطاسية</option>
                <option value="utilities">مرافق</option>
                <option value="transport">نقل</option>
              </select>
            </div>

            <div className="form-group">
              <label>طريقة الصرف</label>
              <select className="select-field">
                <option>نقدي</option>
                <option>تحويل بنكي</option>
              </select>
            </div>

            <div className="form-group">
              <label>ملاحظات</label>
              <textarea
                placeholder="مع إيصال مشتريات"
                className="textarea-field"
              ></textarea>
            </div>

            <button className="btn-preview">
              <span className="btn-icon">◊</span> معاينة سند الصرف
            </button>
          </div>
        </section>
      </div>

      {/* ===== INVENTAIRE ===== */}
      <section className="inventory-section">
        <div className="inventory-header">
          <h2>المخزون العيني</h2>
          <button className="btn-add">
            <span className="btn-icon">✦</span> إضافة صنف
          </button>
        </div>

        <div className="inventory-items">
          {inventory.map((item) => (
            <article key={item.id} className="inventory-item">
              <div className="item-info">
                <div className="item-name">{item.name}</div>
                <div className="item-details">
                  <span>{item.quantity} {item.unit}</span>
                  <span className="separator">✦</span>
                  <span>{item.price} ر.ع/{item.unit}</span>
                </div>
              </div>
              <button className="btn-edit">تعديل</button>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PAS DE FOOTER LOCAL ===== */}
    </div>
  )
}

export default AccountingPage