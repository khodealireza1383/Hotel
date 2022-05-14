<template>
  <div class="footer">
    <div class="footer-item">
      <div class="item">
        <div class="logo">
          <img src="../../assets/img/logo(2).png" alt="" />
        </div>
        <div class="question">
          <p>به کمک نیاز دارید ؟</p>
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
              <p>دسترسی ها </p>
          </div>
          <div class="nav">
              <ul>
                  <li><a href="#"></a>صفحه اصلی </li>
                  <li><a href="#"></a>مشاهده اتاق ها </li>
                  <li><a href="#"></a>درباره ما </li>
                  <li><a href="#"></a>تماس با ما</li>
              </ul>
          </div>
             </div>
      </div>
      <div class="item top-item">
        <div class="margin-right1">
          <div class="title1">
              <p>پیگیری  </p>
          </div>
          <div class="nav">
            <div class="nav1">
              <ul>
                  <li><a href="#"></a>رزرو اتاق  </li>
                  <li><a href="#"></a>پرداخت ها </li>
                  <li><a href="#"></a>سایر خدمات  </li>
              </ul>
              </div>
          </div>
          </div>
      </div>
      <div class="item">
   
          <div class="title2">
              <p>شبکه های اجتماعی  </p>
          </div>
          <div class="nav">
            <div class="nav2">
              <ul>
                  <li><a href="#"></a><img src="../../assets/img/instagram.png">Instagram</li>
                  <li><a href="#"></a><img src="../../assets/img/telegram.png"/>Telegram</li>
                  <li><a href="#"></a><img src="../../assets/img/youtube.png"/>Youtube</li>
                  <li><a href="#"></a><img src="../../assets/img/facebook.png"/>facebook </li>
              </ul>
              </div>
          </div>
      </div>
        
      
    </div>
    <div class="malek">
      <p>این وبسایت توسط  تیم برنامه نویسی کیهان وب طراحی وساخته شده است</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  width: 100%;
  height: 520px;
  background: rgb(36, 76, 128);
}
.footer-item {
  position: relative;
  top: 60px;
  right: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}
.item{
      width: 22%;
    
}
.footer-item .question {
  color: rgb(58, 111, 179);
  font-size: 3rem;
  position: relative;
  top: -25px;
  text-shadow: 1px 0px 5px black;
}
.aboutme {
  font-size: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  position: relative;
  top: -50px;
}
.nav2 img{
  width: 25px;
position: relative;
top: 7px;
left: 10px;
}
.item{
    position: relative;
    top: -20px;
    right: 30px;
    color: white;
   
}
.title p{
 font-size: 30px;
 position: relative;
}
.title p::before{
content: '';
position: absolute;
bottom: -3px;
right: 10px;
height: 1px;
width: 100px;
background-color: #fff;

}
.nav1{
  position: relative;
  left: 10px;
}
.nav li{
    font-size: 24px;
    margin-top: 30px;
    position: relative;
    left: 15px;
}

.title1 p{
   font-size: 30px;
 position: relative;
}
.title1 p::before{
  content: '';
position: absolute;
bottom: -3px;
height: 1px;
width: 70px;
background-color: #fff;
}
.title2 p{
 font-size: 30px;
 position: relative;
}
.title2 p::before{
content: '';
position: absolute;
bottom: -3px;
right: 10px;
height: 1px;
width: 170px;
background-color: #fff;

}
.top-item{
  position: relative;
  top: -56px;
}
.margin-right{
position: relative;
right: 90px;
}

.margin-right1{
position: relative;
right: 52px;
}
.nav2{
  position: relative;
  right: 10px;
}
.nav2 ul{
  list-style: none;
}
.malek{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 50px;
  color: white;
  font-size: 25px;
} 
</style>