<template>
  <div class="title-rezerv">
    <p>مسیر رزرواسیون آنلاین</p>
  </div>
  <div class="rezerv">
    <div class="rezerv-top">
      <div class="rez-item right-top">
        <p class="title">گام دوم</p>
        <p class="content">
          سپس دکمه جستجو را انتخاب کنید منتظر بمانید تا سیستم نتایجی را ارایه
          دهد
        </p>
      </div>
      <div class="rez-item left-top">
        <p class="title">گام چهارم</p>
        <p class="content">
          سپس هزینه ی رزرو اتاق را پرداخت و کد پیگیر رزرو خود را یادداشت کنید
        </p>
      </div>
    </div>
    <div class="line">
      <div class="circle-line"></div>
      <div class="circle-line-2"></div>

      <div class="circle-icon margin-1">
        <img src="../../assets/img/1.png" alt="" class="img-rez" />
      </div>
      <div class="circle-icon margin-2">
        <img src="../../assets/img/2.png" alt="" class="img-rez" />
      </div>
      <div class="circle-icon margin-3">
        <img src="../../assets/img/4.png" class="img-rez" />
      </div>
      <div class="circle-icon margin-4">
        <img src="../../assets/img/3.png" alt="" class="img-rez" />
      </div>
      <div class="circle-line-2"></div>

      <div class="circle-line"></div>
    </div>
    <div class="rezerv-bottom">
      <div class="rez-item-bottom right-bottom">
        <p class="title">گام اول</p>
        <p class="content">
          در قسمت اسلایدر تاریخ ورود و خروج و اتاق مورد نظر خود را تنظیم کنید
        </p>
      </div>
      <div class="rez-item-bottom left-bottom">
        <p class="title">گام سوم</p>
        <p class="content">
          در میان نتایج جستجو اتاق مورد نظر خود را انتخاب و روی دکمه رزرو اتاق
          کلیک کنید
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title-rezerv {
  width: 100%;
  text-align: center;
  position: relative;
  top: -50px;
}

.title-rezerv p {
  font-size: 60px;
  color: rgb(58, 111, 179);
  text-shadow: 3px 0px 1px rgb(139, 185, 245);
}

.rezerv {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  top: 50px;
}
.line {
  width: 100%;
  height: 3px;
  background-color: rgb(58, 111, 179);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 30px;
}
.rezerv-top {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -150px;
}
.rez-item {
  width: 20%;
  height: 350px;
  background-color: var(--test);
  margin-left: 90px;
  border: 5px solid rgb(58, 111, 179);
  border-radius: 10px;
  position: relative;
  animation: move 4s infinite;
}
.rez-item::before {
  content: "";
  position: absolute;
  bottom: -25px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-color: var(--test);
  border-right: 5px solid rgb(58, 111, 179);
  border-bottom: 5px solid rgb(58, 111, 179);
  transform: rotate(45deg);
}
.line .circle-line {
  width: 25px;
  height: 25px;
  background-color: rgb(58, 111, 179);
  border-radius: 50%;
}
.line .circle-line-2 {
  width: 40px;
  height: 40px;
  background-color: rgb(58, 111, 179);
  border-radius: 50%;
}
.line .circle-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(61, 114, 180);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 14px solid rgb(31, 81, 150);
}
.right-bottom {
  position: relative;
  left: 60px;
  top: -35px;
}
.left-bottom {
  position: relative;
  right: 15px;
}
.right-top {
  margin-right: 10px;
}
.left-top {
  position: relative;
  right: 80px;
  top: 30px;
}
.margin-1 {
  position: relative;
  right: 30px;
}
.margin-2 {
  position: relative;
  left: 0px;
}
.margin-3 {
  position: relative;
  left: 20px;
}
.margin-4 {
  position: relative;
  left: 30px;
}
.img-rez {
  width: 75px;
}
.title {
  font-size: 3rem;
  position: absolute;
  right: 20px;
  top: -38px;
  color: white;
}
.content {
  font-size: 2rem;
  position: absolute;
  right: 20px;
  top: 80px;
  color: white;
  width: 250px;
  text-align: right;
}
.rezerv-bottom {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 220px;
}
.rez-item-bottom {
  width: 20%;
  height: 350px;
  background-color: var(--test);
  margin-left: 90px;
  border: 5px solid rgb(58, 111, 179);
  border-radius: 10px;
  position: relative;
  animation: moveb 4s infinite;
}
.rez-item-bottom::before {
  content: "";
  position: absolute;
  top: -25px;
  right: 70px;
  width: 40px;
  height: 40px;
  background-color: var(--test);
  border-top: 5px solid rgb(58, 111, 179);
  border-left: 5px solid rgb(58, 111, 179);
  transform: rotate(45deg);
}
@keyframes move {
  25% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(14px);
  }
}
@keyframes moveb {
  25% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>