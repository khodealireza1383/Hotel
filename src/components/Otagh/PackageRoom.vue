<template>
  <div class="navbar">
    <ul>
      <div class="indicator">
        <li @click.prevent="count = 'four'" :class="{ show: count === 'four' }">
          <a href="#">
  <img src="../../assets/img/four.png" alt="">
          </a>
        </li>
        <li
          @click.prevent="count = 'three'"
          :class="{ show: count === 'three' }"
        >
          <a href="#">
       <img src="../../assets/img/three.png" alt="">
          </a>
        </li>
        <li @click.prevent="count = 'two'" :class="{ show: count === 'two' }">
          <a href="#">
        <img src="../../assets/img/two.png" alt="" class="im1">
          </a>
        </li>
        <li @click.prevent="count = 'one'" :class="{ show: count === 'one' }">
          <a href="#">
         <img src="../../assets/img/one.png" alt="" class="im1">
          </a>
        </li>
        <div class="circle">
          <span class="material-icons">
keyboard_double_arrow_up
</span>
        </div>
      </div>
    </ul>
  </div>

  <div class="container-room">
    <div class="title-room">
      <span class="material-icons"> shopping_cart </span>
      <h3>رزرو اتاق در هتل کیهان وب</h3>
    </div>
    <div class="box-room">
      <div class="bg-box">
        <p>ظرفیت اتاق</p>
        <p>نوع اتاق</p>
        <p>صبحانه | نهار شام</p>
        <p>قیمت (هرشب)</p>
      </div>
    </div>
    <!-- --------------------- Our single room --------------- -->
    <div class="room"
    v-if="count == 'one'"
          :class="{ display: count === 'one' }"
    >
      <div class="item-room" v-for="oneGuest in oneGuests" :key="oneGuest.id">
        <div class="widthHover"></div>
        <div class="img-room">
          <img :src="oneGuest.imgRoom" alt="" />
        </div>
        <div class="Capacity">
          <span class="material-icons"> person_outline </span>
        </div>
        <div class="name-room">
          <p>{{ oneGuest.nameR }}</p>
          <span>رزرو 100% آنلاین </span>
        </div>
        <div class="done-false">
          <span class="material-icons"> done </span>
          <span class="material-icons"> close </span>
        </div>
        <div class="price">
          <p>قیمت با تخفیف</p>
          <span>{{ oneGuest.price }}</span>
        </div>
        <div class="button-rezerv">
          <button class="button">
            رزرو اتاق <span class="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
    <!-- -----------------Our double room-------------- -->
    <div class="room room2"
       v-if="count == 'two'"
          :class="{ display: count === 'two' }">
      <div class="item-room" v-for="twoGuest in twoGuests" :key="twoGuest.id">
        <div class="widthHover"></div>
        <div class="img-room">
          <img :src="twoGuest.imgRoom" alt="" />
        </div>
        <div class="Capacity">
          <span class="material-icons active"> person </span>
        </div>
        <div class="name-room">
          <p>{{ twoGuest.nameR }}</p>
          <span>رزرو 100% آنلاین </span>
        </div>
        <div class="done-false">
          <span class="material-icons"> done </span>
          <span class="material-icons"> close </span>
        </div>
        <div class="price">
          <p>قیمت با تخفیف</p>
          <span>{{ twoGuest.price }}</span>
        </div>
        <div class="button-rezerv">
          <button class="button">
            رزرو اتاق <span class="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
    <!-- --------------- Our triple room -------------- -->
    <div class="room room2"
       v-if="count == 'three'"
          :class="{ display: count === 'three' }">
      <div class="item-room" v-for="threeGuest in threeGuests" :key="threeGuest.id">
        <div class="widthHover"></div>
        <div class="img-room">
          <img :src="threeGuest.imgRoom" alt="" />
        </div>
        <div class="Capacity">
          <span class="material-icons active"> person </span>
        </div>
        <div class="name-room">
          <p>{{ threeGuest.nameR }}</p>
          <span>رزرو 100% آنلاین </span>
        </div>
        <div class="done-false">
          <span class="material-icons"> done </span>
          <span class="material-icons"> close </span>
        </div>
        <div class="price">
          <p>قیمت با تخفیف</p>
          <span>{{ threeGuest.price }}</span>
        </div>
        <div class="button-rezerv">
          <button class="button">
            رزرو اتاق <span class="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
    <!-- ------------- Our four-person room ------------- -->
    <div class="room room2"
       v-if="count == 'four'"
          :class="{ display: count === 'four' }">
      <div class="item-room" v-for="fourGuest in fourGuests" :key="fourGuest.id">
        <div class="widthHover"></div>
        <div class="img-room">
          <img :src="fourGuest.imgRoom" alt="" />
        </div>
        <div class="Capacity">
          <span class="material-icons active"> person </span>
        </div>
        <div class="name-room">
          <p>{{ fourGuest.nameR }}</p>
          <span>رزرو 100% آنلاین </span>
        </div>
        <div class="done-false">
          <span class="material-icons"> done </span>
          <span class="material-icons"> close </span>
        </div>
        <div class="price">
          <p>قیمت با تخفیف</p>
          <span>{{ fourGuest.price }}</span>
        </div>
        <div class="button-rezerv">
          <button class="button">
            رزرو اتاق <span class="material-icons"> shopping_cart </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: "one",
      oneGuests: [
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی تک نفره",
          price: "1.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق تک تخته جزیره",
          price: "2.000.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق تک تخته دریا",
          price: "2.700.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی تک نفره",
          price: "1.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت یه نفره  معمولی جزیره",
          price: "1.000.000 تومان",
        },
      ],
      twoGuests: [
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی دو نفره",
          price: "2.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق دو تخته جزیره",
          price: "3.000.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق دو تخته دریا",
          price: "3.700.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی دو نفره",
          price: "2.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت دونفره   معمولی جزیره",
          price: "2.000.000 تومان",
        },
      ],
       threeGuests: [
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی سه نفره",
          price: "2.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق سه تخته جزیره",
          price: "4.000.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق سه تخته دریا",
          price: "4.700.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی سه نفره",
          price: "3.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت سه نفره    معمولی جزیره",
          price: "3.000.000 تومان",
        },
      ],
       fourGuests: [
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی چهار نفره",
          price: "3.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق چهار تخته جزیره",
          price: "4.000.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "اتاق چهار تخته دریا",
          price: "4.700.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت ساحلی چهار نفره",
          price: "3.300.000 تومان",
        },
        {
          imgRoom: require("../../assets/img/more-room3.jpg"),
          nameR: "سوییت چهار نفر  معمولی جزیره",
          price: "3.000.000 تومان",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 50px;
}

