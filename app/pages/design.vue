<template>
  <header class="sticky top-0 z-10 border-b bg-white/70 backdrop-blur-sm">
    <v-container>
      <h1>Design system</h1>
      <nav class="overflow-x-auto whitespace-nowrap">
        <a href="#icons"> Icons </a>
        &middot;
        <a href="#v-container"> v-container </a>
        &middot;
        <a href="#v-sheet"> v-sheet </a>
        &middot;
        <a href="#v-text-field"> v-text-field </a>
      </nav>
    </v-container>
  </header>

  <v-container class="pb-32">
    <section>
      <a class="anchor" id="icons" />
      <h2>Icons</h2>
      <v-sheet class="flex gap-1 text-indigo-800">
        <i-ic-outline-mail class="h-8 w-8" />
        <i-ic-search class="h-8 w-8" />
        <i-ic-outline-cancel class="h-8 w-8" />
      </v-sheet>
    </section>

    <section>
      <a class="anchor" id="v-container" />
      <h2>v-container</h2>
      <v-sheet>
        <v-container class="max-w-xs rounded-lg border bg-gray-100">
          I'm contained to the <strong>xs</strong> breakpoint 🤗
        </v-container>
      </v-sheet>
    </section>

    <section>
      <a class="anchor" id="v-sheet" />
      <h2>v-sheet</h2>
      <v-sheet> A paper-like surface for laying out UI components. </v-sheet>
    </section>

    <section>
      <a class="anchor" id="v-text-field" />
      <h2>v-text-field</h2>
      <v-sheet class="flex flex-col gap-4">
        <v-text-field placeholder="Email" type="email">
          <template #lead> <i-ic-outline-mail /> </template>
        </v-text-field>
        <v-text-field class="rounded-full" placeholder="Search">
          <template #lead> <i-ic-search /> </template>
          <template #trail> <i-ic-outline-cancel /> </template>
        </v-text-field>
      </v-sheet>
    </section>
  </v-container>
</template>

<style scoped>
a {
  @apply text-sm font-medium text-indigo-600 hover:text-indigo-500;
}

a.anchor {
  position: relative;
  top: -100px;
}

h1 {
  @apply text-xl tracking-tight text-gray-800;
}

h2 {
  @apply font-medium tracking-tight text-gray-700;
}

section + section {
  @apply mt-8;
}

.v-sheet {
  @apply mt-2 flex justify-center p-10 text-center;
}
</style>
