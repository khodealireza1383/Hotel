<template>
  <div class="slider">
    <!-- strat details -->
    <div class="title-slider">
      <p>بهترین انتخاب ها برای شما</p>
    </div>
    <div class="content-slider">
      <div class="item-right">
        <div class="detaile-room">
          <div class="title-room">
            <span>رویال </span>
          </div>
          <div class="content-room">
            <div class="mtn-room">
              <p>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا
                صاحب کار خود نشان دهند
              </p>
            </div>
            <div class="nazarat">
              <div class="star">
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
              </div>
              <div class="btn-rezerv">
                <button>دیدن اتاق</button>
              </div>
            </div>
          </div>
        </div>
        <div class="img-room">
          <img src="./hotel.jpg" alt="" />
          <div class="bg-img"></div>
        </div>
      </div>
    </div>
    <!-- finish details -->
    <!-- start carosel -->
    <div class="carosel">
      <div class="btn btn-left">
        <button @click="prev"><span class="material-icons"> arrow_back_ios </span></button>
      </div>
      <div class="slider-img" :style="{transform:`translateX(${index}px)`,transition:`${transition}`}">
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
      </div>
      <div class="btn btn-right">
        <button @click="next"><span class="material-icons"> arrow_forward_ios </span></button>
      </div>
    </div>
    <!-- finish carosel -->
    <!-- start details 2 -->

    <div class="content-slider left-top ">
      <div class="item-right left">
        <div class="detaile-room">
          <div class="title-room">
            <span>رویال </span>
          </div>
          <div class="content-room">
            <div class="mtn-room">
              <p>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا
                صاحب کار خود نشان دهند
              </p>
            </div>
            <div class="nazarat">
              <div class="star">
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
       
              </div>
              <div class="btn-rezerv">
                <button>دیدن اتاق</button>
              </div>
            </div>
          </div>
        </div>
        <div class="img-room left-img">
          <img src="./hotel.jpg" alt="" />
          <div class="bg-img"></div>
        </div>
      </div>
    </div>
    <!-- finish detailes 2 -->
    <!-- start  carosel2   -->
    <div class="carosel top-slider">
      <div class="btn btn-left ">
        <button @click="prev"><span class="material-icons"> arrow_back_ios </span></button>
      </div>
      <div class="slider-img" :style="{transform:`translateX(${index}px)`,transition:`${transition}`}">
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
        <img src="./hotel.jpg" alt="" class="img-slider" />
      </div>
      <div class="btn btn-right">
        <button @click="next"><span class="material-icons"> arrow_forward_ios </span></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      index:0,
      transition:"transform 0.4s ease"
    }
  },
  methods:{
    next(){
      console.log(this.index)
      if(this.index===-1500){
        this.transition="none",
        this.index=0
      }else{
        this.transition="transform 0.4s ease"
        this.index-=500
      }
    },
    prev(){
      if(this.index ===0 ){
this.transition="none";
this.index=-1500
      }else{
        this.transition ="transform 0.2s ease";
        this.index+=500
      }
    }
  }
};
</script>
<style scoped>
.title-slider {
  width: 100%;
  text-align: center;
  position: relative;
  top: -30px;
}
.title-slider p {
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
.item-right {
  width: 80%;
  height: 230px;
  display: flex;
  justify-content: center;
}
.item-right .detaile-room {
  width: 70%;
  height: 100%;
  border-radius: 15px;
  background-color: rgb(36, 76, 128);
}
.mtn-room p {
  width: 80%;
}
.content-room {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nazarat {
  width: 60%;
}
.title-room span {
  color: white;
  font-size: 40px;
  padding-right: 25px;
  position: relative;
  top: 10px;
}
.mtn-room p {
  color: #fff;
  padding-right: 23px;
  text-align: justify;
  text-justify: inter-word;
}
.btn-rezerv {
  width: 130px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  position: relative;
  top: 25px;
  left: 15px;
}
.btn-rezerv button {
  border: none;
  background-color: rgb(58, 111, 179);
  width: 120px;
  color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 25px;
}
.star {
  position: relative;
  left: 10px;
  top: 25px;
  color: white;
}
.img-room {
  width: 250px;
  height: 230px;
  background-color: black;
  margin-right: 20px;
  border-radius: 15px;
  position: relative;
}
.img-room img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 230px;
  border-radius: 15px;
}
.bg-img {
  width: 250px;
  height: 230px;
  background-color: rgba(36, 76, 128, 0.47);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 15px;
  cursor: pointer;
}
.img-room:hover .bg-img {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.carosel {
  width: 73%;
  height: 330px;
  background-color: black;
  overflow: hidden;
  position: relative;
  position: relative;
  top: -50px;
  margin: 0 auto;
  border-radius: 15px;
}
.slider-img {
  display: flex;
}
.img-slider {
  width: 100%;
  height: 330px;
}
.btn {
  outline: none;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: block;
  position: absolute;
  z-index: 10;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-left{
  top:50%;
  transform: translateY(-50%);
  left: 5px;
}
.btn-right{
  top:50%;
  transform: translateY(-50%);
  right: 5px;
}
.left-top{
position: relative;
top: -36px;
}
.left{
display: flex;
flex-direction: row-reverse;
}
.left-img{
position: relative;
left: 20px;
}
.top-slider{
  position: relative;
  top:-22px;
}
</style>