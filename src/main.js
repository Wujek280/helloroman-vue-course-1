import Vue from "vue";
// import App from "./App.vue";

Vue.config.productionTip = false;

const GlobalSearch = {
  name: "GlobalSearch",
  methods: {
    registerGlobalSearch(e) {
      console.log(e.target.value);
    }
  },
  data: {
    styleWrapper: {
      position: "relative",
      maxWidth: "150px"
    },
    styleInput: {
      margin: "0",
      width: "100%",
      minWidth: "100px"
    },
    styleClearButton: {
      position: "absolute",
      top: "0",
      right: "0px",
      padding: "0 7px",
      lineHeight: "19px",
      cursor: "pointer"
    }
  },
  template: `
    <div class="wrapper" :style="styleWrapper"">
        <input @input="registerGlobalSearch" :style="styleInput" placeholder=" Szukaj ... ">
        <span title="Kasuj" :style="styleClearButton"> x </span>
    </div>
  `
};

// new Vue({
//   render: h => h(App)
// }).$mount("#app");

new Vue({
  el: "#app",
  data: {
    username: "mjw",
    headingH1: { color: "#226", fontFamily: "Courier" }
  },
  components: {
    GlobalSearch
  },
  methods: {
    doSth() {
      console.log(arguments, this.doSth);
    }
  },
  template: `
  <div> 
    <h2 :style="headingH1" >
      Hello {{username}}
    </h2>
    <GlobalSearch />
    <GlobalSearch />
    <button v-on:click="doSth" >SENT </button>
    </div>`
});
