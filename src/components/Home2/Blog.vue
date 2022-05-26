<template>
  <div class="blog">
    <div class="title-blog">
      <h2>بهترین انتخاب ها برای شما</h2>
    </div>
    <!-- one blog -->
    <div class="content-slider">
      <div class="item-right">
        <div class="detaile-room">
          <div class="title-room">
            <span>رویال </span>
          </div>
          <div class="content-room">
            <div class="mtn-room">
              <p>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا
                صاحب کار خود نشان دهند
              </p>
            </div>
            <div class="nazarat">
              <div class="star">
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
              </div>
              <div class="btn-rezerv">
                <button>دیدن اتاق</button>
              </div>
            </div>
          </div>
        </div>
        <div class="img-room">
          <img src="../HomePage/hotel.jpg" alt="" />
          <div class="bg-img"></div>
        </div>
      </div>
    </div>
    <!-- two blog -->
<div class="content-slider">
      <div class="item-right">
        <div class="detaile-room">
          <div class="title-room">
            <span>رویال </span>
          </div>
          <div class="content-room">
            <div class="mtn-room">
              <p>
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و
                ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از
                متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا
                صاحب کار خود نشان دهند
              </p>
            </div>
            <div class="nazarat">
              <div class="star">
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
                <span class="material-icons"> star </span>
              </div>
              <div class="btn-rezerv">
                <button>دیدن اتاق</button>
              </div>
            </div>
          </div>
        </div>
        <div class="img-room">
          <img src="../HomePage/hotel.jpg" alt="" />
          <div class="bg-img"></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-blog {
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title-blog h2 {
  font-size: 3rem;
  font-weight: 400;
  color: rgb(58, 111, 179);
  text-shadow: 3px 0px 1px rgb(139, 185, 245);
}
.content-slider {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.item-right {
  width: 80%;
  height: 230px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.item-right .detaile-room {
  width: 70%;
  height: 100%;
  border-radius: 15px;
  background-color: var(--test);
}
.mtn-room p {
  width: 80%;
}
.content-room {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nazarat {
  width: 60%;
}
.title-room span {
  color: white;
  font-size: 2.5rem;
  padding-right: 25px;
  position: relative;
  top: 10px;
}
.mtn-room p {
  color: #fff;
  padding-right: 23px;
  text-align: justify;
  text-justify: inter-word;
}
.btn-rezerv {
  width: 130px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 7px;
  position: relative;
  top: 25px;
  left: 15px;
}
.btn-rezerv button {
  border: none;
  background-color: rgb(58, 111, 179);
  width: 120px;
  color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 25px;
}
.star {
  position: relative;
  left: 10px;
  top: 25px;
  color: white;
}
.img-room {
  width: 250px;
  height: 230px;
  background-color: black;
  margin-right: 20px;
  border-radius: 15px;
  position: relative;
}
.img-room img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 250px;
  height: 230px;
  border-radius: 15px;
  
}
.bg-img {
  width: 250px;
  height: 230px;
  background-color: rgba(36, 76, 128, 0.47);
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 15px;
  cursor: pointer;
}
.img-room:hover .bg-img {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

</style>