<template>
  <div id="Home">
    
 
  <router-link to="/Ticket"> <img id="Play" src="./../assets/PlayButton.png" > </router-link>
  

  </div>
</template>

<style>
#Home{
background-image: url(./../assets/Home.jpg);
background-size: 100%;
background-repeat:no-repeat;
width: 100vw;
height: 90vh;
background-size: cover;
}

#Play{
    position: absolute;
   border-radius: 10%;
    width: 350px;
    height: 150px;
    margin-left: 38%;
    margin-top: 10%;
}
</style>
