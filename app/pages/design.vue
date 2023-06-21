<template>
  <v-container>
    <header>
      <h1>Design system</h1>
      <a href="#v-container"> v-container </a>
      &middot;
      <a href="#v-sheet"> v-sheet </a>
    </header>

    <section id="v-container">
      <h2>v-container</h2>
      <v-sheet class="mt-2 p-10 text-center">
        <v-container class="bg-gray-100 max-w-xs">
          I'm contained to the <strong>xs</strong> breakpoint 🤗
        </v-container>
      </v-sheet>
    </section>

    <section id="v-sheet">
      <h2>v-sheet</h2>
      <v-sheet class="mt-2 p-10 text-center">
        A paper-like surface for laying out UI components.
      </v-sheet>
    </section>
  </v-container>
</template>

<style scoped>
a {
  @apply text-blue-900 hover:underline;
}

h1 {
  @apply text-2xl;
}

h2 {
  @apply text-xl;
}

section {
  @apply mt-8;
}
</style>
