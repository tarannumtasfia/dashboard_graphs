<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import dashboardData from '@/data/dashboardData.json'
import JsonTreeNode from './JsonTreeNode.vue'

const props = defineProps({
  visible: { type: Boolean, default: false },
  chartKey: { type: String, default: null },
})

const emit = defineEmits(['close'])

const expanded = ref(true)
const copied = ref(false)

const chartJson = computed(() => {
  if (!props.chartKey) return null
  return dashboardData[props.chartKey]
})

const formattedJson = computed(() =>
  JSON.stringify(chartJson.value, null, 2),
)

function onKeydown(e) {
  if (e.key === 'Escape' && props.visible) emit('close')
}

async function copyJson() {
  try {
    await navigator.clipboard.writeText(formattedJson.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    /* clipboard unavailable */
  }
}

watch(() => props.visible, (val) => {
  if (val) expanded.value = true
})

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-panel" role="dialog" aria-modal="true" :aria-label="`${chartJson?.title ?? chartKey} data`">
        <div class="modal-header">
          <h2>{{ chartJson?.title ?? chartKey }} — Raw Data</h2>
          <button type="button" class="modal-close" aria-label="Close" @click="emit('close')">✕</button>
        </div>

        <div class="modal-toolbar">
          <button type="button" class="modal-btn" @click="expanded = !expanded">
            {{ expanded ? 'Collapse' : 'Expand' }} JSON
          </button>
          <button type="button" class="modal-btn" @click="copyJson">Copy JSON</button>
          <span v-if="copied" class="copy-toast">Copied!</span>
        </div>

        <div class="modal-body">
          <div class="json-viewer" :class="{ collapsed: !expanded }">
            <JsonTreeNode v-if="chartJson" :data="chartJson" label="data" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
