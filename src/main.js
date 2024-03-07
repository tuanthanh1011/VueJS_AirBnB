import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AlertBox from "./components/AlertBox.vue";
const app = createApp(App);

app.use(store).use(router);

app.component("AlertBox", AlertBox);

let timeoutId;

app.provide("handleAlertBoxGlobal", (message, status) => {
  clearTimeout(timeoutId);
  store.state.infoAlertBox = {
    isVisible: true,
    message: message,
    status: status,
  };

  timeoutId = setTimeout(() => {
    store.state.infoAlertBox.isVisible = false;
  }, 5000);
});

app.provide("turnOffAlertBox", () => {
  store.state.infoAlertBox.isVisible = false;

  clearTimeout(timeoutId);
});

app.mount("#app");
