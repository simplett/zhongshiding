<!--首页-->
<template>
  <div id="home">
    <div class="banner">
      <div class="banner_img">
        <img :src="item" alt="" v-for="(item,index) in imgUrl" :key="item">
      </div>
      <div class="banner_title">
        <div>
          <ul>
            <li class="icon iconfont iconjiejuefangan"></li>
            <li class="li_active" v-for="(item,index) in menuList" :key="item.title" @mouseover="setContentEventNone(index)" @mouseout="setContentEventBlock">{{item.title}}</li>
            <li v-for="(item,index) in imgUrl" :key="index" :class="nowIndex===index?'img_active':''" @mouseover="stopCarouselEvent" @mouseout="startCarouselEvent" @click="selectCarouselEvent(index)">
              <img :src="item" alt="">
            </li>
          </ul>
          <div class="banner_content" id="banner_content"  v-if="selectIndex!==''">
            <div  v-if="menuList[selectIndex].info!==''">
              <div>
                <img :src="menuList[selectIndex].info.imgUrl" alt="">
              </div>
              <div>
                <h2>{{menuList[selectIndex].info.title}}</h2>
                <div>
                  <div v-for="(item,index) in menuList[selectIndex].info.subtitle" :key="index">
                    <h3>{{item.title}}</h3>
                    <i></i>
                    <p v-for="(i,index_) in item.content" :key="index_">{{i}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      imgUrl:[
        require('../../assets/banner01.png'),
        require('../../assets/banner02.png'),
        require('../../assets/banner03.png'),
        require('../../assets/banner04.png'),
      ],
      menuList: [
        {title:'教育教学',path:'',info:{imgUrl:require('../../assets/banner01.png'),title:'企业培训解决方案',subtitle:[
              {title:'虚拟样机设计与协同仿真验证',content:['虚拟样机设计验证仿真','虚拟装配维修仿真','虚拟样机人际功效验证仿真']},
              {title:'半实物仿真模拟培训系统',content:['VST半实物仿真培训平台','飞机训练模拟器','交互式电子沙盘','虚拟驾驶']},
              {title:'大数据可视化与检测分析',content:['内容与大数据互联网平台']},
            ]}},
        {title:'企业培训',path:'',info:{imgUrl:require('../../assets/banner02.png'),title:'企业培训解决方案',subtitle:[
              {title:'虚拟样机设计与协同仿真验证',content:['虚拟样机设计验证仿真','虚拟装配维修仿真','虚拟样机人际功效验证仿真']},
              {title:'半实物仿真模拟培训系统',content:['VST半实物仿真培训平台','飞机训练模拟器','交互式电子沙盘','虚拟驾驶']},
              {title:'大数据可视化与检测分析',content:['内容与大数据互联网平台']},
            ]}},
        {title:'展示营销',path:'',info:{imgUrl:require('../../assets/banner03.png'),title:'企业培训解决方案',subtitle:[
              {title:'虚拟样机设计与协同仿真验证',content:['虚拟样机设计验证仿真','虚拟装配维修仿真','虚拟样机人际功效验证仿真']},
              {title:'半实物仿真模拟培训系统',content:['VST半实物仿真培训平台','飞机训练模拟器','交互式电子沙盘','虚拟驾驶']},
              {title:'大数据可视化与检测分析',content:['内容与大数据互联网平台']},
            ]}},
        {title:'安防应急',path:'',info:''},
        {title:'能源电力',path:'',info:''},
        {title:'政府军工',path:'',info:''},
        {title:'工业4.0',path:'',info:''},
        {title:'5G+VR',path:'',info:''},
      ],
      nowIndex:0, //当前图片轮播下标
      timer:null,//定时器
      selectIndex:'',
    }
  },
  methods:{
    //轮播下显示
    setContentEventNone(index){
      this.selectIndex = index
      this.$nextTick(()=>{ document.getElementById('banner_content').style.display = 'block'})
    },
    //轮播下隐藏
    setContentEventBlock(){
      this.$nextTick(()=>{ document.getElementById('banner_content').style.display = 'block'})
      this.selectIndex = ''
    },
    //选择图片
    selectCarouselEvent(index){
      clearInterval(this.timer)
      this.nowIndex = index
      let banner = document.querySelectorAll('.banner_img>img')
      for(var i=0;i<banner.length;i++){
        banner[i].style.opacity = 0
      }
      banner[this.nowIndex].style.opacity = 1
    },
    //鼠标离开 启动轮播
    startCarouselEvent(){
      this.carouselEvent()
    },
    //鼠标停留 暂停轮播
    stopCarouselEvent(){
      clearInterval(this.timer)
    },
    //图片轮播
    carouselEvent(){
      clearInterval(this.timer)
      const self = this
      let banner = document.querySelectorAll('.banner_img>img')
      this.timer = setInterval(()=>{
        for(var i=0;i<banner.length;i++){
          banner[i].style.opacity = 0
        }
        if(self.nowIndex === banner.length-1){
          self.nowIndex = 0
        }else{
          self.nowIndex++
        }
        banner[self.nowIndex].style.opacity = 1
      },4000)
    }
  },
  mounted() {
      let banner = document.querySelectorAll('.banner_img>img')
      this.nowIndex = banner.length-1
      this.carouselEvent()
  },
  //清除定时器
  destroyed() {
    clearInterval(this.timer)
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style scoped lang="scss">
  #home{
    width: 100%;
    .banner{
      width: 100%;
      .banner_img{
        width: 100%;
        height:870px;
        background-color: #ccc;
        position: relative;
        &>img{
          height:870px;
          width: 100%;
          position: absolute;
        }
      }
      .banner_title{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        &>div{
          width: auto;
          position: relative;
          &>ul{
            display: flex;
            li{
              height: 80px;
              width: 115px;
              background-color: #444444;
              text-align: center;
              line-height: 80px;
              border: 2px solid #292929;
              color: #cccccc;
              font-size: 16px;
              font-weight:bold;
              overflow: hidden;
              position: relative;
              top: -43px;
              cursor: pointer;
              img{
                display: inline-block;
                width: 100%;
                height: 100%;
              }
            }
            li:first-child{
              border-radius:6px 0px 0px 6px;
            }
            li:last-child{
              border-radius:0px 6px 6px 0px;
            }
            .li_active:hover{
              background-color: #292929;
              color: white;
            }
            .img_active:after{
              content: '';
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              border: 1px solid #136BFD;
              display: block;
            }
            li:first-child{
              font-size: 30px;
              color: #878787;
              background-color: #292929;
            }
            li+li{
              margin-left: -2px;
            }
          }
          .banner_content{
            position: absolute;
            height: 575px;
            width: 100%;
            background-color: #272727;
            color: white;
            margin-top:-690px ;
            display: block;
           &>div{
             width: 100%;
             height: 100%;
             display: flex;
             &>div:nth-of-type(1){
               height: 100%;
               width: 510px;
               img{
                 /*width: auto;*/
                 width: 100%;
                 height: 100%;
               }
             }
             &>div:nth-of-type(2){
               width: 1010px;
               padding: 44px 57px;
               box-sizing: border-box;
               &>h2{
                 width: 100%;
                 height: 55px;
                 font-size:42px;
                 line-height:55px;
                 margin-bottom: 57px;
               }
               &>div{
                 width: 100%;
                 height: auto;
                 display: flex;
                 flex-wrap: wrap;
                 &>div{
                   width: 50%;
                   h3{
                     font-weight:bold;
                     font-size:16px;
                   }
                   i{
                     display: block;
                     width:67px;
                     border: 1px solid #FFFFFF;
                     margin: 15px 0 19px 0;
                   }
                   p{
                     line-height: 43px;
                     font-size:14px;
                     color: #cccccc;
                   }
                 }
               }
             }
           }
          }
        }
      }
    }
  }
</style>
