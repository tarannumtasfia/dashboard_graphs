<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption, chartColors } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.areaChart
const isDark = computed(() => theme.value === 'dark')

const option = computed(() => ({
  ...getChartBaseOption(isDark.value),
  legend: { show: false },
  tooltip: { trigger: 'axis' },
  grid: { left: 58, right: 16, top: 24, bottom: 40 },
  xAxis: {
    type: 'category',
    data: data.weeks,
    boundaryGap: false,
    axisLabel: { hideOverlap: true },
  },
  yAxis: {
    type: 'value',
    name: 'Bookings',
    nameLocation: 'middle',
    nameGap: 46,
  },
  series: [{
    name: 'Bookings',
    type: 'line',
    data: data.bookings,
    smooth: true,
    areaStyle: {
      color: {
        type: 'linear',
        x: 0, y: 0, x2: 0, y2: 1,
        colorStops: [
          { offset: 0, color: isDark.value ? 'rgba(78,189,211,0.5)' : 'rgba(78,189,211,0.4)' },
          { offset: 1, color: isDark.value ? 'rgba(78,189,211,0.02)' : 'rgba(78,189,211,0.02)' },
        ],
      },
    },
    lineStyle: { color: chartColors[0], width: 2 },
    itemStyle: { color: chartColors[0] },
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
