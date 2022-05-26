<template>
  <div class="header">
    <div class="bg-color">
      <div class="navbar" ref="bg">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="nav">
          <ul>
            <li><router-link to="/" class="link">صفحه اصلی </router-link></li>
            <li><router-link to="/room" class="link">اتاق ها </router-link></li>
            <li><router-link to="/blog" class="link"> وبلاگ </router-link></li>
            <li class="active">
              <router-link to="/" class="link"> درباره ما </router-link>
            </li>
            <li><router-link to="/contact" class="link">تماس با ما </router-link></li>
          </ul>
        </div>
        <div class="button-login">
          <button>ورود و ثبت نام</button>
          <p>0513-2677321</p>
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
      if(that.windowTop >300){
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
  height: 65vh;
  background-image: url("../../assets/img/bg-about1.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.header .navbar {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 10;
}
.navbar.bg-nav{
  position: fixed;
  top: 0;
 background-color:rgba(36, 76, 128,0.9);
   height: 100px;
}
.navbar.bg-nav .button-login{
display: flex;
justify-content: center;
}
.navbar.bg-nav p{
  display: none;
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
  transition: all 0.7s ease-in-out;
}
.nav ul .link:hover {

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
  width: 80px;
  height: 3px;
  background-color: #fff;
}
.active::after {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 2px;
  width: 60px;
  height: 3px;
  background-color: #fff;
}
</style>