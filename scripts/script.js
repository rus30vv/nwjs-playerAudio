//prototype 


const fs = require('fs');
const path = require('path');

//var gui = require('nw.gui');
//gui.Window.get(); //окно

//gui.Shell(); //оболочка


//global supper value
var timeMinut = "0";
var timeSecond = "0";
var durstr;
var b = 0;//arr_full_song
var c = 0;//counter_song
var a = 1;
var nameSong;
var aud = new Audio();
aud.src = nameSong;
var arr = [];var durstrMinut;var durstrSecond;
//var filename = location.pathname.match(/[^\/]+$/)[0];
//console.log(filename);
var folderPath = String("../music");//music

visibleInfoTrack();

lodder()


function nextContent(){
  
  aud.pause();
  aud.src = null;
  if ( c != b ){
    c = c + 1;// not gud value++ unsafe
  }else{c = 0;}
  
  nameSong = String(arr[c]);
  aud.src = nameSong;
  aud.play();
  document.getElementById("file_playning").innerHTML = nameSong +" count: "+ c +" last: " + b;
  
  
  
  //visibleInfoTrack();
}


function prewContent(){
  aud.pause();
  aud.src = null;
  if (c > 0){
    c = c - 1;// not gud ++ --unsafe
  }else if(c > 0){c = b;}
  
  nameSong = String(arr[c]);
  aud.src = nameSong;
  aud.play();
  document.getElementById("file_playning").innerHTML = nameSong +" count: "+ c +" last: " + b;
  //visibleInfoTrack();
}




function lodder(){
   fs.readdir(folderPath, 'utf8', (err, files) => {
     if(err)
       throw err;
    
     console.log(files);
     
      files.forEach(function(item, i, files){
        //item = itemSub;
        var itemSub = String(item);
      
        if(path.extname(itemSub) === ".mp3"){
          b = b + 1;
          console.log("extnames on: "+itemSub+"\n"+b);//
          arr.push(itemSub);
        }else{
          console.log("extnames off: "+itemSub);
        }
      });
    b = b - 1;
    nameSong = String(arr[0]);
    aud.src = nameSong;
  });
}

function brilliantString(stringd, durstr){
  
   stringd = Math.round(stringd);
   
   timeMinut = stringd / 60;
   
   timeSecond = stringd % 60;
                    //tmp code
   //durstr = 
   durstrMinut =  String(durstr / 60);
   durstrSecond = String(durstr % 60);
   
   durstr =  String(durstr / 60);//" / "+ durstrMinut + " : " + durstrSecond;
                     //tmpcode
   
   if (timeSecond < 10){
     
       timeSecond = "0"+timeSecond;
       
      }
      else{
        
        timeSecond = timeSecond ;
      }
      
   if(timeMinut < 10){
     
     timeMinut = "0"+ Math.floor(timeMinut);
     
    }
    
    else{
      timeMinut = Math.floor(timeMinut);
     
    }
  
}




function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
 
async function visibleInfoTrack() {
  //document.getElementById("info_w").
  do{
			await sleep(800);
        var stringd = aud.currentTime;
    		durstr = aud.duration;
    		brilliantString(stringd, durstr);
    		
   			document.getElementById("zona").innerHTML = timeMinut+" : "+timeSecond;//+durstr;Осторожно! Если ты нажмете на кнопку, то произойдут изменения с данным контентом.
   			
   			document.getElementById("info_w").innerHTML = arr[c];
   			//document.getElementById("zona").style.color = 'blue';
   			if (aud.ended === true){nextContent();}
    }while(true);
    //nextContent();
    
}
 







function SupperButton(){
    

    
    
    document.getElementById("zona").innerHTML = 'playning: ' + a;
    document.getElementById("zona").style.color = 'blue';
    document.getElementById("zona").style.fontSize = '16px';

}

function playAudio(){
  //visibleInfoTrack();
  console.log("function playAudio\n");
  console.log(aud);
  if(a === 1){
    a = 0;
    aud.play();
    }else if(a ===0){
      a = 1;
      aud.pause();
    }
}


//var tray = new gui.Tray({ 
  //title: 'ololo', 
  //icon: 'icon.png' ,  
  //alticon: 'icon.png' , 
  //iconsAreTemplates: true
//});

// Give it a menu
//gui.Tray // трей
//var menu = new gui.Menu();
//menu.append(new gui.MenuItem({label: 'Тот', type: 'checkbox'}));
//menu.append(new gui.MenuItem({label: 'Этот', type: 'checkbox' }));
//menu.append(new gui.MenuItem({label: 'Другой', type: 'checkbox'}));
//menu.append(new gui.MenuItem({type: 'separator' }));
//menu.append(new gui.MenuItem({label: 'или ...',   submenu: getDummyMenu()}));Осторожно! Если ты нажмете на кнопку, то произойдут изменения с данным контентом.

//tray.menu = menu;
console.log(Math.floor(10 / 3));
console.log(Math.floor(-10 / 3));

console.log(Math.ceil(10 / 3));
console.log(Math.ceil(-10 / 3));

