<template>
  <div class="Media">
    <div class="Container">
      <div class="right-box">
        <!-- right bar -->
        <!-- News -->
        <div class="News">
          <span> خبرنامه کیهان وب </span>
          <h2>عضو خبرنامه کیهان وب شوید !</h2>
          <p>
            با عضویت در خبرنامه فلایتیو، از آخرین پیشنهادها، تخفیف‌ها و اخبار
            باخبر خواهید شد. همچنین بهترین مقاصد گردشگری را به شما معرفی خواهیم
            کرد.
          </p>
          <input type="ایمیل" placeholder="ایمیل را وارد کنید" />
          <button>ثبت و عضویت</button>
        </div>
        <!-- social media -->
        <div class="social">
          <span>تلگرام و اینستاگرام و.....</span>
          <h2>کیهان وب در شبکه های اجتماعی</h2>
          <div class="social-instagram">
            <img src="../../assets/img/instagram.png" />
            <p>فلایتو در اینستاگرام</p>
            <span class="material-icons"> arrow_back_ios </span>
          </div>
          <div class="social-more">
              <div class="item-social"><img src="../../assets/img/youtube.png" /></div>
              <div class="item-social"><img src="../../assets/img/telegram.png" /></div>
              <div class="item-social"><img src="../../assets/img/facebook.png" /></div>
          </div>
        </div>
      </div>
      <!-- left bar -->
      <!-- img App -->
      <div class="img-app">
        <img src="../../assets/img/app.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Media {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 10px;
}
.right-box {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 60px;
}
.right-box .News {
  width: 60%;
  height: 380px;
  background: -webkit-linear-gradient(to right, #de6161, #2657eb);
  background: linear-gradient(to right, rgb(58, 111, 179), var(--test));
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  color: #fff;
}
.right-box .News > * {
  margin-top: 15px;
}
.News span {
  color: rgb(193, 182, 182);
}
.News h2 {
  font-weight: 400;
  font-size: 1.6rem;
}
.News input {
  height: 60px;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  padding: 10px;
  font-size: 1rem;
  outline: none;
}

.News button {
  height: 60px;
  border-radius: 10px;
  border: none;
  font-size: 1.5rem;
  color: var(--test);
}
.img-app {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.img-app img {
  width: 70%;
  box-sizing: border-box;
  padding-top: 40px;
    transition: all 0.3s ease-in;
}
.img-app img:hover{
 transform: scale(1.1);

}
.social {
  width: 60%;
  height: 290px;
  background-color: rgb(241, 242, 246);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 40px 30px;
}
.social span {
  color: rgb(58, 111, 179);
  font-size: 1.2rem;
}
.social h2 {
  font-weight: 400;
}
.social-instagram {
  width: 80%;
  height: 50px;
  background: linear-gradient(to right, rgb(58, 111, 179), var(--test));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-radius: 10px;
  color: #fff;
}
.social-instagram > * {
  margin-right: 6px;
}
.social-instagram img {
  width: 30px;
}
.social-instagram span{
    color: #fff;
}
.social-more {
    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
.social-more img{
width: 30px;
}
.item-social{
   display: flex;
    justify-content: space-around;
    align-items: center;
    width: 65px;
    height: 65px;
  background: linear-gradient(to right, rgb(58, 111, 179), var(--test));

    border-radius: 50%;
}
</style>