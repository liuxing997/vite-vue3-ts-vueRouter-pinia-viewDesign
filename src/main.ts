import { createApp } from "vue";
import ViewUIPlus from "view-ui-plus";
import router from "./router";
import store from "./store";
import "./style.css";
import App from "./App.vue";

import "view-ui-plus/src/styles/index.less";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ViewUIPlus);
app.mount("#app");
