import { createApp } from "vue";
import App from "./App.vue";
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCircleQuestion,
  faNewspaper,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircleQuestion, faNewspaper, faRobot);

const app = createApp(App);
app.use(BootstrapVue3);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
