# Dashboard Graphs

A single-page analytics dashboard built with Vue 3.5 and ECharts. Designed as a portfolio showcase with 10 interactive chart types, shared JSON data, light/dark theme, and a data viewer on each chart.

## Description

Each chart reads from a shared JSON file. Click **{ } View Data** on any chart to inspect its source data in an expand/collapse popup.

| Chart Type | Title |
|------------|-------|
| BAR CHART | Revenue by Category |
| LINE CHART | Sales Trend |
| PIE CHART | Traffic Sources |
| DONUT CHART | User Segments |
| AREA CHART | Booking Volume |
| STACKED BAR CHART | Revenue by Status |
| HORIZONTAL BAR CHART | Top Venues |
| SCATTER PLOT | Price vs Bookings |
| GAUGE CHART | Monthly Target |
| HEATMAP | Activity Heatmap |

## Technical Description

| Category | Technology |
|----------|------------|
| Framework | Vue 3.5 (Composition API, `<script setup>`) |
| Build Tool | Vite 8 |
| Charts | Apache ECharts 6 + vue-echarts |
| Data | Static JSON (`src/data/dashboardData.json`) |
| Styling | Custom CSS with CSS variables |
| Theme | Light / Dark mode with localStorage persistence |
| Layout | Responsive CSS Grid (mobile, tablet, laptop, large screen) |

### Features

- Single-page app — no login or routing required
- 10 chart types in a 3×4 grid layout (heatmap spans full width)
- Shared sample JSON data for all charts
- View Data button on each chart with JSON popup (expand/collapse + copy)
- Light and dark theme toggle
- Fully responsive across mobile, tablet, laptop, and large screens

## How to Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Steps

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd dashboard_graph
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Open the URL shown in the terminal (usually `http://localhost:5173`).

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview the production build**

   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├── data/dashboardData.json     # Shared JSON data for all charts
├── composables/useTheme.js     # Light/dark theme logic
├── components/
│   ├── ChartCard.vue           # Chart wrapper with type label + View Data button
│   ├── JsonDataModal.vue       # JSON popup modal
│   ├── ThemeToggle.vue         # Theme switcher
│   └── charts/                 # 10 chart components
├── utils/chartTheme.js         # ECharts theme helpers
└── App.vue                     # Main dashboard layout
```

## License

MIT
