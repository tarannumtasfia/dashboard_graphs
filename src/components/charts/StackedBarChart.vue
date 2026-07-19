<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.stackedBarChart

const option = computed(() => ({
  ...getChartBaseOption(theme.value === 'dark'),
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  legend: { top: 4, left: 'center', itemGap: 12 },
  grid: { left: 58, right: 16, top: 52, bottom: 40 },
  xAxis: {
    type: 'category',
    data: data.months,
    axisLabel: { hideOverlap: true },
  },
  yAxis: {
    type: 'value',
    name: 'Revenue ($)',
    nameLocation: 'middle',
    nameGap: 46,
  },
  series: data.series.map((s) => ({
    name: s.name,
    type: 'bar',
    stack: 'total',
    data: s.data,
    emphasis: { focus: 'series' },
  })),
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
