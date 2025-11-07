# HealthConnect Frontend

This is the frontend application for HealthConnect, built with React, Vite, and Tailwind CSS.

## Features

- **Home View**: Hero section with feature cards
- **Search View**: Clinic search with filters by specialty and location
- **Chat View**: Conversational AI assistant for personalized recommendations
- **Recommendations View**: Personalized clinic suggestions with compatibility scores
- **Login View**: User authentication form
- **Register View**: User registration form
- **Responsive Design**: Mobile-friendly navigation and layouts
- **Custom Theme**: Matcha Green (#10B981) and Sky Blue (#38BDF8) color scheme

## Tech Stack

- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **ESLint**: Code linting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Linting

Run ESLint:

```bash
npm run lint
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Main navigation bar
│   └── Footer.jsx       # Footer component
├── views/              # Page components
│   ├── HomeView.jsx
│   ├── SearchView.jsx
│   ├── ChatView.jsx
│   ├── RecommendationsView.jsx
│   ├── LoginView.jsx
│   └── RegisterView.jsx
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Color Scheme

- **Primary (Matcha)**: `#10B981` - Used for primary actions and branding
- **Secondary (Sky)**: `#38BDF8` - Used for secondary actions and accents

## Components

### Navigation
- Sticky navigation bar with logo and menu items
- Mobile-responsive with hamburger menu
- Active state highlighting

### Footer
- Company information and branding
- Quick links
- Contact information

### Views
- **HomeView**: Landing page with hero and features
- **SearchView**: Search and filter clinics with results
- **ChatView**: Interactive chat with AI assistant
- **RecommendationsView**: Top clinic recommendations
- **LoginView**: Email/password login form
- **RegisterView**: User registration with validation
