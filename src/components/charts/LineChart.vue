<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.lineChart

const option = computed(() => ({
  ...getChartBaseOption(theme.value === 'dark'),
  tooltip: { trigger: 'axis' },
  legend: { top: 4, left: 'center', itemGap: 14 },
  grid: { left: 48, right: 16, top: 52, bottom: 40 },
  xAxis: {
    type: 'category',
    data: data.months,
    boundaryGap: false,
    axisLabel: { hideOverlap: true },
  },
  yAxis: { type: 'value' },
  series: [
    { name: 'Sales', type: 'line', data: data.sales, smooth: true },
    { name: 'Traffic', type: 'line', data: data.traffic, smooth: true },
    { name: 'Bookings', type: 'line', data: data.bookings, smooth: true },
  ],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
