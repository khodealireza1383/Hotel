<template>
  <div class="Tourist">
    <div class="Title-tourist">
      <h2>وبلاگ</h2>
    </div>
     <!-- ---------- Mashhad sights above ----------------- -->
    <div class="item-tourist">
     
      <div class="top-item">
        <div class="left-top-item  hover-Tourist">
          <div class="bg-color">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
        <div class="right-top-item  hover-Tourist" >
          <div class="bg-color">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------- Mashhad sights above center----------------- -->
    <div class="item-tourist2">
      <div class="center-item">
        <div class="left-center-item hover-Tourist">
          <div class="bg-color2">
 <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
        <div class="center-center-item hover-Tourist">
          <div class="bg-color2">
 <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
           <div class="right-center-item hover-Tourist">
          <div class="bg-color2">
 <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
      </div>
    </div>

       <div class="item-tourist part3">
     
      <div class="top-item">
           <div class="right-top-item hover-Tourist">
          <div class="bg-color">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
        <div class="left-top-item hover-Tourist">
          <div class="bg-color">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
     
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "الماس شرق",
      text: "نگین بازار های مشهد  واقع در میدان  سپاد مرکر تفریحی  سرگرمی  نگین بازار های مشهد واقع در میدانت سپاد  مرکز تفریحی  سرگرمی",
    };
  },
};
</script>

<style scoped>
.Tourist {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.Title-tourist {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Title-tourist h2 {
  color: var(--test);
  font-size: 4rem;
  font-weight: 400px;
}
.item-tourist {
  width: 100%;
  display: flex;
  justify-content: center;
}
.item-tourist .top-item {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-top-item {
  background-image: url("../../assets/img/7.jpg");
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  width: 28%;
  height: 250px;
}
.right-top-item {
  width: 70%;
  height: 250px;
  background-image: url("../../assets/img/bg-item-blog1.jpg");
  background-size: cover;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bg-color {
  width: 100%;
  height: 100%;
  background-color: rgba(36, 76, 128, 0.67);
  border-radius: 8px;
  transition: all 0.6s ease-in-out;
}
.top-item h3 {
  color: #fff;
  font-size: 40px;
  font-weight: 400px;
  text-align: center;
}
.top-item p {
  color: #fff;
  font-size: 20px;
  font-weight: 400px;
  position: relative;
  top: -20px;
   text-align: center;
   box-sizing: border-box;
   padding: 0 10px
}
.item-tourist2 {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
margin-top: 15px;
margin-right: 10px;
}
.center-item {
  width: 80%;
  display: flex;
  justify-content: center;
}
.left-center-item {
  width: 28%;
  height:400px;
  background-size: cover;
  background-image: url("../../assets/img/6(1).jpg");
 margin-left: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
   right: 15px;
}
.center-center-item {
  width: 40%;
   height:400px;
  background-size: cover;
  background-image: url("../../assets/img/7.jpg");
  background-position: center;
 border-radius: 8px;
}
.bg-color2{
  width: 100%;
  height: 100%;
  background-color:rgba(36, 76, 128, 0.67);
  border-radius: 8px;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.6s ease-in-out;
}
.right-center-item {
  width: 28%;
  height:400px;
  background-size: cover;
  background-image: url("../../assets/img/6(1).jpg");
  margin-right: 30px;
   border-radius: 8px;
   position: relative;
   left: 15px;
}
.center-item p {
  color: #fff;
  font-size: 20px;
  font-weight: 400px;
  position: relative;
  top: -20px;
   text-align: center;
   box-sizing: border-box;
   padding: 0 10px
}
.center-item h3 {
  color: #fff;
  font-size: 40px;
  font-weight: 400px;
  text-align: center;
}
.part3{
  margin-top: 115px;
  margin-right:15px ;
}
.hover-Tourist:hover .bg-color,
.hover-Tourist:hover .bg-color2{
opacity: 0;
}
</style>