<template>
  <div id="Ticket">
    
    <button  v-if="!prekidac" id="GetTicket" v-on:click="BirajTiket">Get Ticket !</button>

<p id="Game1">Igra pocinje za :</p>
<p id="Counter">{{counter}}</p>

<div v-if="prekidac" id="desetsek">Ne mozete vise birati tikete !</div>

<div v-if="prekidacc" id="Biraj">

<button  id="ESC" v-on:click="ESC">X</button>

<button  v-bind:class="{'Brojj':!clicked(broj),'OznacenBroj':clicked(broj)}" v-on:click="getBroj(broj)" v-bind:key="broj" v-for="broj in niz">{{broj}}</button>
</div>

<div id="BrojTiketa"> <p id="BrojTiketaP">Broj Tiketa: {{BrojTiketa}}</p></div>

  </div>
  


</template>


<script>



export default {
  name: "Ticket",
  components: {
    
  },
    data: function() {
    return {
      counter: "02:00",
   prekidac:false,
   prekidacc:false,
   niz:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
   KorisnickeKomb:[],
   nizTemp:[],
   BrojTiketa:0,
  }},
  created:function(){
    var self = this;

    var minuta = 2;
        var sekunda = 0;

  setTimeout(function() {
            self.prekidac = true;
            self.prekidacc = false;
            self.nizTemp=[];
            self.BrojTiketa--;
                }, 110000);

                setTimeout(function() {
           self.$router.push("/Game")
                }, 120000);

var sekCount = setInterval(function(){
                     if(sekunda != 0){
                if(sekunda <= 10){
                    sekunda--;
                    sekunda = "0" + sekunda;
                }else{
                    sekunda--;
                }
            }else{
                sekunda = 59;
                minuta--;
            }
            self.counter = "0" + minuta + " : " +sekunda;

         
            if(minuta == 0 && sekunda == 0){
                clearInterval(sekCount);
            }
        }, 1000);
  },


  methods:{

    clicked(x){
      if(this.nizTemp.includes(x)){
        return true
      }else{
        return false
      }
    },
    BirajTiket:function(){
      if(this.prekidacc==false){
this.prekidacc=!this.prekidacc;
this.BrojTiketa++;}
    },

    ESC:function(){
this.BrojTiketa--;
this.nizTemp=[];
this.prekidacc=!this.prekidacc;
    },

    getBroj:function(x){
     let temp={};
     if(!this.nizTemp.includes(x)){
     this.nizTemp.push(x);
     
     if(this.nizTemp.length==6){
temp.ID=this.BrojTiketa;
temp.Kombinacija=this.nizTemp;
this.KorisnickeKomb.push(temp);
this.nizTemp=[];
this.prekidacc=!this.prekidacc;
       }
     }


    }
  }
 }
</script>


<style>
.Brojj{

border-radius: 50%;
background-image: url("./../assets/KuglicaMala.png");
margin-top: 4%;
width: 48px;
height: 48px;
cursor: pointer;
}
.OznacenBroj{
  border-radius: 50%;
margin-top: 4%;
width: 48px;
height: 48px;
background-color: black;
border-color: black;
}

#BrojTiketa{
width: 130px;
height: 75px;
background-color: yellow;
position: absolute;
border:solid;
border-radius: 20%;
margin-left: 80vw;
bottom: 15vh;
}
#BrojTiketaP{
  color: red;
  font-size: 25px;
  text-align: center;
  margin-top: 15px;
}
#ESC{
border: solid;
border-radius: 50%;
color: white;
background-color: red;
border-color: black;
left: 95%;
position: absolute;
width: 30px;
height: 30px;
cursor: pointer;
}
#Ticket{
position: static;
background-image: url(./../assets/GameW.jpg);
background-size: 100%;
background-repeat:no-repeat;
width: 100vw;
height: 90vh;
background-size: cover;
}
#GetTicket{
  width: 120px;
  height: 80px;
  position: absolute;
  margin-left: 10vw;
  margin-top: 10vh;
  border:solid;
  border-radius: 30%;
  background-color: yellow;
  font-size: 20px;
border-color: black;
color: rgb(204, 7, 7);
cursor: pointer;
}
#Game1{
  position: absolute;
  margin-left: 35%;
  margin-top: 25%;
  color: white;
font-size: 60px;
border:solid;
border-radius: 20%;
}

#Counter{
  position: absolute;
  margin-left: 43%;
  margin-top: 35%;
  color: white;
font-size: 60px;
}
#desetsek{
position: absolute;
  margin-left: 25%;
  margin-top: 7%;
  color: white;
font-size: 60px;
}

#Biraj{
  position: absolute;
  width: 800px;
  height: 300px;
  margin-left: 25%;
  margin-top: 1%;
 
}

</style>
