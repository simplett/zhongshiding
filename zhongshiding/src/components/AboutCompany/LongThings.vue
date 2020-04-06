<template>
  <div style="margin-top:30px">
    <div class="show-image">
      <el-row :gutter="20" type="flex" justify="center">
        <el-col v-if="getInfoByyear.left&&getInfoByyear.image&&!getInfoByyear.isLineimg" :span="8">
          <el-image fit="scale-down" v-for="(img,m) in getInfoByyear.image" :key="m" :src="img" />
        </el-col>
        <el-col style="margin:auto 20px;text-align:center" :span="8">
          <div class="year">
            <span>{{getInfoByyear.year}}</span>
          </div>
          <div :class="{isleft:getInfoByyear.iscenter}" class="title">{{getInfoByyear.title}}</div>
          <div class="message" v-if="getInfoByyear.massge">{{getInfoByyear.massge}}</div>
          <el-image
            v-if="getInfoByyear.isLineimg"
            style="margin-top:20px"
            :src="getInfoByyear.image[0]"
            width="100%"
          />
          <div v-if="getInfoByyear.descroption">
            <ul>
              <li v-for="(info,i) in getInfoByyear.descroption" :key="i">{{info}}</li>
            </ul>
          </div>
        </el-col>
        <el-col v-if="!getInfoByyear.left&&getInfoByyear.image&&!getInfoByyear.isLineimg" :span="8">
          <el-image :src="getInfoByyear.image[0]" />
        </el-col>
      </el-row>
    </div>
    <el-image :src="require('../../assets/images/bj_five.png')" />
    <el-row type="flex" class="row-bg" justify="center">
      <el-image :src="require('../../assets/images/dsj.png')" />
      <el-col :span="18">
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-button
            :class="{myfont_change:active == item.year?true:false}"
            class="myfont"
            @click="activeNameChange(item.year)"
            v-for="(item,i) in messges"
            :key="i"
          >{{item.year}}</el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "2016",
      messges: {
        "2002": {
          title: "2002年1月16日中视典成立",
          year: "2002"
        },
        "2005": {
          title: "推出虚拟现实引擎VRP",
          image: [require("../../assets/images/longthings/2005.png")],
          year: "2005",
          left: true
        },
        "2006": {
          title: "VRP入选中国软件 自主创新100强",
          image: [require("../../assets/images/longthings/2006.png")],
          year: "2006",
          left: false
        },
        "2008": {
          iscenter: true,
          title:
            "顺利完成第29届奥运会全景数字仿真、安防流量模拟。项目涵盖2022年北京冬奥会",
          image: [
            require("../../assets/images/longthings/20081.png"),
            require("../../assets/images/longthings/20082.png")
          ],
          massge:
            "中视典数字科技，作为一家国内领先的虚拟现实软件技术开发和内容制作服务商，前后参与了多项08数字奥运仿真项目，在08奥运中发挥了重要的作用，是相关部门指定的08奥运虚拟现实技术服务商",
          descroption: [
            "2008年奥运安防保卫仿真项目年奥运人流分析项目",
            "2008年数字奥运村奥运场馆网络展示",
            "2002年中科院合作数字奥运规划仿真项目"
          ],
          year: "2008",
          left: true
        },
        "2011": {
          title: "正版用户超过10万600多个院校使用VRP作为教学软件",
          image: [require("../../assets/images/longthings/2011.png")],
          year: "2011",
          left: false
        },
        "2012": {
          title: "完成第一个模拟器——VST系统",
          image: [require("../../assets/images/longthings/2012.png")],
          year: "2012",
          left: true
        },
        "2015": {
          title: "推出AR台产品，将增强现实技术赋能行业客户",
          image: [require("../../assets/images/longthings/2015.png")],
          year: "2015",
          left: true
        },
        "2016": {
          title: "率先提出全息教室概念同年启动“典居”产品线，深入家装领域",
          image: [require("../../assets/images/longthings/2016.png")],
          year: "2016"
        },
        "2017": {
          title: "《中视典全息教室》被评为教育信息化优秀产品",
          image: [require("../../assets/images/longthings/2017.png")],
          year: "2017",
          left: false,
          isLineimg: true
        },
        "2018": {
          title: "《中视典全息教室》被评为教育信息化优秀产品",
          image: [require("../../assets/images/longthings/2018.png")],
          year: "2018",
          left: true
        },
        "2019": {
          title:
            "签约2019年第七届世界军人运动会，为大会全面提供物联网三维可视化综合管理平台",
          image: [require("../../assets/images/longthings/2019.png")],
          year: "2019",
          left: false
        },
        "2020": {
          title: "这是新的一年，新的成就",
          image: [require("../../assets/images/longthings/2019.png")],
          year: "2019",
          left: false
        }
      }
    };
  },
  computed: {
    getInfoByyear() {
      console.log(this.activeName);
      return this.messges[this.activeName];
    },
    active() {
      return this.activeName;
    }
  },
  methods: {
    activeNameChange(year) {
      this.activeName = year;
    }
  }
};
</script>
<style scoped>
ul > li {
  text-align: left;
  font-size: 15px;
  color: #fff;
  list-style: square;
  font-size: "微软雅黑";
  font-weight: bold;
}
.year span {
  background: linear-gradient(
    149deg,
    rgba(50, 251, 252, 1) 0%,
    rgba(50, 20, 242, 1) 100%
  );
  font-size: 100px;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "PFDinTextPro-Medium";
  font-weight: 700;
}
.isleft {
  text-align: left !important;
}
.demo >>> .el-button {
  color: #ffffff !important;
}
.title {
  margin-top: 15px;
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: "微软雅黑";
}
.message {
  text-align: left;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 15px;
  color: #fff;
}
.show-image {
  height: 500px;
  width: 90%;
  margin-left: 5%;
}
.show-image >>> .el-row--flex.is-justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.row-bg >>> .el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: transparent;
  border: 0px solid #dcdfe6;
  color: #999999;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.myfont {
  font-family: "微软雅黑" !important;
  font-weight: bold !important;
  color: #999999 !important;
}
.myfont_change {
  color: #ffffff !important;
}
</style>