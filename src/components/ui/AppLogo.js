import { ref, onMounted } from "vue";

import "@/stylesheets/components/logo.scss";

export default {
  setup() {
    let logo = ref(null);

    const getLogo = async () => {
      const img = await import(/* webpackMode: 'lazy' */ "@/assets/logo.svg");
      logo.value = img.default;
    };

    onMounted(getLogo);

    return { logo };
  },
  render({ logo }) {
    return (
      <img className="app__logo" src={logo} alt="Logo" width={62} height={66} />
    );
  }
};
