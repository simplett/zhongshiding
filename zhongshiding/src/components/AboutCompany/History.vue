<template>
  <div>
    <el-row>
      <el-col v-for="(item,i) in Ifon" :key="i" :span="8">
        <div @mouseover="ChangeBg(i)" class="lyaot" :style="{backgroundImage:`url(${item.image})`}">
          <div class="w-100 first">{{item.title1}}</div>
          <div class="w-100 first">{{item.title2}}</div>
          <div @click="changeActivename(item.name)" class="w-100 scend">{{item.title3}}</div>
          <div class="text"></div>
          <div class="w-100 mymsg">{{item.msg}}</div>
          <div v-if="item.isshow">
            <a href="javascript();">了解更多</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Ifon: [
        {
          name: "first",
          image: null,
          title1: "开辟",
          title2: "创新之路",
          title3: "大事记",
          msg:
            "中视典自2002年创立以来一直致力于中国虚拟现实技术自有软件的开发和探索"
        },
        {
          name: "second",
          image: require("../../assets/images/fzlc_two.png"),
          isshow: true,
          title1: "为技术创新",
          title2: "助一臂之力",
          title3: "资质荣誉",
          msg:
            "近20年的创新：从国内第一个虚拟现实平台软件VRPlatform到今天的一站式数字解决方案提供商"
        },
        {
          name: "third",
          image: null,
          title1: "用心",
          title2: "累积成长",
          title3: "客户认可",
          msg:
            "已经为分布在世界各地的5万多家客户带去了价值超过1000所大专院校和科研所成为了中视典的合作伙伴"
        }
      ]
    };
  },
  methods: {
    changeActivename(name) {
      this.$store.commit("getActiveName", name);
      this.$store.commit("setshowmytab", false);
    },
    ChangeBg(index) {
      console.log(index);
      this.Ifon.forEach((item, i) => {
        if (i !== index) {
          this.Ifon[i].image = null;
          console.log("this is background change");
          this.$set(this.Ifon, i, this.Ifon[i]);
        }
      });
      var image = require("../../assets/images/fzlc_two.png");
      this.Ifon[index].image = image;
    }
  }
};
</script>
<style scoped>
.w-100 {
  width: 100%;
}
.first {
  font-size: 50px;
  color: #999999;
  font-weight: 800;
  font-family: "微软雅黑";
}
.scend {
  color: #999999;
  font-size: 20px;
  font-family: "微软雅黑";
  font-weight: bold;
  cursor: pointer;
}
a {
  color: #ffffff;
  font-family: "微软雅黑";
}
.text {
  width: 50px;
  height: 0px;
  border-bottom: 4px solid #fff;
}
.last {
  color: #fff;
  font-size: 25px;
  font-family: "微软雅黑";
  margin-left: 20px;
  margin-right: 20px;
}
.mymsg {
  font-family: "微软雅黑";
  color: #ffffff;
}
.lyaot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: content;
  height: 700px;
  color: #fff;
  background-color: #202020;
}
.lyaot > div {
  text-align: center;
  margin: 15px auto;
  padding: 2px 20px !important;
  box-sizing: border-box;
}
/* .lyaot:nth-child(2) {
  background-image: url("../../assets/images/fzlc_two.png");
} */
</style>