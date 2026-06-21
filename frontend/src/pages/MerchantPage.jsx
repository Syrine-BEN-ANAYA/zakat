
import '../styles/MerchantPage.css'

function MerchantPage() {
  

  const walletBalance = {
    amount: '72.500',
    family: 'سالم البلوشي',
    expiry: '30 يونيو'
  }

  const settlements = {
    pending: '6,420',
    paid: '18,960'
  }

  const invoices = [
    {
      id: 1,
      merchant: 'مركز النور',
      amount: '18.500 ر.ع',
      status: 'معلقة',
      isPending: true
    },
    {
      id: 2,
      merchant: 'سوق البركة',
      amount: '42.000 ر.ع',
      status: 'مسددة',
      isPending: false
    }
  ]

  return (
    <div className="merchant-container">
      {/* ===== EN-TÊTE ===== */}
      <header className="merchant-header">
        <div className="header-title">
          <span className="header-ornament">◈</span>
          <h1>بوابة التاجر وتسويات الفواتير</h1>
        </div>
        <p className="header-subtitle">استعلام رصيد المحفظة، خصم الفاتورة، ومعالجة فواتير التجار المعلقة.</p>
      </header>

      {/* ===== GRILLE PRINCIPALE ===== */}
      <div className="merchant-grid">
        {/* ===== PORTEFEUILLE ===== */}
        <section className="wallet-section">
          <div className="wallet-card">
            <div className="card-header">
              <h2>رصيد المحفظة المتاح</h2>
              <span className="badge">نشط</span>
            </div>
            <div className="wallet-amount">{walletBalance.amount} ر.ع</div>
            <div className="wallet-details">
              <p><span className="detail-label">صالحة حتى</span> <strong>{walletBalance.expiry}</strong></p>
              <p><span className="detail-label">المستفيد</span> <strong>{walletBalance.family}</strong></p>
            </div>
            <button className="btn-confirm">
              <span className="btn-icon">✦</span> تأكيد الخصم
            </button>
          </div>
        </section>

        {/* ===== RÉCAPITULATIF DES RÈGLEMENTS ===== */}
        <section className="settlements-section">
          <div className="settlement-cards">
            <div className="settlement-card pending">
              <div className="settlement-label">مبالغ معلقة</div>
              <div className="settlement-amount">{settlements.pending} ر.ع</div>
              <div className="settlement-border" />
            </div>
            <div className="settlement-card paid">
              <div className="settlement-label">مبالغ مسددة</div>
              <div className="settlement-amount">{settlements.paid} ر.ع</div>
              <div className="settlement-border" />
            </div>
          </div>
        </section>
      </div>

      {/* ===== LISTE DES FACTURES ===== */}
      <section className="invoices-section">
        <div className="invoices-header">
          <h2>الفواتير الأخيرة</h2>
          <button className="btn-export">
            <span className="export-icon">◊</span> استخراج Excel
          </button>
        </div>

        <div className="invoices-list">
          {invoices.map((invoice) => (
            <article key={invoice.id} className={`invoice-item ${invoice.isPending ? 'pending' : 'paid'}`}>
              <div className="invoice-content">
                <div className="invoice-merchant">{invoice.merchant}</div>
                <div className="invoice-amount">{invoice.amount}</div>
              </div>
              <div className={`invoice-status status-${invoice.status}`}>
                {invoice.status}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== PAS DE FOOTER LOCAL – le footer global du layout s'affiche ===== */}
    </div>
  )
}

export default MerchantPage