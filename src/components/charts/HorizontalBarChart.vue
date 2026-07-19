<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.horizontalBarChart

const option = computed(() => ({
  ...getChartBaseOption(theme.value === 'dark'),
  legend: { show: false },
  tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
  grid: { left: 120, right: 16, top: 20, bottom: 56 },
  xAxis: {
    type: 'value',
    name: 'Visitors',
    nameLocation: 'middle',
    nameGap: 36,
    axisLabel: {
      hideOverlap: true,
      margin: 8,
      formatter: (value) => (value >= 1000 ? `${Math.round(value / 1000)}k` : value),
    },
  },
  yAxis: {
    type: 'category',
    data: [...data.venues].reverse(),
    axisLabel: {
      width: 100,
      overflow: 'truncate',
    },
  },
  series: [{
    name: 'Visitors',
    type: 'bar',
    data: [...data.visitors].reverse(),
    barMaxWidth: 28,
    itemStyle: { borderRadius: [0, 6, 6, 0] },
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
