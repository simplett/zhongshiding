<template>
  <div id="app">
    <div v-if="!network">
      <h3>我没网了</h3>
      <div @click="onRefresh">刷新</div>
    </div>
    <!-- <Tabs></Tabs> -->
    <!-- <router-view /> -->
    <about></about>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "./components/public/Footer";
import Tabs from "./components/public/Tabs";
import About from "./views/About/about";
export default {
  name: "App",
  components: {
    [Footer.name]: Footer,
    [Tabs.name]: Tabs,
    About
  },
  provide() {
    //provide / inject  inject:['reload'] this.reload()
    return {
      reload: this.reload
    };
  },
  computed: {
    ...mapState(["network"])
  },
  methods: {
    // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
    onRefresh() {
      location.reload();
    }
  }
};
</script>

<style lang="scss">
#app {
  /*min-width: 1380px;*/
  /*overflow: auto;*/
}
</style>
