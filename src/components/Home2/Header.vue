<template>
  <div class="header">
    <div class="bg-color">
      <div class="navbar">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="nav">
          <ul>
            <li class="active">
              <router-link to="/" class="link">صفحه اصلی </router-link>
            </li>
            <li><router-link to="/room" class="link">اتاق ها </router-link></li>
            <li><router-link to="/blog" class="link"> وبلاگ </router-link></li>
            <li>
              <router-link to="/about" class="link"> درباره ما </router-link>
            </li>
            <li>
              <router-link to="/contact" class="link">تماس با ما </router-link>
            </li>
          </ul>
        </div>
        <div class="button-login">
          <button>ورود و ثبت نام</button>
          <p>0513-2677321</p>
        </div>
      </div>

      <!-- start search -->
      <div class="search">
        <div class="bg-search">
          <div class="taghvim">
            <img src="../../assets/img/taghvim.png" alt="" />
            <input type="text" />
            <p>تاریخ ورود | تاریخ خروج</p>
            <span class="material-icons"> keyboard_arrow_down </span>
          </div>
          <div class="number-person">
            <img src="../../assets/img/icon-khob.png" alt="" />
            <input type="text" />
            <p>اتاق | نفر</p>
            <span class="material-icons"> keyboard_arrow_down </span>
          </div>
          <div class="button-search">
            <button>جستجو</button>
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
      windowTop: 0,
    };
  },
  mounted(){
    var that=this;
    window.addEventListener('scroll', function(){
      that.windowTop=window.pageYOffset;
      console.log(that.windowTop)
      if(that.windowTop >200){
        that.$refs.bg.classList.add('bg-nav')
      }else{
           that.$refs.bg.classList.remove('bg-nav')
      }
    })
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 70vh;
  background-image: url("../../assets/img/hotel.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  filter: brightness(90%);

}
.navbar {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header .bg-color {
  width: 100%;
  height: 100%;
}
.logo {
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: 30px;

}
.nav {
  width: 60%;
  text-align: left;
}
.nav ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.nav ul .link {
  color: #fff;
  text-decoration: none;
  font-size: 27px;
  transition: all 0.4s ease-in-out;
}
.nav ul .link:hover {
  color: var(--test);
  text-decoration: none;
  font-size: 28px;

}
.button-login {
  width: 40%;
  height: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
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
  position: absolute;
  left: 50px;
}
.button-login p {
  color: #fff;
  font-size: 24px;
  position: absolute;
  left: 40px;
  top: 60px;
}
.active {
  position: relative;
}
.active::before {
  content: "";
  position: absolute;
  bottom: -3px;
  width: 110px;
  height: 3px;
  background-color: #fff;
}
.active::after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 2px;
  width: 90px;
  height: 3px;
  background-color: #fff;
}
/* search */
.search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
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
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0px 40px;
}
.taghvim,
.number-person {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  cursor: pointer;
}
.taghvim img {
  width: 55px;
}
.number-person img {
  width: 55px;
  margin-right: 30px;
}
.taghvim input {
  width: 100%;
  height: 45%;
  margin-right: 20px;
  border: 3px solid rgb(67, 113, 172);
  outline: none;
  border-radius: 10px;
}
.number-person input {
  width: 40%;
  height: 45%;
  margin-right: 20px;
  border: 3px solid rgb(67, 113, 172);
  outline: none;
  border-radius: 10px;
}
.button-search button {
  width: 120px;
  border: none;
  background-color: rgb(61, 114, 180);
  color: #fff;
  padding: 10px;
  border-radius: 7px;
  border-top: 2px solid rgb(32, 68, 188);
  border-left: 2px solid rgb(32, 68, 188);
  font-size: 1.3em;
  cursor: pointer;
}
.taghvim p {
  position: absolute;
  top: 10%;
  right: 25%;
  width: 100%;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 1.4rem;
}
.number-person p {
  position: absolute;
  top: 10%;
  right: 35%;
  width: 100%;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 1.4rem;
}

.taghvim span {
  position: absolute;
  left: 20px;
  font-size: 2rem;
  color: var(--test);
}
.number-person span {
  position: absolute;
  left: 30%;
  font-size: 2rem;

  color: var(--test);
}
</style>