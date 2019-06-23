<template>
  <div class="wrapper">
    <input
      :title="(Search.value) ? ('Looking for ' + Search.value) : ('Nothing to search')"
      v-model="Search.value"
      @input="updateState"
      placeholder=" Szukaj ... "
    >
    <span
      title="Kasuj"
      @click="clearSearchField"
      class="clear-button"
      :style="displayRemoveButton"
    >x</span>
  </div>
</template>


<script>
export default {
  name: "GlobalSearch",
  methods: {
    clearSearchField() {
      this.Search.value = null;
      this.updateState();
    },
    updateState() {
      this.displayRemoveButton = this.Search.value
        ? { display: "inline-block" }
        : { display: "none" };
    }
  },
  data() {
    return {
      Search: {
        value: null
      },
      displayRemoveButton: { display: "none" }
    };
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  max-width: 150px;
}
input {
  margin: 0;
  width: 100%;
  min-width: 100p;
}
span.clear-button {
  position: absolute;
  top: 0;
  right: 0px;
  padding: 0 7px;
  line-height: 19px;
  cursor: pointer;
}
</style>

