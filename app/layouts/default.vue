<template>
  <v-map class="h-[40%]" />
  <v-sheet
    class="absolute bottom-0 left-0 right-0 p-3 transition-all"
    :class="maximised ? 'h-full' : 'h-[calc(60%+30px)]'"
  >
    <NuxtPage @maximise="maximised = true" @minimise="maximised = false" />
  </v-sheet>
</template>

<script setup>
const route = useRoute()
const maximised = ref(route.meta.maximised)

watch(route, () => {
  maximised.value = route.meta.maximised
})
</script>
