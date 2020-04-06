<template>
    <div id="footer">
       <div>
           <div class="footer_top flex-center">
               <div v-for="(item,index) in bottomMenuList_top" :key="index" @click="item.path!==''?jumpEvent(item.path):''"><i :class="'icon iconfont '+ item.icon"></i> {{item.title}}</div>
           </div>
       </div>
        <div>
            <div class="footer_center">
                <div>
                    <div v-for="(item,index) in bottomMenuList_center" :key="index">
                        <p>{{item.title}}</p>
                        <ul>
                            <li v-for="(info,index_) in item.childTitleList" :key="index_" >
                                <a @click="info.path!==''?jumpEvent(info.path):''" href="javascript:;">{{info.title}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>全国统一热线</p>
                    <h2>400-668-1235</h2>
                    <p>
                        <span v-for="(item,index) in addressList" :key="index">{{index!==0?'|':''}} {{item}} </span>
                    </p>
                    <p>
                        <a href="javascript:;" class="icon iconfont iconweixin">
                            <div>
                                <img src="" alt="">
                            </div>
                        </a>
                        <a href="javasc ript:;" class="icon iconfont iconweibo"></a>
                    </p>
                </div>
            </div>
        </div>
        <div>
            <div class="footer_bottom">
                <p>@2012～2020 All rights reserved 深圳市中视典数字科技有限公司 版权所有 京ICP备13008696</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
            return {
                bottomMenuList_top:[
                    {icon:'iconchanyelian',title:'全产业链资源',path:''},
                    {icon:'iconcishidai',title:'国产次世代虚拟现实引擎',path:''},
                    {icon:'iconjiejuefangan',title:'一站式数字化解决方案',path:''},
                    {icon:'iconjiaoxuepingtai',title:'校企合作产学研平台',path:'' },
                ],
                bottomMenuList_center:[
                    {
                        title:'核心产品',
                        childTitleList:[
                            {title:'VRP 2020',path:''},
                            {title:'全息台',path:''},
                            {title:'AR台',path:''},
                            {title:'HoloBook',path:''},
                        ]
                    },
                    {
                        title:'解决方案',
                        childTitleList:[
                            {title:'教育教学',path:''},
                            {title:'企业培训',path:''},
                            {title:'安防应急',path:''},
                            {title:'工业4.0',path:''},
                        ]
                    },
                    {
                        title:'新闻资讯',
                        childTitleList:[
                            {title:'公司新闻',path:''},
                            {title:'行业资讯',path:''},
                            {title:'媒体资源',path:''}
                        ]
                    },
                    {
                        title:'生态平台',
                        childTitleList:[
                            {title:'内容平台',path:''},
                            {title:'资源平台',path:''},
                            {title:'VR创作服务平台',path:''},
                            {title:'合作伙伴',path:''},
                        ]
                    } ,
                    {
                        title:'服务支持',
                        childTitleList:[
                            {title:'理解产品',path:''},
                            {title:'知识库',path:''},
                            {title:'软件下载',path:''},
                            {title:'社区',path:''},
                        ]
                    },
                    {
                        title:'关于我们',
                        childTitleList:[
                            {title:'公司简介',path:''},
                            {title:'发展历程',path:''},
                            {title:'联系我们',path:''},
                            {title:'加入我们',path:''},
                        ]
                    }
                ],
                addressList:['深圳','北京','武汉','上海','苏州','成都','西安','济南']
            }
        },
        methods:{
            //跳转事件
            jumpEvent(path){
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped lang="scss">
#footer{
    background-color: #101010;
    &>div{
        width: 100%;
        display: flex;
        justify-content: center;
        .footer_top{
            height: auto;
            width: 1380px;
            display: flex;
            margin: 0 auto;
            &>div{
                flex: 1;
                height: 80px;
                font-size: 16px;
                color: white;
                font-weight: bold;
                line-height: 21px;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                &>i{
                    display: block;
                    font-size: 30px;
                    margin-right: 15px;
                }
            }
            &>div:hover{
                background-image: url("../../assets/footer.png");
            }
            &>div:not(:last-child){
                border-right: 2px solid #262626;
            }
        }
        .footer_center{
            padding: 85px 0 113px;
            box-sizing: border-box;
            margin: 0 auto;
            display: flex;
            &>div:nth-of-type(1){
                display: flex;
                &>div{
                    width: 172px;
                    &>p{
                        font-size:16px;
                        font-weight:bold;
                        color:rgba(255,255,255,1);
                    }
                    &>ul{
                        width: 100%;
                        height: auto;
                        margin-top: 20px;
                        &>li{
                            display: inline-block;
                            width: 100%;
                            height: 21px;
                            font-size:16px;
                            line-height:21px;
                            margin-bottom: 12px;
                            &>a{
                                color:rgba(204,204,204,1);
                            }
                            &>a:hover{
                                color: white;
                            }
                        }

                    }
                }
            }
            &>div:nth-of-type(2){
                &>p:nth-of-type(1){
                    font-size:16px;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                }
                &>h2{
                    height:47px;
                    font-size:38px;
                    font-weight:500;
                    color:rgba(19,107,253,1);
                    line-height:47px;
                    margin-top: 17px;
                }
                &>p:nth-of-type(2){
                    height:19px;
                    font-size:14px;
                    color:rgba(204,204,204,1);
                    line-height:19px;
                    margin-top: 7px;
                    span{
                        margin-right: 4px;
                    }
                }
                &>p:nth-of-type(3){
                    /*color:rgba(204,204,204,1);*/
                    margin-top: 21px;
                    a{
                        text-decoration:none;
                        margin-right: 20px;
                        font-size: 30px;
                        color: rgba(255, 255, 255, 0.74);
                        transition: all .5s;
                        position: relative;
                        div{
                            display: none;
                            position: absolute;
                            top:35px;
                            height: 117px;
                            width: 117px;
                            background-color: #FFFFFF;
                        }
                        div:before{
                            position: absolute;
                            top: -7px;
                            left: 10px;
                            content: '';
                            width: 0;
                            height: 0;
                            border-left: 7px solid transparent;
                            border-right: 7px solid transparent;
                            border-bottom: 7px solid #FFFFFF;
                        }
                    }
                    &>a:hover{
                        color: white;
                        div{
                           display: block;
                        }
                    }
                }
            }
        }
        .footer_bottom{
            height: 55px;
            &>p{
                line-height: 55px;
                font-size:14px;
                color:rgba(102,102,102,1);;
            }
        }
    }
    &>div+div{
        border-top: 1px solid #262626;
    }
}
</style>