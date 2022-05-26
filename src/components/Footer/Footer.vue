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
        <div class="margin-right">
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
    </div>
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
  padding: 40px 60px 0 0;
}

.item {
  width: 22%;
}
.footer-item .question {
  color: rgb(58, 111, 179);
  font-size: 2.5rem;
  text-shadow: 1px 0px 5px black;
}
.aboutme {
  font-size: 1.4rem;
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
.item {
  color: #fff;
}
.title p {
  font-size: 2rem;
  position: relative;
}
.title p::before {
  content: "";
  position: absolute;
  bottom: -3px;
  right: 10px;
  height: 1px;
  width: 100px;
  background-color: #fff;
}
.nav1 {
  position: relative;
  left: 25px;
}
.nav li {
  font-size: 1.4rem;
  margin-top: 30px;
  position: relative;
  left: 20px;
}

.title1 p {
  font-size: 2rem;
  position: relative;
}
.title1 p::before {
  content: "";
  position: absolute;
  bottom: -3px;
  height: 1px;
  width: 70px;
  background-color: #fff;
}
.title2 p {
  font-size: 30px;
  position: relative;
}
.title2 p::before {
  content: "";
  position: absolute;
  bottom: -3px;
  right: 10px;
  height: 1px;
  width: 170px;
  background-color: #fff;
}
.top-item {
  padding-bottom: 70px;
}
.margin-right {
  padding-right: 30px;
}
.nav2 ul {
  list-style: none;
}
.malek {
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  background-color: var(--test);
}
.logo {
  position: relative;
  top: 30px;
}
</style>