<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getCircularChartBaseOption, chartColors } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.gaugeChart
const isDark = computed(() => theme.value === 'dark')

const option = computed(() => ({
  ...getCircularChartBaseOption(isDark.value),
  series: [{
    type: 'gauge',
    min: 0,
    max: data.max,
    progress: {
      show: true,
      width: 14,
      itemStyle: { color: chartColors[0] },
    },
    axisLine: {
      lineStyle: {
        width: 14,
        color: [[1, isDark.value ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)']],
      },
    },
    axisTick: { show: false },
    splitLine: { length: 8, lineStyle: { color: isDark.value ? '#334155' : '#cbd5e1' } },
    axisLabel: { color: isDark.value ? '#94a3b8' : '#64748b', distance: 20 },
    pointer: { itemStyle: { color: chartColors[0] } },
    anchor: { show: true, size: 8, itemStyle: { color: chartColors[0] } },
    title: { show: true, offsetCenter: [0, '75%'], color: isDark.value ? '#94a3b8' : '#64748b' },
    detail: {
      valueAnimation: true,
      formatter: `{value}${data.unit}`,
      color: isDark.value ? '#f1f5f9' : '#0f172a',
      fontSize: 28,
      fontWeight: 700,
      offsetCenter: [0, '45%'],
    },
    data: [{ value: data.value, name: data.title }],
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
