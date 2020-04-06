<template>
  <div>
    <div class="block">
      <el-carousel arrow="always" :gutter="10" :key="9879798789" :autoplay="false" height="500px">
        <el-carousel-item v-for="i in 2" :key="i">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <el-row type="flex" justify="space-around">
            <el-col :span="4" v-for="(item,j) in messges[i-1]" :key="j">
              <div @mouseover="Changeisshow(item.name)" v-if="isshow[item.name]" class="myitem">
                <div v-if="item.show" style="height:180px">
                  <el-image :src="item.image" />
                </div>
                <el-divider v-if="item.show"></el-divider>
                <div style="height:180px">
                  <div class="title">{{item.title}}</div>
                  <div class="myEL"></div>
                  <div class="descraption">{{item.descraption}}</div>
                </div>
                <el-divider v-if="!item.show"></el-divider>
                <div v-if="!item.show" style="height:180px">
                  <el-image :src="item.image" />
                </div>
              </div>
              <div
                @mouseleave="rename(item.name)"
                v-if="!isshow[item.name]"
                class="myitem border-style"
              >
                <div class="mylyaot" style="height:180px">
                  <div class="myEL"></div>

                  <div style="cursor:pointer" class="title mytitle">
                    <span>{{item.title}}</span>
                  </div>
                </div>
                <el-divider></el-divider>
                <div style="height:180px">
                  <div style="color:#ffffff" class="descraption">{{item.descraption}}</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isshow: {
        "1": true,
        "2": true,
        "3": true,
        "4": true,
        "5": true,
        "6": true,
        "7": true,
        "8": true
      },
      messges: [
        [
          {
            name: "1",
            show: true,
            image: require("../../assets/images/Accept/1.png"),
            title: "研发优势",
            descraption:
              "中视典数字科技始终以研发人员为主，对产品研发领域一贯保持高度的重视和投入，多年的研发经验积累，使公司拥有很高的研发壁垒。持续不断的创新、创造、领跑行业"
          },
          {
            name: "2",
            show: false,
            image: require("../../assets/images/Accept/2.png"),
            title: "产品优势",
            descraption:
              "持续不断的产品打磨，使中视典拥有了完整的产品谱系，包括软件和硬件以及定制化解决方案组成的全方位产品体系，能满足市场和客户的各类需求。"
          },
          {
            name: "3",
            show: true,
            image: require("../../assets/images/Accept/3.png"),
            title: "市场优势",
            descraption:
              "发展至今，中视典在国内外的教育实训、工程机械、军事演练、数据可视化、数字营销、设计展示、交互艺术等多项领域积累了丰富的客户与销售渠道，服务1000多所高校用户、5万多企业与个人用户，完成项目3000多个"
          },
          {
            name: "4",
            show: false,
            image: require("../../assets/images/Accept/4.png"),
            title: "独立自主的开发引擎",
            descraption:
              "VRP是国内唯一一款具有完全自主知识产权的虚拟现实开发引擎，积累源代码达到600万行，源源不断的研发投入和更新迭代，满足日益丰富的软硬件环境"
          }
        ],
        [
          {
            name: "5",
            show: true,
            image: require("../../assets/images/Accept/5.png"),
            title: "自主创新的硬件设备",
            descraption:
              "公司深耕虚拟现实领域多年，深知用户的需求和痛点；在不断完善软件产品的基础上，持续投入配套的硬件研发，开发出了一系列创新的虚拟现实应用设备"
          },
          {
            name: "6",
            show: false,
            image: require("../../assets/images/Accept/6.png"),
            title: "自主研发的支撑平台",
            descraption:
              "公司深知平台赋能的重要性，创造性的研发出支撑整个公司产品生态的典云平台，实现为用户、为开发者、为生态赋能的重要作用"
          },
          {
            name: "7",
            show: true,
            image: require("../../assets/images/Accept/7.png"),
            title: "丰富的行业经验积累",
            descraption:
              "公司在近二十年的发展历程中，完成了大量项目，覆盖工业，旅游，能源，安全等行业，行业经验积累深厚，为行业用户提高效率、节约成本做出重大贡献"
          },
          {
            name: "8",
            show: false,
            image: require("../../assets/images/Accept/8.png"),
            title: "丰富的行业经验积累",
            descraption:
              "公司在近二十年的发展历程中，完成了大量项目，覆盖工业，旅游，能源，安全等行业，行业经验积累深厚，为行业用户提高效率、节约成本做出重大贡献"
          }
        ]
      ]
    };
  },
  methods: {
    Changeisshow(name) {
      console.log("鼠标移入");
      this.isshow[name] = false;
    },
    rename(name) {
      console.log("鼠标移出");

      this.isshow[name] = true;
    }
  }
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.title {
  text-align: center;
  padding-bottom: 20px;
  /* border-bottom: 3px solid #ffffff; */
  min-height: 31px;
  max-height: 62px;
  line-height: 31px;
  /* margin-right: 40px; */
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 15px;
  /* width: 120px; */
  color: #ffffff;
  font-family: "微软雅黑";
}
.myEL {
  /* display: block; */
  border-bottom: 3px solid #fff;
  box-sizing: border-box;
  width: 30px;
  height: 0px;
  position: relative;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  left: 50%;
  margin-left: -20px;
}
.border-style {
  border: 2px solid #136bfd;
  box-sizing: border-box;
  padding: 30px 10px;
  box-shadow: 0px 0px 2px 8px #303030;
}
.descraption {
  text-align: center;
  padding-top: 20px;
  font-family: "微软雅黑";
  color: #999999;
}
.myitem {
  margin: 80px 5px;
  text-align: left;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.mylyaot {
  display: flex;
  flex-direction: column-reverse;
}
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.grid-content {
  margin-top: 30px;
  text-align: center;
  /* font-size: 1.8em; */
  line-height: 40px;
  font-family: "微软雅黑";
  /* font-weight: 600; */
  color: #fff;
  /* font-size: 30px; */
}
.block {
  margin-top: 90px;
}
.block >>> .el-carousel__button {
  display: block;
  opacity: 0.48;
  width: 7px !important;
  height: 7px !important;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.block >>> .el-carousel__arrow:hover {
  background-color: #136bfd;
}
.block >>> .el-carousel__arrow {
  border: none;
  outline: 0;
  padding: 0;
  margin: 0;
  height: 36px;
  width: 36px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 4px;
  background-color: rgba(31, 45, 61, 0.11);
  color: #fff;
  position: absolute;
  top: 50%;
  z-index: 10;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  font-size: 12px;
}
.block
  >>> .el-carousel__indicator--horizontal.is-active
  > .el-carousel__button {
  background-color: #136bfd;
}
</style>