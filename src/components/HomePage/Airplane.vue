<template>
<div class="airplane">
<div class="play-airplane"></div>
<div class="shahr">
    <img src="../../assets/img/33.png" alt="">
</div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>
.airplane{
    width: 100%;
    height: 540px;
}
.play-airplane{
margin-top: 300px;
width: 200px;
height: 95px;
 background-image: url(../../assets/img/airplane4.png);
 background-repeat: no-repeat;
position: relative;
top: 70px;
animation: move 15s ease infinite;    
}
.shahr img{
    width: 70%;
    height: 400px;
    position: relative;
    top: 66px;
    display: block;
    margin: 0 auto;
}
@keyframes move {
    0%{
        transform: translateX(0);

    }
    50%{
        transform: translateX(-2230px);
         
    }
      75%{
    background-image: url(../../assets/img/airplane5.png);
         transform: translateX(300px);
    }
    85% {
         background-image: url(../../assets/img/airplane4.png);
    }
 

    
}

</style>