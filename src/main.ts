import "virtual:uno.css";
import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

const div = document.createElement("div");
document.body.appendChild(div);

createApp(App).mount(div);
