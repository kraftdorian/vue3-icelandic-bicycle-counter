import { ref, computed, onMounted } from "vue";

import CounterSection from "@/components/CounterSection";

import counterApi from "@/api/counterApi";

export default {
  components: { CounterSection },
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
  },
  render({ dayCount, yearCount }) {
    return (
      <>
        <CounterSection headingText="Daily entries" count={dayCount} />
        <CounterSection headingText="Year entries" count={yearCount} />
      </>
    );
  }
};
