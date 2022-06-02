<template>
  <div class="footer">
    <div class="footer-item">
      <div class="item">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="question">
          <h3>به کمک نیاز دارید ؟</h3>
        </div>
        <div class="aboutme">
          <p>
            سایت فلایتو درصدد است تا با ارائه خدمات در رزرواسیون آنلاین شرایط
            رزرو اتاق های مجموعه خود را آسان تر نماید
          </p>
        </div>
      </div>
      <div class="item">
        <div class="margin-right1">
          <div class="title">
            <p>دسترسی ها</p>
          </div>
          <div class="nav">
            <ul>
              <li><a href="#"></a>صفحه اصلی</li>
              <li><a href="#"></a>مشاهده اتاق ها</li>
              <li><a href="#"></a>درباره ما</li>
              <li><a href="#"></a>تماس با ما</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="item top-item">
        <div class="margin-right1">
          <div class="title1">
            <p>پیگیری</p>
          </div>
          <div class="nav">
            <div class="nav1">
              <ul>
                <li><a href="#"></a>رزرو اتاق</li>
                <li><a href="#"></a>پرداخت ها</li>
                <li><a href="#"></a>سایر خدمات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="margin-right1 none">
          <div class="title2">
            <p>شبکه های اجتماعی</p>
          </div>
          <div class="nav">
            <div class="nav2">
              <ul>
                <li>
                  <a href="#"></a
                  ><img src="../../assets/img/instagram.png" />Instagram
                </li>
                <li>
                  <a href="#"></a
                  ><img src="../../assets/img/telegram.png" />Telegram
                </li>
                <li>
                  <a href="#"></a
                  ><img src="../../assets/img/youtube.png" />Youtube
                </li>
                <li>
                  <a href="#"></a
                  ><img src="../../assets/img/facebook.png" />facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- respansive mode -->
      </div>
      <div class="social-media">
        <ul>
          <li><a href="#"></a><img src="../../assets/img/instagram.png" /></li>
          <li><a href="#"></a><img src="../../assets/img/telegram.png" /></li>
          <li><a href="#"></a><img src="../../assets/img/youtube.png" /></li>
          <li><a href="#"></a><img src="../../assets/img/facebook.png" /></li>
        </ul>
      </div>
    </div>
    <!-- finish respansive mode -->
    <!-- malekiat -->
    <div class="malek">
      <p>این وبسایت توسط تیم برنامه نویسی کیهان وب طراحی وساخته شده است</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  background: var(--test);
}
.footer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px 0 0;
}
.logo {
  position: relative;
  top: 30px;
}
.item {
  box-sizing: border-box;
  padding-right: 40px;
  width: 25%;
  color: #fff;
}
.footer-item .question {
  color: rgb(58, 111, 179);
  font-size: 2rem;
  text-shadow: 1px 0px 5px black;
}
.aboutme {
  font-size: 1.2rem;
  text-align: justify;
  text-justify: inter-word;
  color: #fff;
}
.nav2 img {
  width: 25px;
  position: relative;
  top: 7px;
  left: 10px;
}
.title p,
.title1 p,
.title2 p {
  font-size: 1.4rem;
  position: relative;
}
.title p::before,
.title1 p::before,
.title2 p::before {
  content: "";
  position: absolute;
  bottom: -10px;
  right: 10px;
  height: 1px;
  width: 90px;
  background-color: #fff;
}
.title1 p::before{
  width: 70px;
  right: 0;
}
.title2 p::before{
  width: 170px;
  right: 0;
}
.nav1 {
  position: relative;
  left: 25px;
}
.nav li {
  font-size: 1.1rem;
  margin-top: 30px;
  position: relative;
  left: 20px;
}

.top-item {
  padding-bottom: 70px;
}
.margin-right1 {
  padding-right: 30px;
}
.malek {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.1rem;
  background-color: var(--test);
}

.social-media ul {
  display: none;
}
@media only screen and (max-width: 1200px) {
  .footer-item {
    padding: 40px 40px 0 0;
  }
  .question h3 {
    width: 350px;
    font-size: 2.4rem;
  }
}
@media only screen and (max-width: 1024px) {
  .footer-item {
    padding: 40px 0px 0 0;
  }
  .question h3 {
    width: 350px;
    font-size: 1.8rem;
  }
}
@media only screen and (max-width: 768px) {
  .footer-item {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    width: 50%;
  }
}
@media only screen and (max-width: 480px) {
  * {
    margin: 0;
  }
  .none {
    display: none;
  }
  .item {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding-right: 0;
  }
  .logo,
  .question,
  .aboutme {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .question {
    width: 100%;
    position: relative;
    top: 30px;
    margin-top: 30px;
    text-align: center;
  }
  .aboutme {
    width: 85%;
    margin-top: 60px;
    text-align: center;
  }
  .malek {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
  }
  .margin-right1 {
    width: 100%;
    margin-top: 40px;
  }
  .nav1 {
    position: relative;
    left: 0;
  }
  .nav li {
    font-size: 1.1rem;
  }
  .social-media {
    width: 100%;
  }
  .social-media ul {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
  .social-media ul img {
    width: 50px;
  }
  .title1{
    margin-right: 20px;
  }
}
</style>