<template>
  <v-text-field
    ref="search"
    placeholder="Where to?"
    rounded
    @blur="$emit('minimise')"
    @click:lead="$router.back"
    @focus="$emit('maximise')"
  >
    <template #lead> <i-ic-arrow-back /> </template>
  </v-text-field>
</template>

<script setup>
definePageMeta({
  maximised: true,
})

const search = ref(null)
onMounted(() => {
  search.value.focus()
})
</script>
