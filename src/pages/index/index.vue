<template>
  <view class="nav-gation" :style="{'background':`url(${img}) no-repeat 0 0/100% 100%`}">
    <view class="nav-top"></view>
    <view class="nav-title">&nbsp;伟大的拼团购物商城</view>
    <view class=""></view>
  </view>
  <view>
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
        :duration="duration">
        <swiper-item v-for="item in banner_list" :key="item.id">
          <view class="swiper-item banner-list">
            <image :src="item.image" alt=""/>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script setup lang="ts" name="index">
import img from "@/static/images/154634368427.jpg"
import util from "@/utils/util"
import { onMounted,ref} from "vue";
const menu_top = ref<string>("60px");
const menu_height = ref<string>("60px");
const banner_list = ref<any>();

onMounted(() => {
  let MenuButton:any=uni.getStorageSync("MenuButton");
  menu_top.value=MenuButton.top+'px';
  menu_height.value=MenuButton.height+'px';
  console.log(666);
  
  util("/banner/list","POST",{}).then((res:any)=>{
    console.log(res);
    if(res.code==200){
      banner_list.value=res.data
    }
  })
});
</script>

<style scoped>
.nav-gation{
  width: 100%;
  background-size: 100% 100%;
}
.nav-top{
  height: v-bind('menu_top');
}
.nav-title{
  height: v-bind('menu_height');
  line-height:v-bind('menu_height');
  font-size: 15px;
  color: rgb(114, 241, 17);
  font-weight: 600;
}
.banner-list{
  width: 100%;
  height:300rpx
}
.banner-list image{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
