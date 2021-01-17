<template>
  <AppSection>
    <AppHeading level="2">Daily entries</AppHeading>
    <p>{{ dayCount }}</p>
  </AppSection>
  <AppSection>
    <AppHeading level="2">Year entries</AppHeading>
    <p>{{ yearCount }}</p>
  </AppSection>
</template>

<script>
import { ref, computed, onMounted } from "vue";

import AppSection from "@/components/ui/AppSection";
import AppHeading from "@/components/ui/AppHeading";

import counterApi from "@/api/counterApi";

export default {
  components: { AppSection, AppHeading },
  setup() {
    let counter = ref({});
    const computeKeyName = keyName =>
      counter.value.results?.reduce((p, n) => p + +n[keyName], 0);
    const dayCount = computed(() => computeKeyName("DayCount"));
    const yearCount = computed(() => computeKeyName("YearCount"));
    const getCounter = async () => {
      counter.value = await counterApi.getCounter();
    };

    onMounted(getCounter);

    return { dayCount, yearCount };
  }
};
</script>
