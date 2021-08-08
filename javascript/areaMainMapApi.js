$(document).ready(function() {
	initTmap();
});
let radio_2019 = document.getElementById('2019');
let radio_2018 = document.getElementById('2018');
let radio_2017 = document.getElementById('2017');
let radio_2016 = document.getElementById('2016');
let radio_2015 = document.getElementById('2015');
let radio_2014 = document.getElementById('2014');
let radio_2013 = document.getElementById('2013');
let radio_2012 = document.getElementById('2012');
let radio_2011 = document.getElementById('2011'); 

let radio_a = document.getElementById('a');
let radio_b = document.getElementById('b');
let radio_c = document.getElementById('c');
let radio_d = document.getElementById('d');
let radio_e = document.getElementById('e');
let radio_f = document.getElementById('f');

function initTmap(){
   
    radio_a.addEventListener('click', function(){
      removeOverlay();
      const url='/data/지역별/석탄.json';
      fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

  
    radio_b.addEventListener('click', function(){
      removeOverlay();
      const url='/data/지역별/석유.json';
      fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

    radio_c.addEventListener('click', function(){
      removeOverlay();
      const url='/data/지역별/도시가스.json';
      fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

    radio_d.addEventListener('click', function(){
      removeOverlay();
      const url='/data/지역별/열에너지.json';
      fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

    radio_e.addEventListener('click', function(){
      removeOverlay();
        const url='/data/지역별/전력.json';
        fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

    radio_f.addEventListener('click', function(){
      removeOverlay();
        const url='/data/지역별/기타연료.json';
         fetch(url)
      .then((res)=>res.json())
      .then((myJson)=>{
      for(var i=0;i<myJson.length;i++){
      
          var gas=myJson[i].gas;
          var region=myJson[i].region;
          var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
          var imageSize = new kakao.maps.Size(24, 35); 
          var marker = new kakao.maps.CustomOverlay({
          map:map,
          position: latlng,
          content:"<div class='ovr1'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
      }})
      return marker;
  })

    radio_2019.addEventListener('click', function(){
      removeOverlay();
        const url='/data/지역별/2019년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
          });
          markers.push(marker);
        }})
        return marker;
    })
   

    radio_2018.addEventListener('click', function(){ 
      removeOverlay();

        const url='/data/지역별/2018년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35);             
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2017.addEventListener('click', function(){
      removeOverlay();

        const url='/data/지역별/2017년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2016.addEventListener('click', function(){
      removeOverlay();
  
        const url='/data/지역별/2016년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2015.addEventListener('click', function(){ 
      removeOverlay();

        const url='/data/지역별/2015년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

  

    radio_2014.addEventListener("click", function (){
      removeOverlay();         
        const url='/data/지역별/2014년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
    radio_2013.addEventListener('click', function(){
      removeOverlay();  
        const url='/data/지역별/2013년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })

    radio_2012.addEventListener('click', function(){
      removeOverlay();  
        const url='/data/지역별/2012년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
        
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;

       
            console.log(JSON.stringify( myJson,null, 1 ));
        });
       
    })
    radio_2011.addEventListener('click', function(){
      removeOverlay();  
        const url='/data/지역별/2011년 온실가스.json';
        
        fetch(url)
        .then((res)=>res.json())
        .then((myJson)=>{
        for(var i=0;i<myJson.length;i++){
            var gas=myJson[i].gas;
            var region=myJson[i].region;
            var latlng=new kakao.maps.LatLng(myJson[i].position1,myJson[i].position2);
            var imageSize = new kakao.maps.Size(24, 35); 
            console.log(region+'<br>'+gas);
            var marker = new kakao.maps.CustomOverlay({
            map:map,
            position: latlng,
            content:"<div class='ovr'>"+region+'<br>'+gas+"</div>"
        });
        markers.push(marker);
        }
        return marker;
            console.log(JSON.stringify( myJson,null, 1 ));
        });
    })
} 