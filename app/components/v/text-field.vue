<template>
  <div
    :class="[
      'v-text-field relative shadow-sm',
      rounded ? 'rounded-full' : 'rounded-md',
      $attrs.class,
    ]"
  >
    <div
      v-if="$slots.lead"
      class="absolute inset-y-0 left-1 flex w-10 items-center px-2 text-lg text-gray-500"
      :class="{ 'pointer-events-none': !leadClickable }"
      @click="$emit('click:lead', $event)"
    >
      <slot name="lead" />
    </div>
    <input
      ref="input"
      v-bind="{ ..._omit($attrs, 'class'), type }"
      class="block w-full rounded-[inherit] border-0 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      :class="{ 'pl-10': $slots.lead, 'pr-10': $slots.trail }"
    />
    <div
      v-if="$slots.trail"
      class="absolute inset-y-0 right-1 flex w-10 items-center px-2 text-gray-500"
      :class="{ 'pointer-events-none': !trailClickable }"
      @click="$emit('click:trail', $event)"
    >
      <slot name="trail" />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})

const attrs = useAttrs()

defineProps({
  rounded: Boolean,
  type: { type: String, default: 'text' },
})

const input = ref(null)
const leadClickable = computed(() => attrs['onClick:lead'] != null)
const trailClickable = computed(() => attrs['onClick:trail'] != null)

defineExpose({
  focus: () => input.value.focus(),
})
</script>
