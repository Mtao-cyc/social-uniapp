<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
  //获取右上角胶囊信息
  let getMenu = uni.getStorageSync("MenuButton");
  if (!getMenu) {
    const res = uni.getMenuButtonBoundingClientRect();
    uni.setStorageSync("MenuButton", res); //存
  }
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
</style>
