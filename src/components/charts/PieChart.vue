<script setup>
import { computed } from 'vue'
import VChart from 'vue-echarts'
import { useTheme } from '@/composables/useTheme'
import { getCircularChartBaseOption } from '@/utils/chartTheme'
import dashboardData from '@/data/dashboardData.json'

const { theme } = useTheme()
const data = dashboardData.pieChart
const isDark = computed(() => theme.value === 'dark')

const legendTextColor = computed(() => (isDark.value ? '#f1f5f9' : '#334155'))

const option = computed(() => ({
  ...getCircularChartBaseOption(isDark.value),
  tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
  legend: {
    type: 'scroll',
    orient: 'horizontal',
    bottom: 4,
    left: 'center',
    width: '94%',
    itemWidth: 8,
    itemHeight: 8,
    itemGap: 14,
    pageIconSize: 10,
    pageIconColor: legendTextColor.value,
    pageTextStyle: { color: legendTextColor.value, fontSize: 10 },
    textStyle: {
      color: legendTextColor.value,
      fontSize: 10,
    },
  },
  series: [{
    name: 'Traffic',
    type: 'pie',
    radius: '72%',
    center: ['50%', '46%'],
    data: data.sources,
    label: { show: false },
    labelLine: { show: false },
    emphasis: {
      label: { show: false },
      itemStyle: { shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0,0,0,0.2)' },
    },
  }],
}))
</script>

<template>
  <VChart :option="option" autoresize />
</template>
