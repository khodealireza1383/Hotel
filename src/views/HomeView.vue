<template>
  <div class="home">
    <!--  component header start -->
    <div class="header">
      <div class="nav">
        <div class="logo">
          <img src="../assets/img/logo(2).png" alt="" />
          <div class="nav-header">
            <ul>
              <li><router-link to="/" class="hr-home">صفحه اصلی </router-link> </li>
              <li><router-link to="/room" >اتاق ها </router-link> </li>
              <li><a href="#"> درباره ما </a></li>
              <li><a href="#">تماس با ما </a></li>
            </ul>
          </div>
        </div>

        <div class="button-login">
          <button>ورود و ثبت نام</button>
          <p>0513-2677321</p>
        </div>
      </div>
      <div class="search" ref="widthSearch">
        <div class="bg-search">
          <div class="icon-tagh">
            <img src="../assets/img/taghvim.png" alt="" class="shadow-search" />
          </div>
          <div class="khorog-vorod border-search">
            <p>تاریخ ورود | تاریخ خروج
            
            </p>
            <span class="material-icons"> keyboard_arrow_down </span>
          </div>
          <div class="icon-khob">
            <img
              src="../assets/img/icon-khob.png"
              alt=""
              class="shadow-search"
            />
          </div>
          <div class="otagh-nafar" @click="ShopCount" ref="borderOtagh">
            <p class="size">اتاق {{otagh}}  |  {{nafar}} نفر</p>
            <span class="material-icons size"> keyboard_arrow_down </span>
          </div>
          <div class="button-search" ref="marginButton">
            <button>جستجو</button>
                 

          </div>
        </div>
        <div class="count-nafar" ref="count">
          <div class="default-name">
            <div class="close-count" @click="close">
              <span class="material-icons">close</span>
            </div>
            <p>اتاق | نفر</p>
          </div>
          <div class="default-count">
            <p>{{ nafar }} بزرگسال ,{{ otagh }} اتاق</p>
            <div class="hr"></div>
          </div>
          <div class="room">
            <div class="item-room">
              <p>اتاق {{ otagh }}</p>
            </div>
            <div class="conter">
              <div class="name-conter">
                <p>بزرگسال</p>
                <span>بالای 12 سال </span>
              </div>
              <div class="number-conter">
                <div class="plus margin" @click="nafar++">
                  <span class="material-icons"> add </span>
                </div>
            <div class="nafar">
                  <p>{{ nafar }}</p>
            </div>
                <div class="mines  margin" @click="mines"  >
                  <span class="material-icons"> remove </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- finish component Header -->
<!-- start Slider -->
<Slider/>
<Rezerv/>
<Blog/>
<Airplane/>
<Footer/>
  </div>
</template>

<script>
import Slider from "../components/HomePage/Slider.vue";
import Rezerv from "../components/HomePage/Rezerv.vue";
import Blog from "../components/HomePage/Blog.vue";
import Airplane from "../components/HomePage/Airplane.vue";
import Footer from "../components/HomePage/Footer.vue";

