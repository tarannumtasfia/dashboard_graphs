import { ref, watch } from 'vue'

const THEME_KEY = 'dashboard-theme'
const theme = ref('light')

function applyTheme(value) {
  document.documentElement.setAttribute('data-theme', value)
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') {
    theme.value = saved
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
  }
  applyTheme(theme.value)
}

watch(theme, (value) => {
  applyTheme(value)
  localStorage.setItem(THEME_KEY, value)
})

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggleTheme }
}
