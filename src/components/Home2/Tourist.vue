<template>
  <div class="box-blog">
<div class="bg-blog">
<div class="title-blog">
<p>گردشگری مشهد</p>
</div>
<div class="cont-blog">
<div class="slider">
    <button class="btn btn-right"  :disabled="this.index >700" @click="next">
      <span class="material-icons" > chevron_right </span>
    </button>
    <div
      class="container-slide"
      :style="{
        transform: `translateX(${index}px)`,
        transition: `${transition}`,
      }"
      >
      <div class="item-city">
        <img src="../../assets/img/6(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title center-blog">بام مشهد</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار هفت تیر
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/5(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title">مقبره فردوسی</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار شاهنامه
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/7.jpg" alt="" />
        <div class="bg-color">
          <p class="title center-blog">حرم مطهر</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , خیابان امام رضا
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/6(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title center-blog">بام مشهد</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار هفت تیر
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/5(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title">مقبره فردوسی</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار شاهنامه
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/7.jpg" alt="" />
        <div class="bg-color">
          <p class="title center-blog">حرم مطهر</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , خیابان امام رضا
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/6(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title center-blog">بام مشهد</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار هفت تیر
          </p>
        </div>
      </div>
      <div class="item-city">
        <img src="../../assets/img/5(1).jpg" alt="" />
        <div class="bg-color">
          <p class="title">مقبره فردوسی</p>
          <p class="loc">
            <span class="material-icons"> place </span>مشهد , بلوار شاهنامه
          </p>
          <span></span>
        </div>
      </div>
    </div>
    <button class="btn btn-left" :disabled="this.index <0" @click="prev">
      <span class="material-icons"> chevron_left </span>
    </button>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
name: "slider",
  data() {
    return {
      index: 0,
      transition: "transform 0.2s ease",
    };
  },
  methods: {
    next() {
      if (this.index === -1500) {
        this.transition = "none";
        this.index = 0;
      } else {
        (this.transition = "transform 0.6s ease"), (this.index += 350);
      }
    },
    prev() {
      if (this.index === 0) {
        (this.transition = "none"), (this.index = -100);
      } else {
        (this.transition = "transform 0.6s ease"), (this.index -= 350);
      }
    },
  },
};

</script>

<style scoped>
body{
font-family: 'aban';
direction: rtl;
margin: 0;
padding: 0;
overflow-x: hidden;
}
.box-blog{
display: flex;
justify-content: flex-start;
align-items: flex-end;
flex-direction: column;
height:70vh;


}
.bg-blog{
width: 100%;
height: 650px;
background-color: var(--test);
}
.title-blog p{
text-align: center;
font-size: 44px;
color: white;
position: relative;
top: 0px  ;
}
.slider {
  width: 1300px;
  height: 700px;
  margin: 100px auto 0;
  overflow: hidden;
  position: relative;
  top: -70px;
  left: 14px;

}
.container-slide {
  display: flex;
  width: 3000px;
}
.img-slider {
  width: 500px;
  height: auto;
}
.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  cursor: pointer;
}
.btn span{
    font-size: 40px;
    margin-top: 5px;
}
.btn-left {
  top: 33%;
  left: 0;
  transform: translateY(-50%);
}
.btn-right {
  top: 33%;
  right: 0;
  transform: translateY(-50%);
}
.item-city {
  width: 250px;
  height: 430px;
  margin-right: 20px;
  border-radius: 7px;
  overflow: hidden;
  position: relative;
top: 20px;
transition: all 0.5s ease-in-out;
}

.item-city img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
}
.item-city .bg-color {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 1s ease-in-out;
}

.bg-color .title {
  color: rgb(36, 76, 128);
  font-size: 44px;
  position: absolute;
  top: 0;
  right: 10px;
    transition: all 0.4s ease-in-out;
}
.center-blog {
  margin-right: 35px;
}
.loc {
  position: absolute;
  bottom: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
    transition: all 0.8s ease-in-out;
}
.loc span {
  color: white;
  font-size: 2rem;
  position: relative;
  top: 10px;
}
.item-city:hover{
transform: scale(1.1);
border-radius: 10px;

}
.item-city:hover .title {
  opacity: 0;

}
.item-city:hover .loc {
  opacity: 0;

}
.item-city:hover .bg-color {
  opacity: 0;
  
}
@media only screen and (max-width: 1200px) {
.btn-left{
  left: 10%;
}
.btn-right{
  right: 4%;
}
}
@media only screen and (max-width: 1024px) {
.btn-left{
  left: 23%;
}
}
@media only screen and (max-width: 768px) {
.btn-left{
  left: 43%;
}
}
@media only screen and (max-width: 480px) {
.btn-left{
  left: 63%;
}
}
</style>