.indicator {
  width: 500px;
  height: 100px;
  background-color:var(--test);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
}

.indicator li a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 90px;
}

.indicator li a img {
 width: 100px;
}
.im1{
  box-sizing: border-box;
  padding-bottom: 20px;
}

.indicator li a span.active {
  opacity: 0;
  pointer-events: none;
}

.indicator .circle {
  position: absolute;
  bottom: -18px;
  left: 49px;
  height: 35px;
  width: 35px;
  background: #fff;
border-radius: 45%;
text-align: center;
color: var(--test);
  transition: all 0.2s ease-in;
}

/* .circle::before {
  content: "";
  position: absolute;
  left: -15px;
  bottom: 0%;
  height: 22px;
  width: 20px;
  box-shadow: 0 10px 0 #fff;
}

.circle::after {
  content: "";
  position: absolute;
  right: -15px;
  bottom: 0%;
  height: 22px;
  width: 20px;

  box-shadow: 0 10px 0 #fff;
} */

li:nth-child(1).show ~ .circle {
left: calc(500px - 80px);

}

li:nth-child(2).show ~ .circle {
left: calc(500px - 210px);
  transition: all 0.2s ease-in;
}

li:nth-child(3).show ~ .circle {
left: calc(500px - 330px);
  transition: all 0.2s ease-in;
}

li:nth-child(4).show ~ .circle {
  transform: translateX(0%);
  transition: all 0.2s ease-in;
}
.container-room {
  width: 90%;

  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 50px;
}
.title-room {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 60px;
}
.title-room span {
  font-size: 45px;
  color: rgb(36, 76, 128);
}
.title-room h3 {
  box-sizing: border-box;
  padding-right: 10px;
  padding-top: 10px;
  font-size: 25px;
  color: var(--test);
  font-weight: 400;
}
.container-room .box-room {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-box {
  width: 90%;
  height: 100%;
  background-color: var(--test);
  color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  padding: 0 60px;
}
.room {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}
.room2{
  display: none;
}
.item-room {
  width: 90%;
  height: 100%;
  border: 1px solid rgba(36, 76, 128, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 30px;
  box-sizing: border-box;
  padding: 10px 15px;
  position: relative;
  transition: all 0.3s ease-in;
}
.widthHover {
  content: "";
  position: absolute;
  right: -25px;
  width: 25px;
  height: 140px;
  background-color: var(--test);
  border-radius: 0 10px 10px 0;
  display: none;
  transition: all 0.3s ease-in;
}
.item-room:hover {
  transform: scale(0.9);
}
.item-room:hover .widthHover {
  display: block;
  cursor: pointer;
}
.img-room img {
  width: 170px;
  height: 150px;
  border-radius: 10px;
}
.done-false span {
  margin-right: 30px;
}
.name-room p {
  font-size: 23px;
  color: rgb(65, 65, 67);
  font-weight: 300;
}
.name-room span {
  background: rgb(101, 203, 119);
  color: #fff;
  padding: 7px;
  border-radius: 20px;
}
.price {
  position: relative;
  right: 30px;
}
.price p {
  color: rgb(117, 117, 117);
  font-size: 20px;
}
.price span {
  color: var(--test);
  font-size: 26px;
  position: relative;
  top: -20px;
  font-weight: 600;
}
.display{
  display:flex
}
</style>