import { createStore } from 'vuex';
import { sidebar } from './sidebar';

export default createStore({
  state: {
    version: '1.0.0'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    sidebar
  }
});
