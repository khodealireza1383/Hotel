<template>
  <div class="About">
    <!-- ---------------- Header about room  -------------------- -->
    <div class="header-about">
      <!-- -------------- name Hotel ------------------ -->
      <div class="title">
        <div class="Name-Hotel">
          <div class="name">
            <h3>هتل کیهان وب</h3>
            <p>مشهد , میدان راهنمایی , دستغیب</p>
          </div>

          <div class="star">
            <span class="material-icons"> star </span>
            <span class="material-icons"> star </span>
            <span class="material-icons"> star </span>
            <span class="material-icons"> star </span>
            <span class="material-icons"> star </span>
          </div>
        </div>
        <div class="btn-rezerv">
          <button class="button">
            رزرو هتل <span class="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>

      <div class="hr-header"></div>
    </div>
    <!-- ----------------------- content img ABout------------------ -->
    <div class="content-Hotel">
      <div class="img-Hotel">
        <div class="img-active">
          <img :src="activeImg" alt="" />
        </div>
        <div class="more-img">
          <img :src="img1" alt="" />
          <img :src="img2" alt="" />
          <img :src="img3" alt="" />
        </div>
      </div>
      <div class="text-about-hotel">
        <div class="container">
          <div class="item1">
            <p>تعداد طبقه</p>
            <span class="padding">4</span>
          </div>

          <div class="item1">
            <p>تعداد اتاق</p>
            <span class="padding">191</span>
          </div>
          <div class="item1">
            <p>تحویل اتاق</p>
            <span>15:00</span>
          </div>
          <div class="item1">
            <p>تخلیه اتاق</p>
            <span>12:00</span>
          </div>
        </div>
        <div class="text-about">
          <p>
            هتل شایان کیش، هتلی پنج ستاره است که در سال ۱۳۵۴ در زمینی به مساحت
            ۵۵۰۰۰ مترمربع، افتتاح شد. این هتل، یکی از بزرگ ترین و مجلل ترین هتل
            های کیش است که در ۴ طبقه، ۱۹۱ اتاق و سوئیت لوکس دارد. هتل شایان کیش
            در یکی از بهترین مناطق جزیره، در نزدیکی ساحل درخشان و بسیاری از
            جاذبه های گردشگری کیش از جمله بزرگ ترین اسکله تفریحی آن، قرار گرفته
            است. اقامت در هتل شایان کیش با فضایی مدرن، امکانات رفاهی لوکس و چشم
            اندازی آرام بخش از اسکله و آب های نیلگون خلیج فارس، سفری خاطره انگیز
            را برایتان رقم خواهد زد. لازم به ذکر است واحدهای ساحلی هتل، فاقد
            اینترنت هستند.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeImg: require("../../assets/img/img-about-hotel.png"),
      img1: require("../../assets/img/more-room1.jpg"),
      img2: require("../../assets/img/more-room2.jpg"),
      img3: require("../../assets/img/more-room3.jpg"),
    };
  },
  methods: {},
};
</script>

<style scoped>
.About {
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin: 40px auto;
}
.header-about {
  width: 100%;
  height: 150px;
}
.hr-header {
  width: 90%;
  height: 1px;
  background-color: #d3cece;
  margin: 0 auto;
}
.Name-Hotel {
  display: flex;
  position: relative;
}
.header-about .title {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 60px;
}

.name {
  position: relative;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.name h3 {
  font-size: 1.7rem;
  color: var(--test);
}
.name p {
  position: absolute;
  bottom: -20px;
  color: #4c4c4c;
  width: 250px;
  text-align: center;
  font-size: 0.9rem;
}
.star span {
  position: relative;
  top: 40px;
  right: 30px;
  color: #f6c255;
}
.btn-rezerv {
  width: 50%;
  text-align: left;
}
.content-Hotel {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  margin-top: 20px;
  box-sizing: border-box;
  padding: 0 30px;
}
.img-Hotel,
.text-about-hotel {
  width: 50%;
}
.button span {
  position: relative;
  top: 5px;
}
.text-about-hotel .container {
  width: 90%;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  display: flex;
  justify-content: space-around;
}

.img-active img {
  width: 95%;
  border-radius: 10px;
}
.more-img {
  display: flex;
  justify-content: center;
}
.more-img img {
  width: 30%;
  margin-left: 10px;
  border-radius: 7px;
  position: relative;
  left: 10px;
  transition: all 0.2s ease-in;
}
.more-img img:hover {
  transform: scale(0.9);
}
.item .container .item1 p {
  color: #545353;
  font-size: 1rem;
}
.container .item1 span {
  color: var(--test);
  font-size: 1.8rem;
  box-sizing: border-box;
  position: relative;
  top: -15px;
}
.padding {
  box-sizing: border-box;
  padding-right: 20px;
}
.text-about {
  width: 90%;
}
.text-about p{
  text-align: justify;
  text-justify: inter-word;
  box-sizing: border-box;
  color: #545353;
  font-size: 1rem;
}
@media only screen and (max-width: 1200px) {
  .About {
    height: auto;
  }
}
@media only screen and (max-width: 1024px) {
  .About {
    height: auto;
  }
}
@media only screen and (max-width: 768px) {
  .About {
    height: auto;
  }
  .header-about .title {
    padding: 0 20px;
  }
  .hr-header {
    width: 94%;
    height: 1px;

    margin: 0 auto;
  }
  .content-Hotel {
    padding: 0 6px;
  }

  .text-about-hotel .container {
    width: 90%;
    height: 90px;
  }
  .container .item1 p {
    font-size: 13px;
  }
  .container .item1 span {
    font-size: 25px;
  }
  .more-img img {
    width: 29%;
    margin-left: 10px;
  }
  .text-about p {
    font-size: 0.8rem;
  }
}
@media only screen and (max-width: 480px) {
  * {
    margin: 0;
  }
  .About {
    height: auto;
  }
  .header-about .title {
    flex-direction: column;
    padding: 0 74px;
  }
  .Name-Hotel {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  .name p {
    position: absolute;
    bottom: 0px;
  }
  .star {
    margin-top: -30px;
  }
  .header-about {
    height: 210px;
  }
  /* bottom About Content*/
  .content-Hotel {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10px;
    box-sizing: border-box;
    padding-right: 25px;
  }
  .img-Hotel,
  .text-about-hotel {
    width: 100%;
  }
  .img-active img {
    width: 93%;
    height: 170px;
  }
  .text-about-hotel > * {
    margin-top: 20px;
  }
  .text-about-hotel .container {
    width: 92%;
    height: 70px;
  }
  .item1 {
    margin-top: 10px;
  }
  .container .item1 span {
    top: -10px;
  }
}
</style>