<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.scatterChart

const option = computed(() => ({
  ...getChartBaseOption(theme.value === 'dark'),
  legend: { show: false },
  tooltip: {
    trigger: 'item',
    formatter: (p) => `${data.xLabel}: ${p.value[0]}<br/>${data.yLabel}: ${p.value[1]}`,
  },
  grid: { left: 58, right: 16, top: 24, bottom: 58 },
  xAxis: {
    type: 'value',
    name: data.xLabel,
    nameLocation: 'middle',
    nameGap: 34,
    axisLabel: { hideOverlap: true },
  },
  yAxis: {
    type: 'value',
    name: data.yLabel,
    nameLocation: 'middle',
    nameGap: 46,
  },
  series: [{
    name: 'Events',
    type: 'scatter',
    symbolSize: 12,
    data: data.points,
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
