import { createApp } from "vue";

import App from "@/App";
import store from "@/store";

// Stylesheets
import "@/stylesheets/global/main.scss";

createApp(App)
  .use(store)
  .mount("#app");
