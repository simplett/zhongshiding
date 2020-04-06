import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    network: true,
    activeName: "first",
    showmytab: true,
  },
  mutations: {
    setshowmytab(state, bool) {
      state.showmytab = bool;
    },
    loginSuccess(state, params) {
      state.token = params;
    },
    getActiveName(state, params) {
      state.activeName = params;
    },
    //断网提示
    changeNetwork(state, params) {
      state.network = params;
    },
  },
  actions: {},
  modules: {},
});
