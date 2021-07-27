<template>
  <div class="about">
    <h1>{{ computed.count }}</h1>
    <button @click="add(1)">{{ $t("ADD") }}</button>
    <button @click="sub(1)">{{ $t("SUB") }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "@vue/composition-api";

export default defineComponent({
  setup(_, context) {
    const useComputed = reactive({
      count: computed(() => {
        return context.root.$store.getters.getCount;
      }),
    });
    const useAdd = (value: number) => {
      context.root.$store.dispatch("addCount", value);
    };
    const useSub = (value: number) => {
      context.root.$store.dispatch("subCount", value);
    };

    return {
      computed: useComputed,
      add: useAdd,
      sub: useSub,
    };
  },
});
</script>
