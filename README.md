# نظام الزكاة الذكي | Smart Zakat Management System

<div align="center">

**A unified digital platform for managing zakat committee operations — families, distributions, wallets, accounting, and emergency aid approvals.**

**منصة رقمية موحّدة لإدارة عمليات لجنة الزكاة — الأسر، التوزيع، المحافظ، المحاسبة، والمساعدات العاجلة.**

🔗 **[Live Demo](https://zakat-navy.vercel.app/)**

</div>

---

## 📖 Overview

Smart Zakat is a full Arabic (RTL) React-based ERP designed for zakat committees to digitize the entire beneficiary lifecycle — from family registration and priority scoring, to fund distribution, merchant wallet settlements, financial accounting, and emergency aid requiring multi-level approval.

---

## ✨ Features

### 🔐 Secure Login
Arabic RTL authentication screen with committee branding and secure credential entry.

### 📊 Executive Dashboard
- Real-time KPIs: registered families, total expenses, pending parcels, senior citizens
- Family growth trends (line chart), priority distribution (pie chart), expense breakdown by category (bar chart)
- Recent activity timeline and priority-level legend
- Printable reports

### 👨‍👩‍👧‍👦 Families Registry
- Full-text search by civil ID, name, or phone
- Priority filtering (Critical / Medium / Self-sufficient)
- Per-family financial details: individual share, dependents, net entitlement
- Record editing and history logs

### 📦 Distribution Management
Tracks and manages the disbursement of aid to registered families with priority-based views.

### 💳 Merchant Portal
- Digital wallet balance lookup per beneficiary family
- Invoice deduction and confirmation workflow
- Settlement summary (pending vs. paid)
- Recent invoice list with status tracking and Excel export

### 💰 Accounting & Expenses
- Consolidated view of bank accounts, cash treasury, and inventory value
- Inter-account transfers
- Expense recording by category (stationery, utilities, transport) with payment method and notes
- Physical inventory management (items, quantities, unit pricing)

### 🚨 Emergency Aid & Governance
- Emergency assistance requests with triple-approval workflow (Manager → Deputy → Member)
- User & role management (System Admin, Accountant, Merchant Center)
- Full audit trail / activity log with printable reports

---

## 🖥️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Recharts-22B5BF?style=for-the-badge&logo=recharts&logoColor=white" alt="Recharts" />
  <img src="https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

## 📂 Pages

| Page | File | Description |
|---|---|---|
| Login | `LoginPage.jsx` | Secure authentication screen |
| Dashboard | `DashboardPage.jsx` | Executive analytics & KPIs |
| Families | `FamiliesPage.jsx` | Beneficiary family registry |
| Distribution | `DistributionPage.jsx` | Aid distribution management |
| Accounting | `AccountingPage.jsx` | Accounts, transfers, expenses, inventory |
| Merchant | `MerchantPage.jsx` | Merchant wallet & invoice settlements |
| Emergency | `EmergencyPage.jsx` | Emergency aid, users & permissions, audit log |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd zakat-erp-system
npm install
```

### Available Scripts

```bash
npm start      # Run the app in development mode
npm run build  # Build for production
npm test       # Run tests
npm run lint   # Lint the source code
```

The app will be available at `http://localhost:3000`.

---

## 🌐 Demo

Explore the live version here: **[https://zakat-navy.vercel.app/](https://zakat-navy.vercel.app/)**

---

## 📝 License

This project is proprietary and intended for internal committee use unless otherwise specified.

---

<div align="center">

**نظام الزكاة الذكي — لجنة مسقط**

</div>
