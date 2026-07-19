<script setup>
import { ref, computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.heatmapChart
const unit = ref('celsius')
const isDark = computed(() => theme.value === 'dark')

function celsiusToFahrenheit(c) {
  return Math.round((c * 9) / 5 + 32)
}

function convertTemp(celsius) {
  return unit.value === 'celsius' ? celsius : celsiusToFahrenheit(celsius)
}

const unitSymbol = computed(() => (unit.value === 'celsius' ? '°C' : '°F'))

const displayValues = computed(() =>
  data.temperatureCelsius.map(([hour, day, celsius]) => [
    hour,
    day,
    convertTemp(celsius),
  ]),
)

const visualMin = computed(() => convertTemp(5))
const visualMax = computed(() => convertTemp(35))

const option = computed(() => ({
  ...getChartBaseOption(isDark.value),
  legend: { show: false },
  tooltip: {
    position: 'top',
    formatter: (p) => {
      const day = data.days[p.value[1]]
      const hour = data.hours[p.value[0]]
      return `${day} ${hour}<br/>${p.value[2]}${unitSymbol.value}`
    },
  },
  grid: { left: 52, right: 52, top: 16, bottom: 100 },
  xAxis: {
    type: 'category',
    data: data.hours,
    splitArea: { show: true },
  },
  yAxis: {
    type: 'category',
    data: data.days,
    splitArea: { show: true },
  },
  visualMap: {
    type: 'continuous',
    min: visualMin.value,
    max: visualMax.value,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: 16,
    width: '80%',
    itemWidth: 30,
    text: [`${visualMin.value}${unitSymbol.value}`, `${visualMax.value}${unitSymbol.value}`],
    textGap: 18,
    formatter: (value) => `${Math.round(value)}${unitSymbol.value}`,
    inRange: {
      color: isDark.value
        ? ['#1c0a0a', '#450a0a', '#991b1b', '#dc2626', '#ef4444', '#f87171']
        : ['#fff1f2', '#fecdd3', '#fda4af', '#fb7185', '#e11d48', '#be123c'],
    },
    textStyle: { color: isDark.value ? '#94a3b8' : '#64748b', fontSize: 11 },
  },
  series: [{
    name: 'Temperature',
    type: 'heatmap',
    data: displayValues.value,
    label: { show: false },
    emphasis: {
      itemStyle: { shadowBlur: 10, shadowColor: 'rgba(220, 38, 38, 0.4)' },
    },
  }],
}))
</script>

<template>
  <div class="heatmap-chart">
    <div class="heatmap-controls">
      <span class="heatmap-controls-label">Unit</span>
      <div class="unit-toggle" role="group" aria-label="Temperature unit">
        <button
          type="button"
          class="unit-btn"
          :class="{ active: unit === 'celsius' }"
          @click="unit = 'celsius'"
        >
          °C
        </button>
        <button
          type="button"
          class="unit-btn"
          :class="{ active: unit === 'fahrenheit' }"
          @click="unit = 'fahrenheit'"
        >
          °F
        </button>
      </div>
    </div>
    <VChart :option="option" autoresize />
  </div>
</template>

<style scoped>
.heatmap-chart {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: inherit;
}

.heatmap-controls {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.heatmap-controls-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.unit-toggle {
  display: inline-flex;
  padding: 2px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
}

.unit-btn {
  padding: 0.25rem 0.65rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--text-muted);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.unit-btn:hover {
  color: var(--text-primary);
}

.unit-btn.active {
  background: #dc2626;
  color: #fff;
}

.heatmap-chart :deep(.echarts) {
  flex: 1;
  min-height: 200px;
}
</style>
