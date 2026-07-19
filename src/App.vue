<script setup>
import { ref } from 'vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import DeveloperInfo from '@/components/DeveloperInfo.vue'
import ChartCard from '@/components/ChartCard.vue'
import JsonDataModal from '@/components/JsonDataModal.vue'
import BarChart from '@/components/charts/BarChart.vue'
import LineChart from '@/components/charts/LineChart.vue'
import PieChart from '@/components/charts/PieChart.vue'
import DonutChart from '@/components/charts/DonutChart.vue'
import AreaChart from '@/components/charts/AreaChart.vue'
import StackedBarChart from '@/components/charts/StackedBarChart.vue'
import HorizontalBarChart from '@/components/charts/HorizontalBarChart.vue'
import ScatterChart from '@/components/charts/ScatterChart.vue'
import GaugeChart from '@/components/charts/GaugeChart.vue'
import HeatmapChart from '@/components/charts/HeatmapChart.vue'

const modalVisible = ref(false)
const activeChartKey = ref(null)

function openDataPopup(chartKey) {
  activeChartKey.value = chartKey
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
  activeChartKey.value = null
}
</script>

<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <div class="header-top">
        <div>
          <h1>Dashboard Graphs</h1>
          <div class="badges">
            <span class="badge">Vue 3.5</span>
            <span class="badge">ECharts</span>
            <span class="badge">Composition API</span>
            <span class="badge">Light / Dark Theme</span>
          </div>
        </div>
        <div class="header-actions">
          <DeveloperInfo />
          <ThemeToggle />
        </div>
      </div>
    </header>

    <main class="dashboard-grid">
      <ChartCard title="Revenue by Category" chart-type="Bar Chart" chart-key="barChart" @show-data="openDataPopup">
        <BarChart />
      </ChartCard>

      <ChartCard title="Sales Trend" chart-type="Line Chart" chart-key="lineChart" @show-data="openDataPopup">
        <LineChart />
      </ChartCard>

      <ChartCard title="Traffic Sources" chart-type="Pie Chart" chart-key="pieChart" @show-data="openDataPopup">
        <PieChart />
      </ChartCard>

      <ChartCard title="User Segments" chart-type="Donut Chart" chart-key="donutChart" @show-data="openDataPopup">
        <DonutChart />
      </ChartCard>

      <ChartCard title="Booking Volume" chart-type="Area Chart" chart-key="areaChart" @show-data="openDataPopup">
        <AreaChart />
      </ChartCard>

      <ChartCard title="Revenue by Status" chart-type="Stacked Bar Chart" chart-key="stackedBarChart" @show-data="openDataPopup">
        <StackedBarChart />
      </ChartCard>

      <ChartCard title="Top Venues" chart-type="Horizontal Bar Chart" chart-key="horizontalBarChart" @show-data="openDataPopup">
        <HorizontalBarChart />
      </ChartCard>

      <ChartCard title="Price vs Bookings" chart-type="Scatter Plot" chart-key="scatterChart" @show-data="openDataPopup">
        <ScatterChart />
      </ChartCard>

      <ChartCard title="Monthly Target" chart-type="Gauge Chart" chart-key="gaugeChart" @show-data="openDataPopup">
        <GaugeChart />
      </ChartCard>

      <ChartCard title="Activity Heatmap" chart-type="Heatmap" chart-key="heatmapChart" wide @show-data="openDataPopup">
        <HeatmapChart />
      </ChartCard>
    </main>

    <footer class="dashboard-footer">
      Dashboard Graphs — Portfolio sample project · Vue 3.5 · Vite · ECharts
    </footer>

    <JsonDataModal
      :visible="modalVisible"
      :chart-key="activeChartKey"
      @close="closeModal"
    />
  </div>
</template>
