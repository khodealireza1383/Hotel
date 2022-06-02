<template>
  <div class="header">
    <div class="bg-color">
      <div class="navbar" ref="bgg">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="nav">
          <ul ref="ShowNavi">
            <li><router-link to="/" class="link">صفحه اصلی </router-link></li>
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
        <div class="menu-respansive">
          <span class="material-icons"> person </span>
          <span class="material-icons" @click="ShowNav"> menu </span>
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
  methods: {
    ShowNav() {
      this.$refs.ShowNavi.classList.toggle("shownav");
    },
  },
  mounted() {
    var that = this;
    window.addEventListener("scroll", function () {
      that.windowTop = window.pageYOffset;
      console.log(that.windowTop);
      if (that.windowTop > 200) {
        that.$refs.bgg.classList.add("bg-nav3");
      } else {
        that.$refs.bgg.classList.remove("bg-nav3");
      }
    });
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 65vh;
  background-image: url("../../assets/img/contact-bg.jpg");
  background-size: cover;
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
.navbar.bg-nav3 {
  position: fixed;
  top: 0;
  background-color: rgba(36, 76, 128, 0.9);
  height: 100px;
}
.navbar.bg-nav3 .button-login {
  display: flex;
  justify-content: center;
}
.navbar.bg-nav3 p {
  display: none;
}
.header .bg-color {
  width: 100%;
  height: 100%;
}
.menu-respansive{
  display: none;
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
  font-size: 21px;
  transition: all 0.4s ease-in-out;
}
.nav ul .link:hover {

  text-decoration: none;
  font-size: 24px;
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
  font-size: 14px;
  cursor: pointer;
  position: absolute;
  left: 50px;
}
.button-login p {
  color: #fff;
  font-size: 19px;
  position: absolute;
  left: 45px;
  top: 62px;
}
@media only screen and (max-width: 1200px) {
  .header {
    height: 55vh;
  }
  .nav {
    width: 90%;
    text-align: left;
  }
}
@media only screen and (max-width: 1024px) {
}
@media only screen and (max-width: 768px) {
  .header {
    height: 67vh;
      background-size: cover;
    background-position: center;
  }
  /* respansive */
  .nav {
    width: 50%;
    height: 605px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: -30px;
  }

  .nav ul {
    background: linear-gradient(to right, rgb(58, 111, 179), var(--test));
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    height: 400px;
    border-radius: 10px;
    margin-right: 150%;
    transition: all 0.4s ease-in;
    position: relative;
  }
  .nav ul::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: rgb(58, 111, 179);
    position: absolute;
    top: -4px;
    left: 56px;
    transform: rotate(45deg);
    z-index: -1;
  }
  .nav ul.shownav {
    margin-right: 40%;
  }

  .nav ul li {
    margin-top: 15px;
    position: relative;
    left: 20px;
  }

  .button-login {
    display: none;
  }
  .logo {
    width: 50%;
    cursor: pointer;
  }
  .menu-respansive {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    color: #fff;
    z-index: 10;
  }
  .menu-respansive span {
    font-size: 2rem;
    padding-left: 20px;
    cursor: pointer;
  }
  .navbar.bg-nav3 .button-login {
    display: none;
  }
}
@media only screen and (max-width: 480px) {

  /* nav */
  .header{
    height: 70vh
  }
  .navbar {
  height: 120px;
}
    .nav {
    width:900px;
    height:470px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: absolute;
    top: -30px;
    left: -30px;
    z-index: 10;
    opacity: 0.9;
  }
  .nav ul {
    width: 100%;
    height: 100%;
    margin-right: 150%;
    padding:40px 60px;
 }
  .nav ul::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: rgb(58, 111, 179);
    position: absolute;
    top: -4px;
    left: 56px;
    transform: rotate(45deg);
    z-index: -1;
  }
  .nav ul.shownav {
    margin-right: 40%;
  }
  .button-login {
    display: none;
  }
  .logo {
    width:80%;
    cursor: pointer;
  }
  .menu-respansive {
    display: flex;
    width: 50%;
    justify-content: flex-end;
    color: #fff;
    z-index: 10;
  }
  .menu-respansive span {
    font-size: 2rem;
    padding-left: 20px;
    cursor: pointer;
  }
  /* search */
   .search .bg-search {
    width: 80%;
    height: 300px;
    flex-direction: column;
  }
}
</style>