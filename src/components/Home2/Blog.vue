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
                ظاهر متن باشد.
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
          <img src="../../assets/img/hotel.jpg" alt="" />
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
                ظاهر متن باشد.
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
          <img src="../../assets/img/hotel.jpg" alt="" />
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
  font-size: 2.5rem;
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
  background: linear-gradient(to right, rgb(58, 111, 179), var(--test));
}
.content-room {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nazarat {
  width: 40%;
}
.title-room span {
  color: white;
  font-size: 2rem;
  padding-right: 25px;
  position: relative;
  top: 10px;
}
.mtn-room p {
  width: 80%;
  font-size: 15px;
  color: #fff;
  padding-top: 20px;
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
  color: #fff;
  height: 40px;
  border-radius: 5px;
  font-size: 21px;
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

@media only screen and (max-width: 1200px) {

  .title-blog {
    height: 150px;
  }
  .mtn-room p {
    width: 90%;
  }
  .title-room span {
    position: relative;
    top: 10px;
  }
  .btn-rezerv,
  .star {
    top: 30px;
  }
}
@media only screen and (max-width: 1024px) {
    .mtn-room p {
margin-top: -10px;
  }
}
@media only screen and (max-width: 768px) {
  .img-room {
    display: none;
  }
  .item-right .detaile-room {
    width: 100%;
  }
}
@media only screen and (max-width: 480px) {
  * {
    margin: 0;
    padding: 0;
  }
  .title-blog {
    width: 100%;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title-blog h2 {
    font-size: 2.4rem;
  }
  .item-right {
    width: 90%;
    height: 320px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .item-right .detaile-room {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: linear-gradient(to right, rgb(58, 111, 179), var(--test));
  }
  .content-room {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .nazarat {
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .btn-rezerv,
  .star {
    position: relative;
    top: 0;
    left: 0;
    margin-left: 20px;
  }
}
</style>