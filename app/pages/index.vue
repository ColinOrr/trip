<template>
  <v-text-field
    placeholder="Where to?"
    rounded
    @focus="navigateTo({ name: 'search' })"
  >
    <template #lead> <i-ic-search /> </template>
  </v-text-field>
</template>
