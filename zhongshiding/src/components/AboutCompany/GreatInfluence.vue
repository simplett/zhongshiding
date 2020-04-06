<template>
  <div class="scend">
    <div :style="{backgroundImage:`url(${image})`}" class="about">
      <div class="center_image-text">
        <h1 style="color:#fff;font-size:3.5em;">THINK REALIZE CREATE</h1>

        <h1 style="color:#fff;font-size:1.5em;">思考 · 实现 · 创造</h1>
        <el-button style="color:#fff" round>
          了解更多 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <i
            class="el-icon-arrow-rightx el-icon-arrow-right"
          ></i>
        </el-button>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "noPages",
  data() {
    return {
      image: require("../../assets/images/fzlc_three.png")
    };
  }
};
</script>

<style scoped>
h1 {
  margin: 5px auto 20px;
}
.center_image-text {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.about {
  position: relative;
  width: 100%;
  height: 700px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center !important;
  clear: both;
  font-family: "微软雅黑";
  font-weight: bold;
}
.el-button.is-round {
  border-radius: 10px !important;
  padding: 12px 23px;
  background-color: transparent;
}
</style>