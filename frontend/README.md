# نظام مُعين الذكي V12.0 - Structure des fichiers

## 📋 Vue d'ensemble
Ceci est une implémentation complète d'une interface ERP Frontend pour la gestion des aides sociales de la Zakat. Le système se compose de 7 pages avec une interface complète RTL en arabe.

## 📁 Structure des fichiers

### 1. Page de Connexion
**Fichiers:** 
- `LoginPage.jsx` - Composant React
- `LoginPage.css` - Feuille de style

**Fonctionnalités:**
- Authentification sécurisée
- Affichage du timeout de session (24h)
- Support des rôles multiples (8 rôles)
- Design responsive et RTL

---

### 2. Tableau de Bord (Dashboard)
**Fichiers:**
- `DashboardPage.jsx` - Composant React
- `DashboardPage.css` - Feuille de style

**Fonctionnalités:**
- 5 cartes de statistiques avec indicateurs visuels
- Timeline des activités récentes
- Carte des priorités avec code couleur
- Données en temps réel simulées

**Métriques affichées:**
- Nombre de familles (1,284)
- Total des dépenses (48.720 ر.ع)
- Colis en attente (37)
- Personnes âgées (214)
- Cas urgents (86)

---

### 3. Registre des Familles
**Fichiers:**
- `FamiliesPage.jsx` - Composant React
- `FamiliesPage.css` - Feuille de style

**Fonctionnalités:**
- Tableau complet des familles bénéficiaires
- Recherche et filtrage par priorité
- Actions d'édition et consultation
- Code couleur pour les niveaux de priorité
- Boutons d'import et d'enregistrement

**Colonnes du tableau:**
- Numéro d'identité
- Nom du représentant
- Nombre d'étudiants
- Part par personne
- Total net
- Niveau de priorité
- Actions

---

### 4. Distribution Intelligente
**Fichiers:**
- `DistributionPage.jsx` - Composant React
- `DistributionPage.css` - Feuille de style

**Fonctionnalités:**
- Moteur de distribution automatique
- Sélection des programmes (bourses scolaires, paniers alimentaires, virements)
- Station de livraison interactive
- Suivi des colis en attente
- Statuts de livraison multiples

**Programmes disponibles:**
- Bourses scolaires (35.000 ر.ع)
- Paniers alimentaires (50.000 ر.ع)
- Virements bancaires (flexible)

---

### 5. Portail Marchand
**Fichiers:**
- `MerchantPage.jsx` - Composant React
- `MerchantPage.css` - Feuille de style

**Fonctionnalités:**
- Consultation du solde des portefeuilles
- Traitement des factures marchands
- Historique des transactions
- Confirmation de débits
- Export Excel des factures

**Sections:**
- Portefeuille avec solde et date d'expiration
- Résumé des règlements (en attente/payés)
- Liste complète des factures

---

### 6. Comptabilité
**Fichiers:**
- `AccountingPage.jsx` - Composant React
- `AccountingPage.css` - Feuille de style

**Fonctionnalités:**
- Dashboard des comptes (4 comptes principaux)
- Transferts entre comptes
- Enregistrement des dépenses
- Gestion du stock
- Prévisualisation des documents

**Comptes gérés:**
- Comptes bancaires (126,420 ر.ع)
- Trésorerie (8,940 ر.ع)
- Valeur du stock (22,300 ر.ع)
- Total actifs (157,660 ر.ع)

---

### 7. Aides d'Urgence
**Fichiers:**
- `EmergencyPage.jsx` - Composant React
- `EmergencyPage.css` - Feuille de style

**Fonctionnalités:**
- Système de requêtes d'aide d'urgence
- Approbations multiples (3 niveaux)
- Gestion des utilisateurs
- Audit trail complet
- Tabs pour navigation entre sections

**Sections:**
1. Demandes d'aide d'urgence (250.000 ر.ع max)
2. Permissions et utilisateurs (3 rôles disponibles)
3. Journal d'audit et alertes

---

## 🎨 Design System

### Couleurs Sémantiques
- **Primaire:** #378ADD (bleu) - Actions principales
- **Succès:** #639922 (vert) - Statut positif, priorité basse
- **Alerte:** #BA7517 (ambre) - Attention, priorité moyenne
- **Erreur:** #E24B4A (rouge) - Critique, priorité haute
- **Gris:** #999 / #666 - Texte secondaire

### Typographie
- **Titres:** 24-28px, poids 700
- **Sous-titres:** 16-18px, poids 600
- **Corps:** 13-14px, poids 400
- **Direction:** RTL (droite à gauche)

### Espacement
- Padding: 1rem, 1.5rem, 2rem
- Gap: 0.75rem, 1rem, 1.5rem, 2rem
- Border radius: 6px (petits éléments), 8px (modérés), 12px (cartes)

---

## 🔄 Structure React

### Composants
Chaque page est un composant React fonctionnel avec:
- Utilisation de `useState` pour la gestion d'état
- Données simulées (mockup)
- Pas de logique backend
- Props passés directement aux enfants

### Props typiques
```jsx
// Exemples de structures de données
const stat = {
  label: 'Familles',
  value: '1,284',
  note: '+12 ce mois',
  color: 'blue'
}

const family = {
  id: '104568923',
  name: 'سالم البلوشي',
  priority: 'قصوى',
  share: '32.400'
}
```

---

## 📱 Responsive Design

Tous les fichiers CSS incluent des media queries pour:
- Desktop (1024px+)
- Tablette (768px - 1023px)
- Mobile (<768px)

---

## 🚀 Installation

### 1. Préparation
```bash
# Copier tous les fichiers JSX dans src/pages/
# Copier tous les fichiers CSS dans src/styles/ ou dans le même répertoire

# Arborescence recommandée:
src/
├── pages/
│   ├── LoginPage.jsx
│   ├── DashboardPage.jsx
│   ├── FamiliesPage.jsx
│   ├── DistributionPage.jsx
│   ├── MerchantPage.jsx
│   ├── AccountingPage.jsx
│   ├── EmergencyPage.jsx
│   └── (CSS files)
└── App.jsx
```

### 2. Configuration des routes (App.jsx)
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
// ... imports des autres pages

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
  )
}
```

---

## 📝 Notes importantes

### Frontend uniquement
- Aucune logique de base de données
- Aucune API backend
- Aucune authentification réelle
- Données simulées pour la démo
- Prêt pour intégration avec Google Apps Script ou autres services

### Prêt pour l'extension
- Structure CSS modulaire
- Noms de classes cohérents
- Variables CSS pour les couleurs
- Séparation claire composants/styles
- Facile à intégrer avec des formulaires réels

---

## 📄 Licence
Frontend pour système ERP - Lajnat Al-Zakat - Wilayat Al-Suwaiq

Tous les éléments sont des images de démo. À adapter selon les besoins.