export default {
  name: "HomeView",
  components: {Slider,Rezerv,Blog,Airplane,Footer},
  data() {
    return {
      otagh: 1,
      nafar: 1,
    };
  },
  methods: {
    mines(){
      this.nafar--;
      if(this.nafar ==0){
        this.nafar=1
      }
    },
    close() {
      this.$refs.count.classList.add("close");
      this.$refs.widthSearch.classList.add("top-search");
    },
    ShopCount() {
      this.$refs.count.classList.toggle("show-count");
      this.$refs.borderOtagh.classList.toggle("border-otagh");
      this.$refs.marginButton.classList.toggle("margin-button");
      this.$refs.widthSearch.classList.toggle("width-search");
      this.$refs.defaultName.classList.add("margin-name");
    },
  },

};
</script>
<style scoped>
@font-face {
  font-family: "aban";

  src: url(../assets/font/W_aban.ttf);
}
.header {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/hotel.jpg);
  background-repeat: no-repeat;
}
.nav .logo {
  padding-top: 25px;
  padding-right: 40px;
  display: flex;
}
.logo img {
  width: 150px;
  height: 50px;
  margin-top: 10px;
}
.nav {
  width: 100%;
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
}
.nav-header ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.nav-header li {
  color: #fff;
  font-size: 30px;
  right: 30px;
  margin-right: 70px;
}
.nav-header ul li a {
  color: #fff;
  text-decoration: none;
}
.button-login {
  padding-left: 40px;
  padding-top: 90px;
}
.button-login button {
  border: none;
  background-color: rgb(61, 114, 180);
  color: #fff;
  padding: 10px;
  border-radius: 7px;
  border-top: 2px solid rgb(32, 68, 188);
  border-left: 2px solid rgb(32, 68, 188);
  font-size: 17px;
  cursor: pointer;
}
.button-login p {
  color: #fff;
  font-size: 24px;
  position: relative;
  top: -20px;
  left: 5px;
}
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 20%;
  height: 70vh;
}
.search .bg-search {
  width: 55%;
  height: 100px;
  background: rgba(219, 219, 219, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(40.2px);
  -webkit-backdrop-filter: blur(40px);
  border: 1px solid rgba(202, 202, 202, 0.21);
  border-radius: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icon-tagh {
  height: 100%;
  display: flex;
  align-items: center;
}
.icon-tagh img {
  width: 50px;
}
.border-search {
  display: flex;
  width: 270px;
  height: 55px;
  position: relative;
  left: 25px;
  border: 3px solid rgb(77, 111, 156);
  background-color: white;
  border-radius: 10px;
}
.border-search p {
  width: 100%;
  position: relative;
  top: -13px;
  left: 5px;
  display: flex;
  justify-content: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 23px;
}
.border-search span {
  position: relative;
  left: 15px;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 35px;
}
.icon-khob img {
  position: relative;
  right: -43px;
  left: 70px;
  width: 50px;
}
.otagh-nafar {
  display: flex;
  width: 155px;
  height: 55px;
  position: relative;
  left: 65px;
  border: 3px solid rgb(77, 111, 156);
  background-color: white;
  border-radius: 10px;
  z-index: 10;
  cursor: pointer;
}
.otagh-nafar p {
  width: 100%;
  position: relative;
  top: -13px;
  display: flex;
  justify-content: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 23px;
}
.otagh-nafar span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 35px;
}
.button-search button {
  width: 120px;
  height: 50px;
  border: none;
  background-color: rgb(61, 114, 180);
  color: #fff;
  padding: 10px;
  border-radius: 7px;
  border-top: 2px solid rgb(32, 68, 188);
  border-left: 2px solid rgb(32, 68, 188);
  font-size: 27px;
  cursor: pointer;
  position: relative;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.shadow-search {
  box-shadow: 1px 1px 1px #fff;
}
.count-nafar {
  width: 17%;
  height: 290px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  right: 11%;
  top: -15%;
  z-index: 5;
  opacity: 0;
}
.count-nafar.show-count {
  opacity: 1;
  transition: all 0.6s ease-in-out;
}
.otagh-nafar.border-otagh {
  z-index: 0;
}
.button-search.margin-button {
  position: relative;
  right: 60px;
}
.search.width-search {
  width: 110%;
  position: relative;
  left: 100px;
  transition: all 0.6s ease-in-out;
}
.default-name {
  display: flex;
}
.close-count {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 10px;
  top: 5px;
  background-color: rgb(77, 111, 156);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.default-name p {
  position: relative;
  top: -10px;
  right: 15px;
  color: rgb(77, 111, 156);
}
.default-count {
  z-index: 11;
}
.default-count p {
  font-size: 25px;
  position: relative;
  top: -26px;
  right: 15px;
}
.hr {
  width: 90%;
  height: 2px;
  background-color: rgb(223, 214, 214);
  position: relative;
  top: -47px;
  right: 11px;
}
.item-room p {
  color: rgb(61, 114, 180);
  position: relative;
  top: -47px;
  right: 11px;
}
.count-nafar.close {
  display: none;
}
.search.top-search {
  position: relative;
  top: -0px;
}
.conter {
  position: relative;
  top: -80px;
  right: 10px;
}
.conter p {
  font-size: 20px;
}
.conter span {
  position: relative;
  top: -25px;
  color: rgb(135, 152, 173);
  font-size: 14px;
}
.conter{
  display: flex;
  justify-content: space-between;
}
.conter .number-conter{
  display:flex;
}
.margin{
  position: relative;
  top: 40px;
}
.nafar{
   position: relative;
  top: 10px;
  left: 55px;
}
.plus{
position: relative;
left: 80px;
top: 30px;
width: 30px;
  height: 30px;
  background-color: rgb(77, 111, 156);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.plus span{
  top: 0px;
  color: #fff;
  font-size:20px ;
}
.mines{
position: relative;
left: 30px;
top: 30px;
width: 30px;
  height: 30px;
  background-color: rgb(135, 152, 173);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.mines span{
top: 0;
color: #fff;
  font-size:20px ;
}
.hr-home{
  position: relative;

}
.hr-home::before{
  content: "";
  position: absolute;
bottom:-3px ;
width: 140px;
height: 2px;
background-color: rgb(36, 76, 128);
}
.hr-home::after{
  content: "";
  position: absolute;
bottom:-8px ;
right: 2px;
width: 60px;
height: 2px;
background-color: rgb(36, 76, 128);
}
</style>