import Vue from "vue";
import MainContent from "./MainContent";
import GlobalSearch from "./GlobalSearch";

Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: "#app",
  components: {
    GlobalSearch,
    MainContent
  },
  methods: {},
  template: `<div> <GlobalSearch /> <MainContent /> </div>`
});
