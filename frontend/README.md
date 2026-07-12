Moeen Al-Zaki Intelligent System V12.0 – Technical Documentation
Enterprise Resource Planning (ERP) Frontend for Zakat Social Aid Management
1. System Overview
The Moeen Al-Zaki V12.0 is a complete frontend ERP solution designed for Lajnat Al-Zakat (Wilayat Al-Suwaiq). It provides a full-featured, RTL‑compliant interface for managing social aid distribution, family registration, emergency assistance, merchant payments, accounting, and intelligent distribution workflows. The system is built with React and uses mock data for demonstration, but it is engineered for seamless integration with any backend (Google Apps Script, REST API, Firebase, etc.).

2. File Structure & Pages
The frontend consists of 7 main pages, each implemented as a functional React component with its own CSS module.

Page	File Name	Purpose
Login	LoginPage.jsx + LoginPage.css	Secure authentication with role‑based access (8 roles), session timeout display (24h), and responsive RTL layout.
Dashboard	DashboardPage.jsx + DashboardPage.css	Executive overview with 5 KPI cards, recent activity timeline, priority‑coded alerts, and real‑time mock metrics (families, total spending, pending parcels, elderly, urgent cases).
Family Registry	FamiliesPage.jsx + FamiliesPage.css	Complete table of beneficiary families with search, priority filtering, inline editing, and import/export actions. Columns: ID, representative name, student count, per‑person share, net total, priority level, and action buttons.
Intelligent Distribution	DistributionPage.jsx + DistributionPage.css	Automated distribution engine supporting three programmes (school scholarships, food baskets, bank transfers). Includes an interactive delivery station, parcel tracking, and delivery status management.
Merchant Portal	MerchantPage.jsx + MerchantPage.css	Wallet balance consultation, invoice processing, transaction history, debit confirmation, and Excel export of merchant invoices.
Accounting	AccountingPage.jsx + AccountingPage.css	Multi‑account dashboard (4 main accounts: bank, cash, stock value, total assets), inter‑account transfers, expense recording, stock management, and document preview.
Emergency Aid	EmergencyPage.jsx + EmergencyPage.css	Emergency request system with a 3‑level approval workflow, user permission management, and a complete audit trail with alerts.
3. Design System & UI Standards
3.1 Color Palette
Primary (Actions): #378ADD (blue)

Success (Low priority, positive status): #639922 (green)

Warning (Medium priority, attention): #BA7517 (amber)

Danger (High priority, critical): #E24B4A (red)

Neutral (Text & background): #999, #666, #f9f9f9

3.2 Typography
Headings: 24–28px / 700 weight

Subheadings: 16–18px / 600 weight

Body: 13–14px / 400 weight

Direction: RTL (Right‑to‑Left) – fully localised for Arabic.

3.3 Spacing & Layout
Padding: 1rem, 1.5rem, 2rem

Gaps: 0.75rem, 1rem, 1.5rem, 2rem

Border Radius: 6px (small), 8px (medium), 12px (cards)

All components are fully responsive with breakpoints at 1024px, 768px, and <768px.

3.4 Component Architecture
Functional components with useState for local state management.

No external state libraries – mock data is embedded in each component.

CSS is scoped per page (no global styles), ensuring maintainability.

All layouts are built with CSS Flexbox/Grid and are ARIA‑friendly.

4. Data Models (Mock Structures)
The system uses the following representative data structures:

jsx
// KPI Stat
const stat = {
  label: 'Families',       // Arabic or English label
  value: '1,284',          // Formatted number
  note: '+12 this month',  // Trend indicator
  color: 'blue'            // semantic colour class
};

// Family Record
const family = {
  id: '104568923',
  name: 'سالم البلوشي',
  priority: 'قصوى',        // High
  students: 3,
  share: '32.400',         // per person
  total: '97.200',
  // ... additional fields
};
All pages use static mock data to illustrate functionality; they are designed to be easily replaced with real API calls.

5. Routing & Integration
The application is built for React Router v6. A sample App.jsx route configuration is provided:

jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
// ... other imports

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/families" element={<FamiliesPage />} />
        <Route path="/distribution" element={<DistributionPage />} />
        <Route path="/merchant" element={<MerchantPage />} />
        <Route path="/accounting" element={<AccountingPage />} />
        <Route path="/emergency" element={<EmergencyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
6. Backend Integration Roadmap
The frontend is backend‑agnostic. It can be connected to:

Google Apps Script (via fetch to a deployed web app)

RESTful API (Node.js, PHP, Python, etc.)

Firebase or any BaaS

Recommended steps for integration:

Replace mock data with useEffect and fetch() calls to API endpoints.

Implement authentication using JWT or session cookies.

Add form validation and error handling.

Use environment variables for API base URLs.

7. Deployment & Build
Build Tool: Vite (or Create React App – both supported)

Production Build: npm run build generates optimised static files.

Deployment: Can be deployed to Netlify, Vercel, GitHub Pages, or any static hosting.

8. License & Use
This frontend is provided as a demonstration and base for the Lajnat Al-Zakat internal ERP. All design assets and code are proprietary but can be adapted for non‑commercial use within the Zakat committee.