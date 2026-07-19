<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.barChart

const option = computed(() => ({
  ...getChartBaseOption(theme.value === 'dark'),
  legend: { show: false },
  tooltip: { trigger: 'axis' },
  grid: { left: 58, right: 16, top: 24, bottom: 40 },
  xAxis: {
    type: 'category',
    data: data.categories,
    axisLabel: { interval: 0, hideOverlap: true },
  },
  yAxis: {
    type: 'value',
    name: 'Revenue ($)',
    nameLocation: 'middle',
    nameGap: 46,
  },
  series: [{
    name: 'Revenue',
    type: 'bar',
    data: data.revenue,
    itemStyle: { borderRadius: [6, 6, 0, 0] },
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
