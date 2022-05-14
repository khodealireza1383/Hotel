<template>
<!-- start range  -->
  <div class="title-range">
    <p>تعیین قیمت</p>
  </div>
  <div class="range">
    <div class="input-range">
      <div class="price-top" ref="priceTop">
        <div class="item-1" :style="color()">
          <div class="con-item">
            <p>100</p>
            <span>هزار تومان</span>
          </div>
        </div>
        <div class="right1">
          <div class="item-1" :style="color2()">
            <div class="con-item">
              <p>300</p>
              <span>هزار تومان</span>
            </div>
          </div>
        </div>
        <div class="right2">
          <div class="item-1" :style="color3()">
            <div class="con-item">
              <p>500</p>
              <span>هزار تومان</span>
            </div>
          </div>
        </div>
        <div class="right3">
          <div class="item-1" :style="color4()">
            <div class="con-item">
              <p>700</p>
              <span>هزار تومان</span>
            </div>
          </div>
        </div>
        <div class="right4">
          <div class="item-1" :style="color5()">
            <div class="con-item">
              <p>800</p>
              <span>هزار تومان</span>
            </div>
          </div>
        </div>
      </div>
      <span class="inex" ref="arzan">ارزان ترین </span>
      <input
        @change="color()"
        v-model="value"
        type="range"
        class="myrange"
        min="0"
        max="8"
      />

      <span class="exp" ref="gron">گرانترین</span>
      <div class="price-bottom" ref="priceBottom">
        <div class="left2">
        <div class="item-2" :style="color6()">
          <div class="con-item">
            <p>200</p>
            <span>هزار تومان</span>
          </div>
        </div>
        </div>
        <div class="left1">
 <div class="item-2" :style="color7()">
          <div class="con-item">
            <p>400</p>
            <span>هزار تومان</span>
          </div>
        </div>
        </div>
         <div class="item-2" :style="color8()">
          <div class="con-item">
            <p>600</p>
            <span>هزار تومان</span>
          </div>
        </div>
         <div class="item-2" :style="color9()">
          <div class="con-item">
            <p>900</p>
            <span>هزار تومان</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 -->
 <!-- finish range -->
</template>

<script>
import { Transition } from "@vue/runtime-dom";
export default {
  data() {
    return {
      value: 0,
      windowtop: 0,
    };
  },
  mounted() {
    var that = this;
    window.addEventListener("scroll", function () {
      that.windowtop = window.pageYOffset;
      console.log(that.windowtop);
      if (that.windowtop > 126) {
        that.$refs.arzan.classList.add("arzon");
        that.$refs.gron.classList.add("gran");
    
      }
    
    });
  },
  methods: {
    color: function () {
      if (this.value >= 0) {
        return {
 opacity:"1",
 Transition:"all 0.3s ease-in"
        };
      }
    },
    color2: function () {
      if (this.value >= 2) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
      color3: function () {
      if (this.value >= 4) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
      color4: function () {
      if (this.value >= 6) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
      color5: function () {
      if (this.value >= 8) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
         color6: function () {
      if (this.value >= 1) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
          color7: function () {
      if (this.value >= 3) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
          color8: function () {
      if (this.value >= 5) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
          color9: function () {
      if (this.value >= 7) {
        return {
          opacity:"1",
           Transition:"all 0.3s ease-in"
        };
      }
    },
  },
};
</script>

<style scoped>

.title-range {
  width: 100%;
  text-align: center;
  position: relative;
  top: -30px;
}
.title-range p {
  font-size: 60px;
  color: rgb(58, 111, 179);
  text-shadow: 3px 0px 1px rgb(139, 185, 245);
}
.content-slider {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: -60px;
}
.range {
  direction: ltr;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price-top {
  display: flex;
  justify-content: space-between;

}

.price-bottom{
  display: flex;
  justify-content: space-around;

}

.item-1 {
  width: 75px;
  height: 45px;
  background-color: rgb(36, 76, 128);
  position: relative;
  left: 10px;
  top: -17px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.item-2 {
  width: 75px;
  height: 45px;
  background-color: rgb(36, 76, 128);
  position: relative;
  left: 10px;
  top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.item-2::before {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  top: -3px;
  left: 7px;
  background-color: rgb(36, 76, 128);
  transform: rotate(45deg);
}
.right4 {
  position: relative;
  left: 30px;
}
.right3 {
  position: relative;
  left: 20px;
}
.right2 {
  position: relative;
  left: 12px;
}
.right1 {
  position: relative;
  left: 5px;
}
.left1{
margin-left: 30px;
}
.left2{
  position: relative;
left: 33px;
}
.con-item {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
}
.con-item p {
  position: relative;
  top: 7px;
  font-size: 19px;
}

.con-item span {
  position: relative;
  top: -23px;
  font-size: 14px;
}
.item-1::before {
  content: "";
  width: 15px;
  height: 15px;
  position: absolute;
  bottom: -3px;
  left: 7px;
  background-color: rgb(36, 76, 128);
  transform: rotate(45deg);
}
/* .con-item p{
   margin-left: 25px;
   margin-top:30px;
   color
} */
.input-range .myrange {
  appearance: none;
  width: 600px;
  height: 30px;
  background-color: rgb(36, 76, 128);
  border-radius: 30px;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s ease-in;
}
.input-range .myrange:hover {
  opacity: 1;
}
.input-range .myrange::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  border: 3px solid gray;
}
.input-range .myrange::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  border: 3px solid gray;
}
.input-range .myrange::-webkit-slider-thumb:hover {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
}
.input-range .myrange::-moz-range-thumb:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
}
.input-range {
  position: relative;
}
.input-range .exp {
  position: absolute;
  height: 40px;
  width: 120px;
  right: -150px;
  top: 40px;
  border: 3px solid rgb(36, 76, 128);
  background-color: rgb(36, 76, 128);
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  font-size: 22px;
  border-radius: 5px;
  animation: moveb 2s ease-in infinite;
  opacity: 0;
}
.input-range .exp::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  background-color: rgb(36, 76, 128);
  top: 13px;
  left: -8px;
  border-top: 3px solid rgb(36, 76, 128);
  border-bottom: 3px solid rgb(36, 76, 128);
  border-left: 3px solid rgb(36, 76, 128);
  border-right: 3px solid rgb(36, 76, 128);
  transform: rotate(45deg);
}
.input-range .inex {
  position: absolute;
  height: 40px;
  width: 120px;
  left: -150px;
  top: 40px;
  border: 3px solid rgb(36, 76, 128);
  background-color: rgb(36, 76, 128);
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  font-size: 22px;
  border-radius: 5px;
  animation: move 2s ease-in infinite;
  opacity: 0;
}
.input-range .inex::before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  background-color: rgb(36, 76, 128);
  top: 13px;
  right: -8px;
  border-top: 3px solid rgb(36, 76, 128);
  border-bottom: 3px solid rgb(36, 76, 128);
  border-left: 3px solid rgb(36, 76, 128);
  border-right: 3px solid rgb(36, 76, 128);
  transform: rotate(45deg);
}
@keyframes move {
  25% {
    transform: translatex(-10px);
  }
  100% {
    transform: translatex(10px);
  }
}
@keyframes moveb {
  25% {
    transform: translatex(-10px);
  }
  100% {
    transform: translatex(10px);
  }
}
.inex.arzon {
  opacity: 1;
  transition: all 1s ease-in;
}
.exp.gran {
  opacity: 1;
  transition: all 1s ease-in;
}
</style>