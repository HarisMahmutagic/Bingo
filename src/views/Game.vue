<template>
  <div id="Game">

  <div id="PrviRed"><br><br><br><br>
<div   id="Jedan"><p class="BrojUKuglici">{{dobitnaKombinacija[5]}}</p></div><br><br>
<div id="Dva"><p class="BrojUKuglici">{{dobitnaKombinacija[6]}}</p></div><br> <br>
<div id="Tri"><p class="BrojUKuglici">{{dobitnaKombinacija[7]}}</p></div><br><br>
<div id="Cetiri"><p class="BrojUKuglici">{{dobitnaKombinacija[8]}}</p></div><br><br>
<div id="Pet"><p class="BrojUKuglici">{{dobitnaKombinacija[9]}}</p></div><br><br>
<div id="Sest"><p class="BrojUKuglici">{{dobitnaKombinacija[10]}}</p></div><br><br>
<div id="Sedam"><p class="BrojUKuglici">{{dobitnaKombinacija[11]}}</p></div><br><br>
<div id="Osam"><p class="BrojUKuglici">{{dobitnaKombinacija[12]}}</p></div><br><br>
<div id="Devet"><p class="BrojUKuglici">{{dobitnaKombinacija[13]}}</p></div><br><br>
  </div>
   <div id="DrugiRed"><br><br><br><br>
<div class="PRVE">10000</div><br><br><br>
<div class="PRVE">7500</div><br> <br><br><br>
<div class="PRVE">3000</div><br><br><br>
<div class="PRVE">1500</div><br><br><br>
<div class="PRVE">1000</div><br><br><br>
<div class="PRVE">500</div><br><br><br>
<div class="PRVE">300</div><br><br><br>
<div class="PRVE">200</div><br><br><br>
<div class="PRVE">150</div>
  </div>

  <div id="Bubanj"><p id="Centar">{{rand}}</p></div>

<div id="TreciRed">
    <div id="Deset"><p class="BrojUKuglici">{{dobitnaKombinacija[14]}}</p></div><br>
    <div id="Jedanaest"><p class="BrojUKuglici">{{dobitnaKombinacija[15]}}</p></div><br>
    <div id="Dvanaest"><p class="BrojUKuglici">{{dobitnaKombinacija[16]}}</p></div>
</div>
<div id="CetvrtiRed"><br><br><br><br><br><br>
<div class="PRVE">100</div><br><br>
<div class="PRVE">90</div><br> <br>
<div class="PRVE">80</div>
</div>
<div id="PetiRed">
    <div id="Trinaest"><p class="BrojUKuglici">{{dobitnaKombinacija[17]}}</p></div><br>
    <div id="Cetrnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[18]}}</p></div><br>
    <div id="Petnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[19]}}</p></div>
</div>

<div id="SestiRed"><br><br><br><br><br><br>
<div class="PRVE">70</div><br><br>
<div class="PRVE">60</div><br> <br>
<div class="PRVE">50</div>
</div>

<div id="SedmiRed">
    <div id="Sesnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[20]}}</p></div><br>
    <div id="Sedamnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[21]}}</p></div><br>
    <div id="Osamnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[22]}}</p></div>
</div>

<div id="OsmiRed"><br><br><br><br><br><br>
<div class="PRVE">40</div><br><br>
<div class="PRVE">30</div><br> <br>
<div class="PRVE">25</div>
</div>

<div id="DevetiRed">
    <div id="Devetnaest"><p class="BrojUKuglici">{{dobitnaKombinacija[23]}}</p></div><br>
    <div id="Dvadeset"><p class="BrojUKuglici">{{dobitnaKombinacija[24]}}</p></div><br>
    <div id="DvadesetJedan"><p class="BrojUKuglici">{{dobitnaKombinacija[25]}}</p></div>
</div>

<div id="DesetiRed"><br><br><br><br><br><br>
<div class="PRVE">20</div><br><br>
<div class="PRVE">15</div><br> <br>
<div class="PRVE">10</div>
</div>

  <div id="JedanaestiRed"><br><br><br><br>
<div id="DvadesetDva"><p class="BrojUKuglici">{{dobitnaKombinacija[26]}}</p></div><br><br>
<div id="DvadesetTri"><p class="BrojUKuglici">{{dobitnaKombinacija[27]}}</p></div><br> <br>
<div id="DvadesetCetiri"><p class="BrojUKuglici">{{dobitnaKombinacija[28]}}</p></div><br><br>
<div id="DvadesetPet"><p class="BrojUKuglici">{{dobitnaKombinacija[29]}}</p></div><br><br>
<div id="DvadesetSest"><p class="BrojUKuglici">{{dobitnaKombinacija[30]}}</p></div><br><br>
<div id="DvadesetSedam"><p class="BrojUKuglici">{{dobitnaKombinacija[31]}}</p></div><br><br>
<div id="DvadesetOsam"><p class="BrojUKuglici">{{dobitnaKombinacija[32]}}</p></div><br><br>
<div id="DvadesetDevet"><p class="BrojUKuglici">{{dobitnaKombinacija[33]}}</p></div><br><br>
<div id="Trideset"><p class="BrojUKuglici">{{dobitnaKombinacija[34]}}</p></div><br><br>
  </div>

 <div id="DvanaestiRed"><br><br><br><br><br>
<div class="PRVE">9</div><br><br><br>
<div class="PRVE">8</div><br> <br><br>
<div class="PRVE">7</div><br><br><br>
<div class="PRVE">6</div><br><br><br>
<div class="PRVE">5</div><br><br><br>
<div class="PRVE">4</div><br><br><br>
<div class="PRVE">3</div><br><br><br>
<div class="PRVE">2</div><br><br><br>
<div class="PRVE">1</div>
  </div>

   <div id="TrinaestiRed"><br><br><br><br>
