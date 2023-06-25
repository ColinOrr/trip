<template>
  <v-container>
    <header>
      <h1>Design system</h1>
      <a href="#icons"> Icons </a>
      &middot;
      <a href="#v-container"> v-container </a>
      &middot;
      <a href="#v-sheet"> v-sheet </a>
    </header>

    <section id="icons">
      <h2>Icons</h2>
      <v-sheet class="text-gray-600">
        <i-ic-search class="w-8 h-8" />
        <i-ic-outline-cancel class="w-8 h-8" />
      </v-sheet>
    </section>

    <section id="v-container">
      <h2>v-container</h2>
      <v-sheet>
        <v-container class="bg-gray-100 max-w-xs border rounded-lg">
          I'm contained to the <strong>xs</strong> breakpoint 🤗
        </v-container>
      </v-sheet>
    </section>

    <section id="v-sheet">
      <h2>v-sheet</h2>
      <v-sheet> A paper-like surface for laying out UI components. </v-sheet>
    </section>
  </v-container>
</template>

<style scoped>
a {
  @apply text-indigo-600 text-sm font-medium hover:text-indigo-500;
}

h1 {
  @apply text-gray-800 text-xl tracking-tight;
}

h2 {
  @apply text-gray-700 font-medium tracking-tight;
}

section {
  @apply mt-8;
}

.v-sheet {
  @apply flex justify-center mt-2 p-10 text-center;
}
</style>
