<script setup>
defineProps({
  title: { type: String, required: true },
  chartType: { type: String, required: true },
  chartKey: { type: String, required: true },
  wide: { type: Boolean, default: false },
})

defineEmits(['show-data'])
</script>

<template>
  <div class="chart-card" :class="{ 'chart-card--wide': wide }">
    <div class="chart-header">
      <div class="chart-title-block">
        <span class="chart-type">{{ chartType }}</span>
        <h3>
          <span class="chart-dot" />
          {{ title }}
        </h3>
      </div>
      <button type="button" class="data-btn" @click="$emit('show-data', chartKey)">
        { } View Data
      </button>
    </div>
    <div class="chart-body">
      <slot />
    </div>
  </div>
</template>
