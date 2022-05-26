<template>
  <div class="header">
    <div class="nav">
      <div class="logo">
        <img src="../../assets/img/logo(2).png" alt="" />
      </div>
      <div class="nav-header">
        <ul>
          <li><router-link to="/" class="hr-home">صفحه اصلی </router-link></li>
          <li><router-link to="/room">اتاق ها </router-link></li>
          <li><router-link to="/blog"> وبلاگ </router-link></li>
          <li><router-link to="/about"> درباره ما </router-link></li>
          <li><router-link to="/contact"> تماس با ما </router-link></li>
        </ul>
      </div>

      <div class="button-login">
        <button>ورود و ثبت نام</button>
        <p>0513-2677321</p>
      </div>
    </div>
    <div class="search" ref="widthSearch">
      <div class="bg-search">
        <div class="icon-tagh">
          <img
            src="../../assets/img/taghvim.png"
            alt=""
            class="shadow-search"
          />
        </div>
        <div class="khorog-vorod border-search">
          <p>تاریخ ورود | تاریخ خروج</p>
          <span class="material-icons"> keyboard_arrow_down </span>
        </div>
        <div class="icon-khob">
          <img
            src="../../assets/img/icon-khob.png"
            alt=""
            class="shadow-search"
          />
        </div>
        <div class="otagh-nafar" @click="ShopCount" ref="borderOtagh">
          <p class="size">اتاق {{ otagh }} | {{ nafar }} نفر</p>
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
              <div class="mines margin" @click="mines">
                <span class="material-icons"> remove </span>
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
  data() {
    return {
      otagh: 1,
      nafar: 1,
    };
  },
  methods: {
    mines() {
      this.nafar--;
      if (this.nafar == 0) {
        this.nafar = 1;
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
.header {
  width: 100%;
  height: 80vh;
  background-image: url(../../assets/img/hotel.jpg);
  background-repeat: no-repeat;
}
.nav .logo {
  width: 30%;
  padding: 30px 40px 0 0;
}

.nav {
  width: 100%;
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
}
.nav-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 120px;
}
.nav-header ul {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.nav-header li {
  width: 150px;
  color: #fff;
  font-size: 1.7rem;
}
.nav-header ul li a {
  color: #fff;
  text-decoration: none;
}
.button-login {
  padding: 90px 0 0 40px;
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
  height: 100vh;
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
  width: 270px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgb(77, 111, 156);
  background-color: white;
  border-radius: 10px;
  margin-left: 30px;
}
.border-search p {
  width: 100%;
  display: flex;
  justify-content: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 23px;
}
.border-search span {
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 2rem;
}
.icon-khob {
  width: 100px;
  display: flex;
  justify-content: flex-start;
}
.icon-khob img {
  width: 50px;
  position: relative;
  left: 20px;
}
.otagh-nafar {
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 1.4rem;
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
  left: 20px;
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
  top: -11%;
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
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.default-name p {
  padding-right: 15px;
  color: rgb(77, 111, 156);
}
.default-count {
  z-index: 11;
}
.default-count p {
  font-size: 1.5rem;
  position: relative;
  top: -30px;
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

.conter {
  position: relative;
  top: -80px;
  right: 10px;
}
.conter p {
  font-size: 1.2;
}
.conter span {
  position: relative;
  top: -25px;
  color: rgb(135, 152, 173);
  font-size: 14px;
}
.conter {
  display: flex;
  justify-content: space-between;
}
.conter .number-conter {
  display: flex;
}
.margin {

}
.nafar {
  position: relative;
  top: 20px;
  left: 55px;
}
.plus {
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
.plus span {
  top: 0px;
  color: #fff;
  font-size: 20px;
}
.mines {
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
.mines span {
  top: 0;
  color: #fff;
  font-size: 20px;
}
.hr-home {
  position: relative;
}
.hr-home::before {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 140px;
  height: 3px;
  background-color: #fff;
}
.hr-home::after {
  content: "";
  position: absolute;
  bottom: -8px;
  right: 2px;
  width: 60px;
  height: 3px;
  background-color: #fff;
}
</style>