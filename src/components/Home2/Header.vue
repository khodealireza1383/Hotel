<template>
  <div class="header">
    <div class="bg-color">
      <div class="navbar">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="nav">
          <ul ref="ShowNavi">
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
        <div class="menu-respansive">
          <span class="material-icons"> person </span>
          <span class="material-icons" @click="ShowNav"> menu </span>
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
  methods: {
    ShowNav() {
      this.$refs.ShowNavi.classList.toggle("shownav");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
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
  text-decoration: none;
  font-size: 31px;
}
.menu-respansive {
  display: none;
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
.taghvim input,
.number-person input {
  height: 45%;
  margin-right: 20px;
  border: 3px solid rgb(67, 113, 172);
  outline: none;
  border-radius: 10px;
}
.taghvim input {
  width: 100%;
}
.number-person input {
  width: 40%;
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
.taghvim p,
.number-person p {
  position: absolute;
  top: 10%;
  width: 100%;
  color: rgb(77, 111, 156);
  font-weight: bold;
  font-size: 1.4rem;
}
.taghvim p {
  right: 25%;
}
.number-person p {
  right: 35%;
}
.taghvim span,
.number-person span {
  position: absolute;
  font-size: 2rem;
  color: var(--test);
}
.taghvim span {
  left: 10px;
}
.number-person span {
  left: 30%;
}
@media only screen and (max-width: 1200px) {
  .nav {
    box-sizing: border-box;
    padding-right: 30px;
    width: 80%;
  }
  .search .bg-search {
    width: 70%;
  }
}
@media only screen and (max-width: 1024px) {
  .header {
    height: 55vh;
  }
  .search {
    height: 35vh;
  }
  .nav {
    width: 100%;
  }
  .number-person input {
    width: 50%;
  }
  .number-person p {
    right: 45%;
  }
  .logo {
    width: 18%;
  }
  .number-person span {
    position: absolute;
    left: 13%;
  }
  .search .bg-search {
    padding: 0px 20px;
  }
  .taghvim input {
    width: 230px;
  }
  .taghvim p {
    right: 27%;
  }
  .taghvim span {
    left: -2px;
  }
}
@media only screen and (max-width: 768px) {
  /* nav rtespansive */
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
    left: 36px;
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

  /* finish respansive */

  /* serch */
  .search .bg-search {
    width: 50%;
    height: 300px;
    flex-direction: column;
  }
  .number-person {
    position: relative;
    top: -25px;
  }
  .taghvim {
    width: 97%;
    height: 100%;
  }
  .number-person {
    width: 100%;
    height: 100%;
  }
  .taghvim input {
    width: 100%;
    padding-left: 7px;
  }

  .number-person img {
    margin-right: 4px;
  }
  .taghvim p,
  .number-person p {
    top: 17%;
  }
  .taghvim p {
    left: 15%;
  }
  .number-person p {
    right: 27%;
  }
  .taghvim span {
    left: 10px;
  }
  .number-person span {
    left: 30%;
  }
  .button-search {
    box-sizing: border-box;
    position: relative;
    top: -20px;
  }
  .button-search button {
    width: 180px;
  }
  /* finish search */
}
@media only screen and (max-width: 480px) {
  /* nav */
  .header{
    width: 100%;
    height: 49vh;
    position: relative;
  }
  .navbar {
  height: 120px;
}
    .nav {
    width:900px;
    height:560px;
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