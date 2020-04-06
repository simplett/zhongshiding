<template>
  <div class="scend">
    <el-row>
      <div :style="{backgroundImage:`url(${image})`}" class="main">尽展所长，出色表演</div>
    </el-row>
    <el-tabs v-model="TagActiveName" type="card">
      <el-tab-pane label="公司简介" name="0">大事件</el-tab-pane>
      <el-tab-pane label="发展历程" name="1">
        <Great-Influence />
        <history v-if="showmyTab" />
        <div v-if="!showmyTab" class="adout-item three">
          <el-row>
            <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
              <el-tab-pane label="大事件" name="first">
                <things />
              </el-tab-pane>
              <el-tab-pane label="荣誉资质" name="second">
                <hoor />
              </el-tab-pane>
              <el-tab-pane label="用户认可" name="third">
                <Accept />
              </el-tab-pane>
            </el-tabs>
            <!-- <ul>
          <li v-for="(item,i) in LiName" :key="i" @click="LiClick(i,$event)">{{item}}</li>
            </ul>-->
          </el-row>
          <component v-bind:is="currentTabComponent"></component>
        </div>
      </el-tab-pane>
      <el-tab-pane label="联系我们" name="2">用户认可</el-tab-pane>
      <el-tab-pane label="加入我们" name="3">用户认可</el-tab-pane>
    </el-tabs>
  </div>
</template> 

<script>
import GreatInfluence from "../../components/AboutCompany/GreatInfluence";
import Hoor from "../../components/AboutCompany/Honour.vue";
import Accept from "../../components/AboutCompany/Accept.vue";
import Things from "../../components/AboutCompany/LongThings.vue";
import History from "../../components/AboutCompany/History.vue";
export default {
  components: {
    GreatInfluence,
    Hoor,
    Accept,
    Things,
    History
  },
  name: "noPages",
  data() {
    return {
      image: require("../../assets/images/fzlc_one.png"),
      // activeName: "first",
      LiName: ["大事件", "荣誉资质", "用户认可"],
      TagName: ["公司简介", "发展历程", "联系我们", "加入我们"],
      TagActiveName: "1"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    Changetab() {
      this.$store.commit("setshowmytab", true);
    }
  },
  computed: {
    activeName() {
      return this.$store.state.activeName;
    },
    showmyTab() {
      return this.$store.state.showmytab;
    }
  }
};
</script>

<style scoped>
.main {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 400px;
  text-align: center;
  line-height: 400px;
  font-size: 6em;
  font-family: "微软雅黑";
  color: #ffffff;
  font-weight: bold;
}
.adout-item {
  width: 100%;
  height: 700px;
  position: relative;
  /* margin-top: 500px; */
  background-color: #202020;
}
ul {
  align-items: center;
  list-style: none;
  display: inline-flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}
ul > li {
  display: inline-block;
  margin: auto 20px;
  font-size: 1.3em;
  color: gray;
}
/* .scend {
  background-color: #202020;
} */
/* .el-tabs__nav {
  float: right !important;
} */
.scend >>> .el-tabs__item {
  padding: 0 20px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  border: red solid 0px !important;
}
.scend >>> .el-tabs__nav {
  white-space: nowrap;
  position: relative;
  transition: -webkit-transform 0.3s;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: right;
  z-index: 2;
  border: red solid 0px !important;
}
.scend >>> .el-tabs__item.is-active {
  color: blue !important;
}
.scend >>> .el-tabs__header {
  padding: 0;
  position: relative;
  margin: 0px 30px 0px auto;
  border: 0px solid red;
}

.three >>> .el-tabs__item {
  padding: 0 20px;
  height: 40px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 40px;
  display: inline-block;
  list-style: none;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  position: relative;
  border: red solid 0px !important;
}
.three >>> .el-tabs__nav {
  white-space: nowrap;
  /* position: absolute; */
  transition: -webkit-transform 0.3s;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  float: none !important;
  display: flex;
  z-index: 2;
  /* transform: translateX(-50%); */
  /* left: 50%; */
  /* border: red solid 2px !important; */
}
.three >>> .el-tabs__item.is-active {
  color: #ffffff !important;
}
.three >>> .el-tabs__item {
  color: #666666 !important;
  font-family: "微软雅黑";
  font-weight: bold;
}
.three >>> .el-tabs__header {
  padding: 0;
  position: relative;
  margin: auto auto;
}
.three >>> .el-tabs__nav-scroll {
  overflow: hidden;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-wrap: wrap;
  position: relative;
}
</style>