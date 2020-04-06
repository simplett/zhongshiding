<template>
    <div id="tab">
        <div class="logo">
            <h1></h1>
        </div>
        <div class="tab_menu">
            <router-link :to="item.path&&item.path!==''?item.path:' '" v-for="(item,index) in menuList " :key="index"
                         :_t_nav="item.name!=='ecology'&&item.name!=='about'?item.name:' '">{{item.title}}
                <div class="tab_menu_nav" v-for="(info, index_) in ecologyMenuList" :key="index_" v-if="item.name==='ecology'">
                    <div v-for="(x,index) in info.childList" :key="index">
                        <a href="" :class="x.path?'active_':''">{{x.title}}</a>
                    </div>
                </div>
                <div class="tab_menu_nav" v-for="(info, index_) in aboutMenuList" :key="index_" v-if="item.name==='about'">
                    <div v-for="(x,index) in info.childList" :key="index">
                        <a href="" :class="x.path?'active_':''">{{x.title}}</a>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="tab_right">
            <span class="icon iconfont iconsousuo"></span>
            <span class="icon iconfont iconfabu"></span>
            <span class="icon iconfont iconyonghu-"></span>
            <span class="bgcolor">下载试用</span>
        </div>
        <div class="navigation">
            <div v-for="i in navDetails" :key="i.id" :id="i.id"class="nav-down-menu" style="display:none;" :_t_nav="i.id">
                <div class="navigation-down-inner">
                    <template v-for="item in i.childList">
                       <div class="navMenu">
                           <div class="navMenu_title" v-if="item.title">
                               {{item.title}}
                           </div>
                           <div class="navMenu_inner">
                               <div>
                                   <div class="menu-1"  v-for="(y,index) in item.childList" :key="index" v-if="index<6">
                                       <a href="" :class="y.path?'active_':''">{{y.title}}</a>
                                   </div>
                               </div>
                               <div>
                                   <div class="menu-1"  v-for="(x,index) in item.childList" :key="index" v-if="index>5">
                                       <a href="" :class="x.path?'active_':''">{{x.title}}</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Tabs",
        data() {
            return {
                menuList: [
                    {
                        name: 'home',
                        title: '首页',
                        path: '/home'
                    },
                    {
                        name: 'products',
                        title: '平台产品',
                    },
                    {
                        name: 'program',
                        title: '解决方案'
                    },
                    {
                        name: 'ecology',
                        title: '生态平台'
                    },
                    {
                        name: 'support',
                        title: '服务支持',
                        path: ''
                    },
                    {
                        name: 'about',
                        title: '关于我们'
                    },
                ],
                navDetails: [
                    {
                        id: 'products',
                        childList: [
                            {
                                title: '软件产品',
                                childList: [
                                    {
                                        title: 'VRP 2020',
                                        path: ' '
                                    },
                                    {
                                        title: '虚拟旅游平台',
                                        path: ' '
                                    },
                                    {
                                        title: '虚拟邮轮平台',
                                        path: ' '
                                    },
                                    {
                                        title: '智能可视化综合管理平台',
                                        path: ' '
                                    },
                                    {
                                        title: '极光渲染引擎',
                                        path: ' '
                                    },
                                    {
                                        title: '典居',
                                        path: ' '
                                    },
                                    {
                                        title: '网上虚拟三维展馆',
                                        path: ' '
                                    },
                                    {
                                        title: '典境-全景平台',
                                        path: ' '
                                    }
                                ]
                            },
                            {
                                title: '硬件产品',
                                childList: [
                                    {
                                        title: '自主研发',
                                    },
                                    {
                                        title: 'AR派',
                                        path: ' '
                                    },
                                    {
                                        title: '全息台',
                                        path: ' '
                                    },
                                    {
                                        title: 'HoloBook',
                                        path: ' '
                                    },
                                    {
                                        title: 'AR台',
                                        path: ' '
                                    },
                                    {
                                        title: '系统集成',
                                    },
                                    {
                                        title: '太空间定位交互系统',
                                        path: ' '
                                    },
                                    {
                                        title: 'CADWall系统',
                                        path: ' '
                                    }
                                    ,
                                    {
                                        title: '环幕投影VR实验室',
                                        path: ' '
                                    }
                                    ,
                                    {
                                        title: '球幕系统',
                                        path: ' '
                                    }
                                    ,
                                    {
                                        title: '半实物仿真系统',
                                        path: ' '
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'program',
                        childList: [
                            {
                                childList:[

                                    {
                                        title: '教育教学',
                                        path: ' '
                                    },
                                    {
                                        title: '企业培训',
                                        path: ' '
                                    },
                                    {
                                        title: '展示营销',
                                        path: ' '
                                    },
                                    {
                                        title: '能源动力',
                                        path: ' '
                                    },
                                    {
                                        title: '安防应急',
                                        path: ' '
                                    },
                                    {
                                        title: '工业4.0',
                                        path: ' '
                                    },
                                    {
                                        title: '地产家居',
                                        path: ' '
                                    },
                                    {
                                        title: '政府军工',
                                        path: ' '
                                    },
                                    {
                                        title: '5G+VR应用',
                                        path: ' '
                                    }
                                ]
                            }
                        ]
                    }
                ],
                ecologyMenuList:[
                    {
                        id: 'ecology',
                        childList: [
                            {
                                title: '内容平台',
                                path: ' '
                            },
                            {
                                title: '资源平台',
                                path: ' '
                            },
                            {
                                title: 'VR创作者平台',
                                path: ' '
                            },
                            {
                                title: '合作伙伴',
                                path: ' '
                            }
                        ]
                    }
                ],
                aboutMenuList:[
                    {
                        id: 'about',
                        childList: [
                            {
                                title: '公司简介',
                                path: ' '
                            },
                            {
                                title: '发展历程',
                                path: ' '
                            },
                            {
                                title: '联系我们',
                                path: ' '
                            },
                            {
                                title: '加入我们',
                                path: ' '
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
        },
        mounted() {
            jQuery(document).ready(function () {
                let qcloud = {};
                let dom = jQuery('[_t_nav]')
                dom.hover(function () {
                    var _nav = $(this).attr('_t_nav');
                   if(_nav&&_nav!==' '){ //判断是否有自定义属性值
                       clearTimeout(qcloud[_nav + '_timer']);
                       qcloud[_nav + '_timer'] = setTimeout(function () {
                           $('[_t_nav]').each(function () {
                               $(this)[_nav === $(this).attr('_t_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
                           });
                           $('#' + _nav).stop(true, true).slideDown(200);
                       }, 150);
                   }
                }, function () {
                    var _nav = $(this).attr('_t_nav');
                    if(_nav&&_nav!==' '){//判断是否有自定义属性值
                        clearTimeout(qcloud[_nav + '_timer']);
                        qcloud[_nav + '_timer'] = setTimeout(function () {
                            $('[_t_nav]').removeClass('nav-up-selected');
                            $('#' + _nav).stop(true, true).slideUp(200);
                        }, 150);
                    }
                });
            });
        }
    }
</script>

<style scoped lang="scss">
    #tab {
        width: 100%;
        height: 65px;
        background-color: #101010;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        position: relative;

        .logo {
            padding-left: 70px;

            & > h1 {
                background-image: url("../../assets/Group.png");
                background-repeat: no-repeat;
                height: 37px;
                width: 190px;
            }
        }

        .tab_right {
            display: flex;

            span {
                display: block;
                height: 65px;
                width: 50px;
                line-height: 65px;
                text-align: center;
                font-size: 20px;
                cursor: pointer;
            }

            span:last-child {
                width: 140px;
                height: 65px;
                font-size: 16px;
                font-weight: bold;
                margin-left: 25px;
            }

            span:last-child:hover {
                background-color: rgba(19, 107, 253, 0.77);
            }
        }

        .tab_menu {
            display: flex;
            position: relative;
            & > a {
                display: block !important;
                line-height: 65px;
                padding: 0 29px;
                background: #101010;
                color: white;
                font-size: 16px;
                font-weight: bold;
                position: relative;
                &>div{
                    display: block;
                }
            }

            & > a:hover {
                & > div {
                    padding: 10px 0;
                    height: auto;
                    display: block;
                }
                background: #211E21;
            }

            & > a:hover:before {
                content: '';
                display: block;
                background: #146BFD;
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
            }

            .router-link-active {
                background: #211E21;
            }

            .router-link-active:before {
                content: '';
                display: block;
                background: #146BFD;
                position: absolute;
                width: 100%;
                height: 3px;
                left: 0;
            }
            .tab_menu_nav{
                position: absolute;
                top: 64px;
                left: 0;
                background: #1F1F1F;
                overflow: hidden;
                height: 0;
                z-index: 9999;
                transition: all 0.3s ;
                &>div{
                    box-sizing: border-box;
                    &>a{
                        height: 44px;
                        width: 180px;
                        padding-left: 20px;
                        line-height: 44px;
                        box-sizing: border-box;
                        position: relative;
                        font-weight: normal;
                        font-size: 14px;
                    }
                    &>a:hover{
                        background:#101012 ;
                    }
                    &>a:hover:before{
                        content: '';
                        background: #136BFD;
                        position: absolute;
                        left: 0;
                        height: 100%;
                        border: 1px solid #136BFD;
                    }
                }
            }
        }

        .navigation {
            position: absolute;
            top: 65px;
            left: 0px;
            width: 100%;
            z-index: 999;
            background: #211E21;
            .nav-down-menu {
                width: 100%;
                margin: 0;
                background: #211E21;
                position: absolute;
                top: 0px
            }
            .nav-down-menu .navigation-down-inner {
                margin:0 auto ;
                width: 1200px;
                position: relative;
                color: white;
                font-size: 14px;
                display: flex;
                padding: 10px 0 10px;
                .navMenu{
                    .navMenu_title{
                        color: #136BFD;
                        font-size: 16px;
                        font-weight:bold;
                        border-left: 1px solid rgba(135, 135, 135, 0.31);
                        border-right: 1px solid rgba(135, 135, 135, 0.31);
                        width: 258px;
                        padding: 20px 0 23px 20px;
                    }
                    .navMenu_inner{
                        display: flex;
                        &>div{
                            border-left: 1px solid rgba(135, 135, 135, 0.31);
                        }
                        .menu-1{
                            width: 278px;
                            height: 44px;
                            font-size: 14px;
                            a{
                                height: 100%;
                                width: 100%;
                                padding-left: 20px;
                                line-height: 44px;
                                box-sizing: border-box;
                                position: relative;
                            }
                            &>a:hover{
                                background:#101012 ;
                            }
                            &>a:hover:before{
                                content: '';
                                background: #136BFD;
                                position: absolute;
                                left: 0;
                                height: 100%;
                                border: 1px solid #136BFD;
                            }
                        }
                    }
                }
            }
        }

        .active_{
            display: block;
            color: white;
        }
    }
</style>