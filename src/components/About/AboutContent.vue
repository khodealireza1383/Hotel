<template>
  <div class="content">
    <div class="container">
      <div class="text-About">
        <h2>با فلایتو آشنا شوید</h2>
        <p>
          ما در فلایتیو فعالیت خودمان را خردادماه سال ۱۳۹۵ به عنوان یک آژانس
          مسافرتی آنلاین آغاز نموده، و از همان ابتدا تلاش کردیم تا نگاه متفاوتی
          داشته باشیم. ما تصمیم گرفتیم پیش از هر چیزی، اول به خواسته‌ها و رضایت
          مشتری‌هایمان توجه کنیم. آن زمان را به سرعت سپری کردیم، و حالا با
          همراهی شما، از یک آژانس مسافرتی، به یک «شرکت گردشگری آنلاین» و یکی از
          رهبران این بازار تبدیل شده‌ایم. ما مفتخریم که هر ماه بیش از صدها هزار
          نفر برای انجام سفرهای داخلی و خارجی خود از خدمات فلایتیو بهره می‌برند.
          اما این پایان راه و ماموریت ما نیست!
        </p>
      </div>
      <div class="img-About">
        <img src="../../assets/img/img-about.png" alt="" />
      </div>
    </div>
    <div class="title-team">
      <h2>تصاویری از محیط کار کیهان وب</h2>
    </div>
    <div class="img-top padding">
      <div class="box-img">
        <img src="../../assets/img/team7.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team1.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team3.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team5.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
    </div>
    <div class="img-bottom padding">
      <div class="box-img">
        <img src="../../assets/img/team2.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team4.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team6.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
      <div class="box-img">
        <img src="../../assets/img/team8.webp" alt="" class="team-img1" />
        <h3>تیم فرانت اند</h3>
        <div class="bg"></div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  box-sizing: border-box;
  padding: 0 90px;
}
.text-About {
  width: 50%;
}
.text-About h3 {
  font-weight: 400;
  font-size: 1.4rem;
  color: var(--test);
  position: relative;
  top: 45px;
}
.text-About h2 {
  font-weight: 400;
  font-size: 4rem;
}
.text-About p {
  width: 80%;
  text-align: justify;
  text-justify: inter-word;
  font-size: 1.4rem;
  color: rgb(78, 93, 112);
  margin-top: -30px;
}
.container .img-About {
  width: 50%;
}
.container .img-About img {
  width: 100%;
  border-radius: 15px;
}
.title-team {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 60px;
  flex-direction: column;
}

.title-team h2 {
  font-weight: 400;
  font-size: 2rem;
  color: rgb(36, 76, 128);
  padding: 0 50px;
}
.img-top {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box-img {
  width: 22%;
  height: 450px;
  border-radius: 10px;
  position: relative;
  transition: all 0.4s linear;
}
.box-img img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.box-img h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  opacity: 0;
  transition: all 0.4s linear;
    z-index: 12;

}
.bg {
  width: 100%;
  height: 100%;
  background-color: rgba(36, 76, 128, 0.7);
  z-index: 11;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  opacity: 0;
  transition: all 0.4s linear;
}
.box-img:hover h3 {
  opacity: 1;
}
.box-img:hover .bg {
  opacity: 1;
}
.img-bottom {
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.team-img2 {
  width: 22%;
  height: 450px;
  object-fit: cover;
  border-radius: 10px;
}
.padding {
  box-sizing: border-box;
  padding: 0px 90px;
}
</style>