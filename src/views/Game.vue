<template>
  <div id="Game">

  <div id="PrviRed"><br><br><br><br>
<div id="Jedan"></div><br><br>
<div id="Dva"></div><br> <br>
<div id="Tri"></div><br><br>
<div id="Cetiri"></div><br><br>
<div id="Pet"></div><br><br>
<div id="Sest"></div><br><br>
<div id="Sedam"></div><br><br>
<div id="Osam"></div><br><br>
<div id="Devet"></div><br><br>
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
    <div id="Deset"></div><br>
    <div id="Jedanaest"></div><br>
    <div id="Dvanaest"></div>
</div>
<div id="CetvrtiRed"><br><br><br><br><br><br>
<div class="PRVE">100</div><br><br>
<div class="PRVE">90</div><br> <br>
<div class="PRVE">80</div>
</div>
<div id="PetiRed">
    <div id="Trinaest"></div><br>
    <div id="Cetrnaest"></div><br>
    <div id="Petnaest"></div>
</div>

<div id="SestiRed"><br><br><br><br><br><br>
<div class="PRVE">70</div><br><br>
<div class="PRVE">60</div><br> <br>
<div class="PRVE">50</div>
</div>

<div id="SedmiRed">
    <div id="Sesnaest"></div><br>
    <div id="Sedamnaest"></div><br>
    <div id="Osamnaest"></div>
</div>

<div id="OsmiRed"><br><br><br><br><br><br>
<div class="PRVE">40</div><br><br>
<div class="PRVE">30</div><br> <br>
<div class="PRVE">25</div>
</div>

<div id="DevetiRed">
    <div id="Devetnaest"></div><br>
    <div id="Dvadeset"></div><br>
    <div id="DvadesetJedan"></div>
</div>

<div id="DesetiRed"><br><br><br><br><br><br>
<div class="PRVE">20</div><br><br>
<div class="PRVE">15</div><br> <br>
<div class="PRVE">10</div>
</div>

  <div id="JedanaestiRed"><br><br><br><br>
<div id="DvadesetDva"></div><br><br>
<div id="DvadesetTri"></div><br> <br>
<div id="DvadesetCetiri"></div><br><br>
<div id="DvadesetPet"></div><br><br>
<div id="DvadesetSest"></div><br><br>
<div id="DvadesetSedam"></div><br><br>
<div id="DvadesetOsam"></div><br><br>
<div id="DvadesetDevet"></div><br><br>
<div id="Trideset"></div><br><br>
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
<div id="TridesetJedan"></div><br><br>
<div id="TridesetDva"></div><br> <br>
<div id="TridesetTri"></div><br> <br>
<div id="TridesetCetiri"></div><br> <br>
<div id="TridesetPet"></div><br> <br>
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
      
      dobitnaKombinacija: [],
   brojevi:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49],
   rand:0,
   
  }},

  created:function(){

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
  
    width: 4%;
    height: 90%;
    margin-left: 10%;
    margin-top: 0%;
    position: absolute;
}
#Jedan{
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
    border-radius: 50%;
    width: 50px;
    height: 50px;
}#Dva{
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
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
#Cetiri{
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
   background-color:rgb(46, 45, 45);
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
#Sest{
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
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
}#Osam{
    border-color:rgb(126, 124, 124) ;
   border:solid 1px;
    background-color:rgb(46, 45, 45);
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
