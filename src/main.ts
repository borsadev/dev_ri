/* eslint-disable @typescript-eslint/no-var-requires */
import { createApp } from 'vue';
import App from './App.vue';
import BootstrapVue3 from 'bootstrap-vue-3';

import router from './router';
import store from './store';
import '@/assets/scss/_style.scss';
import { DatePicker } from 'ant-design-vue';
import Antd from 'ant-design-vue';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import VueGoodTablePlugin from 'vue-good-table-next';
//import Antd from 'ant-design-vue';

import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(VueGoodTablePlugin);
app.use(DatePicker);
app.use(store);
app.use(router);
app.use(BootstrapVue3);
app.use(Antd);
app.mount('#app');
