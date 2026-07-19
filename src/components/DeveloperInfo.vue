<script setup>
import developerPhoto from '@/assets/developer-photo.png'

const portfolioUrl = 'https://portfolio-self-alpha-ten.vercel.app/'
</script>

<template>
  <a
    class="developer-info"
    :href="portfolioUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Tasfia Tarannum portfolio"
  >
    <div class="developer-avatar-wrap">
      <img
        class="developer-avatar"
        :src="developerPhoto"
        alt="Tasfia Tarannum"
      />
    </div>
    <div class="developer-details">
      <span class="developer-name">Tasfia Tarannum</span>
      <span class="developer-link">Portfolio</span>
    </div>
  </a>
</template>