<div id="TridesetJedan"><p class="BrojUKuglici">{{dobitnaKombinacija[0]}}</p></div><br><br>
<div id="TridesetDva"><p class="BrojUKuglici">{{dobitnaKombinacija[1]}}</p></div><br> <br>
<div id="TridesetTri"><p class="BrojUKuglici">{{dobitnaKombinacija[2]}}</p></div><br> <br>
<div id="TridesetCetiri"><p class="BrojUKuglici">{{dobitnaKombinacija[3]}}</p></div><br> <br>
<div id="TridesetPet"><p class="BrojUKuglici">{{dobitnaKombinacija[4]}}</p></div><br> <br>
  </div>


  </div>
</template>



<script>


export default {
  name: 'Game',
  components: {
   
    },

  data: function() {
    return {
      brojac:0,
      dobitnaKombinacija: [],
   brojevi:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
   rand:0,
   
  }},

  mounted:function(){

    var self=this;



setTimeout(()=>{
self.$router.push("/Final")
},250000)

for(let i=0;i<35;i++){
setTimeout(()=>{
var int=setInterval(()=>{

  self.rand=self.brojevi[Math.floor(Math.random()*self.brojevi.length)];


},50)
setTimeout(()=>{
  clearInterval(int);
  
  self.dobitnaKombinacija.push(self.rand);
self.brojac++;

  for(let i=0;i<self.brojevi.length;i++){
if(self.brojevi[i]==self.rand){
  self.brojevi.splice(i,1);
}

  }
  
},3000)

},i*7000)



}}

  
  }
  



</script>

<style>
#Game{
background-image: url("./../assets/GameW.jpg");
width: 100vw;
height: 90vh;
background-size: cover;
color: white;
font-size: 15px;

}
#Centar{
   position: absolute;
   color: blue;
   font-size: 120px;
   font-weight: bolder;
        top: 15%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
}
#Bubanj{
    background-image: url("./../assets/Kuglica.png");
    border-radius: 50%;
    width:335px;
    height: 335px;
    position: absolute;
    margin-left: 40vw;    
    margin-top: 15vh;
    
 

}

.BrojUKuglici{
    margin-top: 11px;
     font-size: 20px;
   text-align: center;
   color: blue;

}

#DrugiRed{

    width: 4%;
    height: 90%;
    margin-left: 14%;
    margin-top: 0%;
    position: absolute;

}
.PRVE{
    color: white;
    font-size: 30px;

}
#PrviRed{
  
    width: 3%;
    height: 90%;
    margin-left: 10%;
    margin-top: 0%;
    position: absolute;
}
#Jedan{
    
   
    margin: auto;
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    
}
#Jedan1{
    margin: auto;
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color: white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Dva{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    
}
#Dva1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
    
}
#Tri{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Tri1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Cetiri{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Cetiri1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
  background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Pet{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Pet1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Sest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Sest1{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Sedam{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Sedam1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
  background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Osam{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Osam1{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Devet{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Devet1{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
  background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#TreciRed{
 
 
    width: 4%;
    height: 20%;
    margin-left: 25%;
    bottom: 13%;
    position: absolute;
    
}
#Deset{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Deset1{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-image: url("./../assets/KuglicaMala.png");
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Jedanaest{
   
   background-color:rgb(46, 45, 45);
   border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Dvanaest{
  
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#CetvrtiRed{

    width: 4%;
    height: 20%;
    margin-left: 29%;
    bottom: 23%;
    position: absolute;

}
#PetiRed{
 
 
    width: 4%;
    height: 20%;
    margin-left: 40%;
    bottom: 13%;
    position: absolute;
    
}
#Trinaest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Cetrnaest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Petnaest{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

#SestiRed{

    width: 4%;
    height: 20%;
    margin-left: 44%;
    bottom: 23%;
    position: absolute;

}
#SedmiRed{
 
 
    width: 4%;
    height: 20%;
    margin-left: 55%;
    bottom: 13%;
    position: absolute;
    
}
#Sesnaest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Sedamnaest{
 
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Osamnaest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

#OsmiRed{

    width: 4%;
    height: 20%;
    margin-left: 59%;
    bottom: 23%;
    position: absolute;

}
#DevetiRed{
 
 
    width: 4%;
    height: 20%;
    margin-left: 70%;
    bottom: 13%;
    position: absolute;
    
}
#Devetnaest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Dvadeset{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetJedan{
  
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

#DesetiRed{

    width: 4%;
    height: 20%;
    margin-left: 74%;
    bottom: 23%;
    position: absolute;

}

#JedanaestiRed{

    width: 4%;
    height: 90%;
    margin-left: 80%;
    margin-top: 0%;
    position: absolute;
}
#DvadesetDva{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetTri{
 
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetCetiri{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetPet{
  
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetSest{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetSedam{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetOsam{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvadesetDevet{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#Trideset{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
#DvanaestiRed{

    width: 4%;
    height: 90%;
    margin-left: 84%;
    margin-top: 0%;
    position: absolute;

}
#TrinaestiRed{
 
 
    width: 10%;
    height: 20%;
    right: 25%;
    top: 5%;
    position: absolute;
    
}
#TridesetJedan{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 0%;
}
#TridesetDva{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 25%;
}
#TridesetTri{
  
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 40%;
}
#TridesetCetiri{
    
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-left: 25%;
}
#TridesetPet{
   
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}


</style>
