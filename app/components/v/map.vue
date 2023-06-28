<template>
  <google-map v-bind="$props" :api-key="$config.public.googleMapsApiKey" />
</template>

<script setup>
import { GoogleMap } from 'vue3-google-map'

defineProps({
  disableDefaultUi: { type: Boolean, default: true },
  center: { type: Object, default: () => ({ lat: 54.7877, lng: -6.4923 }) },
  zoom: { type: Number, default: 5 },
})
</script>
