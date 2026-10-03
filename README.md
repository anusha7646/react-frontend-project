# Jordan Lee — Portfolio

A responsive, single-page portfolio built with React, JavaScript, and Vite. It uses a small set of reusable components and has no UI-library dependencies.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── components/
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectCard.jsx
    │   ├── ProjectDetails.jsx
    │   ├── Projects.jsx
    │   ├── SearchBar.jsx
    │   ├── ServiceCard.jsx
    │   └── Services.jsx
    └── data/
        ├── projects.js
        └── services.js
```

## Components

- **App** owns the search state, matches projects and services, and assembles the page.
- **Navbar** provides anchor navigation, an active-section indicator, and an accessible mobile menu.
- **Hero** introduces the portfolio and links to the work and about sections.
- **About** presents a short bio and highlights.
- **Services** renders reusable **ServiceCard** components from `src/data/services.js`.
- **Projects** combines the **SearchBar**, discipline filters, **ProjectCard**, and service results into a searchable work collection. **ProjectDetails** displays an accessible case-study dialog. Project content is stored in `src/data/projects.js`.
- **Contact** is a controlled, browser-validated contact form with clear feedback.
- **Footer** contains contact and social links.

## Search

The search input is controlled by React state in `App`. A `useMemo` calculation searches each project's title, category, description, and tags, plus each service's title, description, and tags. Typing updates results immediately; clearing the input restores all projects. The discipline filter buttons can further narrow projects by product, web, or brand. An empty match shows a clear no-results message and reset action. Search is case-insensitive.

## Responsive design and accessibility

The stylesheet uses a fluid container, grid and flex layouts, and breakpoints at tablet and mobile widths. The mobile navigation collapses behind a keyboard-accessible menu button and closes on Escape or when returning to desktop width. Filter buttons become horizontally scrollable on narrow screens. Navigation highlights the visible section, and links scroll to semantic page sections. Native dialog controls support Escape and backdrop dismissal. Form controls have labels and native validation; images have alt text and load lazily. Focus indicators, reduced-motion preferences, and live search/form feedback are supported.

## React concepts used

- Functional components compose each page section.
- `useState` manages the mobile menu, search query, and contact form.
- `useEffect` sets up and cleans up the section visibility observer used for active navigation.
- `useMemo` derives search results when the query changes.
- Props pass data and event handlers into reusable cards and controls.
- Array `map` renders data-driven UI with stable keys.

## Customizing the portfolio

Edit the project and service entries in `src/data/` to update the portfolio content. Replace the sample identity, bio, email address, and social profile URLs with your own details. The contact form currently validates and displays an in-browser confirmation; connect it to a server or form provider to deliver messages.
