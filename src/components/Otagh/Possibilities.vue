<template>
  <div class="Possibilities">
    <div class="bg-Possibilities">
      <div class="title-poss">
        <span class="material-icons"> assignment_turned_in </span>
        <h2>امکانات اتاق های کیهان وب</h2>
      </div>
      <div class="About-poss">
        <span class="material-icons"> done </span>
        <p>امکانات زیر در اتاق موجود می باشد</p>
      </div>
      <div class="item-poss">
        <div class="item">
          <ul>
            <li v-for="poss in Possibilities" :key="poss">
              <span class="material-icons"> {{ poss.img }}</span>
              <p>{{ poss.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Possibilities: [
        { name: "لابی", img: "deck" },
        { name: "آسانسور", img: "elevator" },
        { name: "صندوق امانات", img: "lock" },
        { name: "نماز خانه", img: "mosque" },
        { name: "آتلیه", img: "photo_camera" },
        { name: "اضطراری ", img: "do_not_step" },
        { name: "زنگ هشدار", img: "notifications_active" },
        { name: " مرکز خرید ", img: "shopping_cart" },
        { name: "کافی ", img: "local_cafe" },
        { name: "تاکسی", img: "local_taxi" },
        { name: " اتاق چمدان", img: "luggage" },
        { name: " روزنامه ", img: "feed" },
        { name: "  پذیرش  ", img: "propane_tank" },
        { name: " واکس ", img: "ice_skating" },
        { name: " تلفن(اپراتور)", img: "support_agent" },
        { name: " عصررانه ", img: "lunch_dining" },
      ],
    };
  },
};
</script>

<style>
.Possibilities {
  width: 100%;
}
.bg-Possibilities {
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
.title-poss {
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 60px;
}
.title-poss span {
  color: var(--test);
  font-size: 55px;
}
.title-poss h2 {
  color: var(--test);
  font-size: 27px;
  padding-right: 12px;
  padding-top: 10px;
  font-weight: 300;
}
.About-poss {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 60px;
}
.About-poss span {
color: var(--test);
  font-size: 40px;
}
.About-poss p {
 
  font-size: 22px;
  padding-right: 12px;
  padding-top: 10px;
  font-weight: 300;
}
.item-poss {
  width: 100%;
}
.item-poss .item ul {
  width: 100%;
  display: flex;

  flex-wrap: wrap;
}
.item{
  box-sizing: border-box;
  padding-right: 20px;
}
.item-poss .item ul li {
  width: 300px;
  display: flex;

  align-items: center;

}
.item-poss .item ul li span{
    font-size: 47px;
    color: var(--test);
}
.item-poss .item ul li p{
  font-size: 22px;
  padding-right: 12px;
  padding-top: 10px;
  font-weight: 300;
}
@media only screen and (max-width: 480px) {
.item-poss .item ul li {
  width: 50%;
  display: flex;
  align-items: center;

}
}
</style>