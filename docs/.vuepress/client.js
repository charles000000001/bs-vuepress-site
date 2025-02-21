import { defineClientConfig } from 'vuepress/client';
import Antd from "ant-design-vue";
import BSButton from './components/BSButton.vue';
import BSTable  from "./components/BSTable.vue";
import BSDrawer from "./components/BSDrawer.vue";
export default defineClientConfig({
    enhance({ app }) {
        app.use(Antd);
       app.component('bs-button', BSButton);
       app.component('bs-table', BSTable);
       app.component('bs-drawer', BSDrawer);
    },
});
