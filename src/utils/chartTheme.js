export const chartColors = ['#4EBDD3', '#3aa8bd', '#0891b2', '#22c55e', '#f59e0b', '#ef4444']

export function getCircularChartBaseOption(isDark) {
  const labelColor = isDark ? '#94a3b8' : '#64748b'

  return {
    backgroundColor: 'transparent',
    color: chartColors,
    textStyle: {
      color: labelColor,
      fontFamily: 'Inter, sans-serif',
    },
    tooltip: {
      backgroundColor: isDark ? 'rgba(15, 20, 25, 0.95)' : 'rgba(255, 255, 255, 0.98)',
      borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)',
      textStyle: { color: isDark ? '#f1f5f9' : '#0f172a' },
    },
    legend: {
      textStyle: { color: isDark ? '#f1f5f9' : '#64748b' },
    },
  }
}

export function getChartBaseOption(isDark) {
  const axisColor = isDark ? '#334155' : '#cbd5e1'
  const labelColor = isDark ? '#94a3b8' : '#64748b'
  const splitColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.06)'

  return {
    backgroundColor: 'transparent',
    color: chartColors,
    textStyle: {
      color: labelColor,
      fontFamily: 'Inter, sans-serif',
    },
    tooltip: {
      backgroundColor: isDark ? 'rgba(15, 20, 25, 0.95)' : 'rgba(255, 255, 255, 0.98)',
      borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15,23,42,0.1)',
      textStyle: { color: isDark ? '#f1f5f9' : '#0f172a' },
    },
    legend: {
      textStyle: { color: isDark ? '#f1f5f9' : '#64748b' },
    },
    xAxis: {
      axisLine: { lineStyle: { color: axisColor } },
      axisLabel: { color: labelColor },
      splitLine: { lineStyle: { color: splitColor } },
    },
    yAxis: {
      axisLine: { lineStyle: { color: axisColor } },
      axisLabel: { color: labelColor },
      splitLine: { lineStyle: { color: splitColor } },
    },
  }
}
