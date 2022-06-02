<template>
  <div class="contact">
    <div class="bg-back">
      <div class="bg">
        <div class="input-contact">
          <form action="">
            <label for=""> نام و نام خانوادگی</label>
            <input type="text" placeholder=" نام خود را وارد کنید " />
            <label for=""> شماره تلفن</label>
            <input type="text" placeholder=" شماره تلفن خود را وارد کنید " />
            <label for=""> آدرس ایمیل</label>
            <input type="email" placeholder=" ادرس ایمیل خود را وارد کنید " />
            <input type="submit" value="ارسال" />
          </form>
        </div>
        <div class="img-contact">
          <img src="../../assets/img/bg-contact2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/img/bg-content7.png");
  box-sizing: border-box;
}
.bg-back {
  width: 60%;
  background-color: rgba(96, 149, 215, 0.6);
  border-radius: 10px;
  transform: rotate(-4deg);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.bg {
  width: 98%;
  background-color: rgb(61, 114, 180);
  border-radius: 10px;
  transform: rotate(3deg);
  display: flex;
  justify-content: center;
}
.bg .img-contact {
  width: 50%;
}
.bg .img-contact img {
  width: 100%;
  height: 73vh;
  border-radius: 10px;
}
.input-contact {
  width: 50%;
}
form {
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 30px 40px;
}
label {
  font-size: 1.2rem;
  color: #fff;
  margin-top: 20px;
}
form input {
  width: 85%;
  height: 45px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-top: 10px;
  box-sizing: border-box;
  padding: 10px;
}
form input::placeholder {
  font-size: 0.8rem;
  color: rgb(36, 76, 128);
}
input[type="submit"] {
  width: 85%;
  height: 100%;
  margin-top: 30px;
  background-color: rgb(36, 76, 128);
  color: #fff;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  padding: 10px 0;
}
@media only screen and (max-width: 1200px) {
  .contact {
    height: 80vh;
  }
  .bg .img-contact img {
    height: 50vh;
  }
}
@media only screen and (max-width: 768px) {
  .contact {
    height: 75vh;
  }
  .bg-back {
    width: 80%;
  }
  .bg {
    width: 98%;
  }
  .bg .img-contact img {
    height: 65vh;
  }
  label {
    font-size: 1.1rem;
  }
  form input {
    width: 100%;
  }
  input[type="submit"] {
    width: 100%;
    height: 100%;
    margin-top: 30px;
    background-color: rgb(36, 76, 128);
    color: #fff;
    font-size: 1rem;
  }
}
@media only screen and (max-width: 480px) {
  .contact {
    height: 70vh;
  
  }
  .bg {
    flex-direction: column-reverse;
    background-image: url("../../assets/img/bg-contact2.jpg");
    background-size: cover;
  }
  .bg .img-contact {
    display: none;
  }
  .input-contact {
  width: 100%;
}
  .label{
    width: 100%;
    font-size: 1.3rem;
  }
}
</style>