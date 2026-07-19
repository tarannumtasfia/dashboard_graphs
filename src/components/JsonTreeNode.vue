<script setup>
import { ref, computed } from 'vue'

defineOptions({ name: 'JsonTreeNode' })

const props = defineProps({
  data: { required: true },
  label: { type: String, default: 'root' },
  depth: { type: Number, default: 0 },
})

const open = ref(props.depth < 2)

const isObject = computed(
  () => props.data !== null && typeof props.data === 'object',
)
const isArray = computed(() => Array.isArray(props.data))
const entries = computed(() => {
  if (!isObject.value) return []
  return Object.entries(props.data)
})

function preview() {
  if (isArray.value) return `[${props.data.length}]`
  return '{...}'
}

function formatValue(value) {
  if (value === null) return 'null'
  if (typeof value === 'string') return `"${value}"`
  if (typeof value === 'boolean') return String(value)
  return String(value)
}

function valueClass(value) {
  if (value === null) return 'json-null'
  if (typeof value === 'string') return 'json-string'
  if (typeof value === 'number') return 'json-number'
  if (typeof value === 'boolean') return 'json-bool'
  return ''
}
</script>

<template>
  <div class="json-node">
    <template v-if="isObject">
      <button type="button" class="node-toggle" @click="open = !open">
        <span class="toggle-icon">{{ open ? '▼' : '▶' }}</span>
        <span class="json-key">{{ label }}</span>
        <span class="json-null"> {{ preview() }}</span>
      </button>
      <div v-if="open" class="json-children">
        <JsonTreeNode
          v-for="([key, value], index) in entries"
          :key="String(key) + index"
          :label="isArray ? String(index) : key"
          :data="value"
          :depth="depth + 1"
        />
      </div>
    </template>
    <div v-else class="json-leaf">
      <span class="json-key">{{ label }}:</span>
      <span :class="valueClass(data)"> {{ formatValue(data) }}</span>
    </div>
  </div>
</template>
