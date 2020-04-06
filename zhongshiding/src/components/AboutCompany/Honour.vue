<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16" :offset="4">
        <div
          style="font-size:22px,font-family:'微软雅黑',font-weight:'bold',color:#ffffff"
          class="grid-content"
        >资质荣誉:中视典不断探索与创新，在独立研发技术实力的基础上，成为虚拟现实行业整合服务的领军企业。我们获得专利及企业资质等177项，其中实用新型23项</div>
      </el-col>
    </el-row>
    <div class="block">
      <el-carousel :key="84752083520437" :autoplay="false" trigger="click" height="300px">
        <el-carousel-item v-for="(item,i) in messges" :key="i">
          <!-- <h3 class="small">{{ item }}</h3> -->
          <el-row type="flex" class="row-bg" justify="space-around" :gutter="80">
            <el-col :span="6" v-for="(item,j) in messges[i][0]" :key="j">
              <div class="myitem">
                <el-image :src="image.left" />
                <div class="title">{{item.title}}</div>
                <div class="descraption">{{item.descraption}}</div>
                <el-image :src="image.right" />
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" class="row-bg" justify="space-around" :gutter="80">
            <el-col :span="6" v-for="(item,j) in messges[i][1]" :key="j">
              <div class="myitem">
                <el-image :src="image.left" />
                <div class="title">{{item.title}}</div>
                <div class="descraption">{{item.descraption}}</div>
                <el-image :src="image.right" />
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
      image: {
        left: require("../../assets/images/hoonr/left.png"),
        right: require("../../assets/images/hoonr/right.png")
      },
      messges: [
        [
          [
            { title: "高新技术企业", descraption: "深圳科技创新委员会" },
            {
              title: "信息系统集成及服务资质",
              descraption: "中国电子信息行业联合会"
            },
            {
              title: "广东省守合同重信用企业",
              descraption: "圳市市场监督管理局"
            }
          ],
          [
            {
              title: "火箭军研究院合格供方",
              descraption: "火箭军研究院军民融合发展研究中心"
            },
            {
              title: "全国首个虚拟现实核心引擎",
              descraption: "关键技术研究中心"
            },
            {
              title: "三等奖",
              descraption: "最佳人气奖,第二届“绽放杯”5G应用征集大赛"
            }
          ]
        ],
        [
          [
            {
              title: "虚拟现实",
              descraption:
                "科技创新奖，中国虚拟现实与可视化产业技术创新战略联盟"
            },
            {
              title: "中国VR50强",
              descraption: "2019世界VR(虚拟现实)产业大会"
            },
            {
              title: "虚拟现实优秀",
              descraption:
                "技术成果奖，中国虚拟现实与可视化产业技术创新战略联盟"
            }
          ],
          [
            { title: "战略技术合作伙伴", descraption: "百度数字博物馆" },
            { title: "VR优秀品牌奖", descraption: "投影时代年度大屏视听评选" },
            { title: "最佳展示奖", descraption: "中国北京国际科技产业博览会" }
          ]
        ],
        [
          [
            { title: "优秀软件产品", descraption: "中国软件行业协会" },
            { title: "一等奖", descraption: "2010年中国地震减灾优秀成果" },
            { title: "优秀软件产品", descraption: "深圳市软件行业协会" }
          ],
          [
            {
              title: "中国优秀虚拟现实教育软件",
              descraption: "全国游戏与虚拟现实学术会议组委会"
            },
            {
              title: "最佳软件奖",
              descraption: "中国虚拟现实（VR）国际峰会组委会"
            },
            {
              title: "优秀软件产品",
              descraption: "中国国际软件与信息服务交易会组委会"
            }
          ]
        ]
      ]
    };
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
  padding-left: 20px;
  border-right: 3px solid #ffffff;
  min-height: 31px;
  max-height: 62px;
  line-height: 31px;
  /* margin-right: 40px; */
  padding-right: 20px;
  box-sizing: border-box;
  font-size: 24px;
  widows: 120px;
  font-family: "微软雅黑";
  color: #ffffff;
  font-weight: bold;
}
.descraption {
  padding-left: 20px;
  padding-right: 20px;
  font-family: "微软雅黑";
  color: #ffffff;
  font-weight: bold;
}
.myitem {
  margin: 80px 5px;
  text-align: left;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
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