var wdth;
var hgt;
var controls=[];
var butcolor=[220, 200, 190];
var textcolor=[25,55,66];
var questions=[];
var n=0;





function setup(){

  hgt=windowHeight;
  wdth=windowWidth;
  createCanvas(wdth-20,hgt-20);
  background(240);
  controls.push(new control(5,5,120,70,"Histogram",false,butcolor));
  controls.push(new control(130,5,120,70,"Previous",false,butcolor));
  controls.push(new control(255,5,120,70,"Next",false,butcolor));
  controls.push(new control(50,100,120,65,"2008",true,butcolor));
  controls.push(new control(50,100,120,65,"2012",true,butcolor));
  controls.push(new control(50,100,120,65,"2013",true,butcolor));
  controls.push(new control(50,100,120,65,"2014",true,butcolor));
  controls.push(new control(50,100,120,65,"2015",true,butcolor));

  
  adjustImageDimensions();
  textAlign(LEFT);
  background(240);  
  textSize(30);
 // refresher();  refreshes background and goes to question
  homeScreen();

}

function homeScreen(){
    background(240);
    textSize(20);
    noStroke();
    fill(textcolor);
    text("Multiple Choice Complete Sections",30,30);
    text("Practice By Unit",600,30);  //change later to be a percent of window width
    text("Practice By Skill",1000,30);  //same as above
}




function refresher(){
   background(240);  
   for(var y=0;y<controls.length;y++){
      controls[y].drawit();
   }
 image(questions[n],10,80);
}

function touchEnded() {
    for(var g=0;g<controls.length;g++){
    controls[g].tapit();
  }
  return false;
}

function adjustImageDimensions(){
  for(var v=0;v<questions.length;v++){
   console.log(v,questions[v].width, questions[v].height);
    if((questions[v].width>wdth-40)||(questions[v].height>hgt-130)){      //too tall or too wide
      if(questions[v].width/(wdth-40)>questions[v].height/(hgt-130)){    //%wise, wider than taller
         questions[v].resize(wdth-40,0);
          console.log(v,questions[v].width, questions[v].height);
      }
      else{                                               //%wise, taller than wider
         questions[v].resize(0,hgt-130);
         console.log(v,questions[v].width, questions[v].height);
      }
    }
              // console.log(v,questions[v].width, questions[v].height);

  }
}


function load2008(){
    questions.push(loadImage("2008-C-76.png")); 
    questions.push(loadImage("2008-C-77.png")); 
    questions.push(loadImage("2008-C-78.png")); 
    questions.push(loadImage("2008-C-79.png")); 
    questions.push(loadImage("2008-C-80.png")); 
    questions.push(loadImage("2008-C-81.png")); 
    questions.push(loadImage("2008-C-82.png")); 
    questions.push(loadImage("2008-C-83.png")); 
    questions.push(loadImage("2008-C-84.png")); 
    questions.push(loadImage("2008-C-85.png")); 
    questions.push(loadImage("2008-C-86.png")); 
    questions.push(loadImage("2008-C-87.png")); 
    questions.push(loadImage("2008-C-88.png")); 
    questions.push(loadImage("2008-C-89.png")); 
    questions.push(loadImage("2008-C-90.png")); 
    questions.push(loadImage("2008-C-91.png")); 
    questions.push(loadImage("2008-C-92.png")); 
    questions.push(loadImage("2008-NC-1.png")); 
    questions.push(loadImage("2008-NC-2.png")); 
    questions.push(loadImage("2008-NC-3.png")); 
    questions.push(loadImage("2008-NC-4.png")); 
    questions.push(loadImage("2008-NC-5.png")); 
    questions.push(loadImage("2008-NC-6.png")); 
    questions.push(loadImage("2008-NC-7.png")); 
    questions.push(loadImage("2008-NC-8.png")); 
    questions.push(loadImage("2008-NC-9.png")); 
    questions.push(loadImage("2008-NC-10.png")); 
    questions.push(loadImage("2008-NC-11.png")); 
    questions.push(loadImage("2008-NC-12.png")); 
    questions.push(loadImage("2008-NC-13.png")); 
    questions.push(loadImage("2008-NC-14.png")); 
    questions.push(loadImage("2008-NC-15.png")); 
    questions.push(loadImage("2008-NC-16.png")); 
    questions.push(loadImage("2008-NC-17.png")); 
    questions.push(loadImage("2008-NC-18.png")); 
    questions.push(loadImage("2008-NC-19.png")); 
    questions.push(loadImage("2008-NC-20.png")); 
    questions.push(loadImage("2008-NC-21.png")); 
    questions.push(loadImage("2008-NC-22.png")); 
    questions.push(loadImage("2008-NC-23.png")); 
    questions.push(loadImage("2008-NC-24.png")); 
    questions.push(loadImage("2008-NC-25.png")); 
    questions.push(loadImage("2008-NC-26.png")); 
    questions.push(loadImage("2008-NC-27.png")); 
    questions.push(loadImage("2008-NC-28.png"));
}
 function load2012(){
         questions.push(loadImage("2012-C-76.png")); 
    questions.push(loadImage("2012-C-77.png")); 
    questions.push(loadImage("2012-C-78.png")); 
    questions.push(loadImage("2012-C-79.png")); 
    questions.push(loadImage("2012-C-80.png")); 
    questions.push(loadImage("2012-C-81.png")); 
    questions.push(loadImage("2012-C-82.png")); 
    questions.push(loadImage("2012-C-83.png")); 
    questions.push(loadImage("2012-C-84.png")); 
    questions.push(loadImage("2012-C-85.png")); 
    questions.push(loadImage("2012-C-86.png")); 
    questions.push(loadImage("2012-C-87.png")); 
    questions.push(loadImage("2012-C-88.png")); 
    questions.push(loadImage("2012-C-89.png")); 
    questions.push(loadImage("2012-C-90.png")); 
    questions.push(loadImage("2012-C-91.png")); 
    questions.push(loadImage("2012-C-92.png")); 
    questions.push(loadImage("2012-NC-1.png")); 
    questions.push(loadImage("2012-NC-2.png")); 
    questions.push(loadImage("2012-NC-3.png")); 
    questions.push(loadImage("2012-NC-4.png")); 
    questions.push(loadImage("2012-NC-5.png")); 
    questions.push(loadImage("2012-NC-6.png")); 
    questions.push(loadImage("2012-NC-7.png")); 
    questions.push(loadImage("2012-NC-8.png")); 
    questions.push(loadImage("2012-NC-9.png")); 
    questions.push(loadImage("2012-NC-10.png")); 
    questions.push(loadImage("2012-NC-11.png")); 
    questions.push(loadImage("2012-NC-12.png")); 
    questions.push(loadImage("2012-NC-13.png")); 
    questions.push(loadImage("2012-NC-14.png")); 
    questions.push(loadImage("2012-NC-15.png")); 
    questions.push(loadImage("2012-NC-16.png")); 
    questions.push(loadImage("2012-NC-17.png")); 
    questions.push(loadImage("2012-NC-18.png")); 
    questions.push(loadImage("2012-NC-19.png")); 
    questions.push(loadImage("2012-NC-20.png")); 
    questions.push(loadImage("2012-NC-21.png")); 
    questions.push(loadImage("2012-NC-22.png")); 
    questions.push(loadImage("2012-NC-23.png")); 
    questions.push(loadImage("2012-NC-24.png")); 
    questions.push(loadImage("2012-NC-25.png")); 
    questions.push(loadImage("2012-NC-26.png")); 
    questions.push(loadImage("2012-NC-27.png")); 
    questions.push(loadImage("2012-NC-28.png")); 
 }

function load2013(){
    questions.push(loadImage("2013-C-76.png")); 
    questions.push(loadImage("2013-C-77.png")); 
    questions.push(loadImage("2013-C-78.png")); 
    questions.push(loadImage("2013-C-79.png")); 
    questions.push(loadImage("2013-C-80.png")); 
    questions.push(loadImage("2013-C-81.png")); 
    questions.push(loadImage("2013-C-82.png")); 
    questions.push(loadImage("2013-C-83.png")); 
    questions.push(loadImage("2013-C-84.png")); 
    questions.push(loadImage("2013-C-85.png")); 
    questions.push(loadImage("2013-C-86.png")); 
    questions.push(loadImage("2013-C-87.png")); 
    questions.push(loadImage("2013-C-88.png")); 
    questions.push(loadImage("2013-C-89.png")); 
    questions.push(loadImage("2013-C-90.png")); 
    questions.push(loadImage("2013-C-91.png")); 
    questions.push(loadImage("2013-C-92.png")); 
    questions.push(loadImage("2013-NC-1.png")); 
    questions.push(loadImage("2013-NC-2.png")); 
    questions.push(loadImage("2013-NC-3.png")); 
    questions.push(loadImage("2013-NC-4.png")); 
    questions.push(loadImage("2013-NC-5.png")); 
    questions.push(loadImage("2013-NC-6.png")); 
    questions.push(loadImage("2013-NC-7.png")); 
    questions.push(loadImage("2013-NC-8.png")); 
    questions.push(loadImage("2013-NC-9.png")); 
    questions.push(loadImage("2013-NC-10.png")); 
    questions.push(loadImage("2013-NC-11.png")); 
    questions.push(loadImage("2013-NC-12.png")); 
    questions.push(loadImage("2013-NC-13.png")); 
    questions.push(loadImage("2013-NC-14.png")); 
    questions.push(loadImage("2013-NC-15.png")); 
    questions.push(loadImage("2013-NC-16.png")); 
    questions.push(loadImage("2013-NC-17.png")); 
    questions.push(loadImage("2013-NC-18.png")); 
    questions.push(loadImage("2013-NC-19.png")); 
    questions.push(loadImage("2013-NC-20.png")); 
    questions.push(loadImage("2013-NC-21.png")); 
    questions.push(loadImage("2013-NC-22.png")); 
    questions.push(loadImage("2013-NC-23.png")); 
    questions.push(loadImage("2013-NC-24.png")); 
    questions.push(loadImage("2013-NC-25.png")); 
    questions.push(loadImage("2013-NC-26.png")); 
    questions.push(loadImage("2013-NC-27.png")); 
    questions.push(loadImage("2013-NC-28.png"));
}

function load2014(){
        questions.push(loadImage("2014-C-76.png")); 
    questions.push(loadImage("2014-C-77.png")); 
    questions.push(loadImage("2014-C-78.png")); 
    questions.push(loadImage("2014-C-79.png")); 
    questions.push(loadImage("2014-C-80.png")); 
    questions.push(loadImage("2014-C-81.png")); 
    questions.push(loadImage("2014-C-82.png")); 
    questions.push(loadImage("2014-C-83.png")); 
    questions.push(loadImage("2014-C-84.png")); 
    questions.push(loadImage("2014-C-85.png")); 
    questions.push(loadImage("2014-C-86.png")); 
    questions.push(loadImage("2014-C-87.png")); 
    questions.push(loadImage("2014-C-88.png")); 
    questions.push(loadImage("2014-C-89.png")); 
    questions.push(loadImage("2014-C-90.png")); 
    questions.push(loadImage("2014-C-91.png")); 
    questions.push(loadImage("2014-C-92.png")); 
    questions.push(loadImage("2014-NC-1.png")); 
    questions.push(loadImage("2014-NC-2.png")); 
    questions.push(loadImage("2014-NC-3.png")); 
    questions.push(loadImage("2014-NC-4.png")); 
    questions.push(loadImage("2014-NC-5.png")); 
    questions.push(loadImage("2014-NC-6.png")); 
    questions.push(loadImage("2014-NC-7.png")); 
    questions.push(loadImage("2014-NC-8.png")); 
    questions.push(loadImage("2014-NC-9.png")); 
    questions.push(loadImage("2014-NC-10.png")); 
    questions.push(loadImage("2014-NC-11.png")); 
    questions.push(loadImage("2014-NC-12.png")); 
    questions.push(loadImage("2014-NC-13.png")); 
    questions.push(loadImage("2014-NC-14.png")); 
    questions.push(loadImage("2014-NC-15.png")); 
    questions.push(loadImage("2014-NC-16.png")); 
    questions.push(loadImage("2014-NC-17.png")); 
    questions.push(loadImage("2014-NC-18.png")); 
    questions.push(loadImage("2014-NC-19.png")); 
    questions.push(loadImage("2014-NC-20.png")); 
    questions.push(loadImage("2014-NC-21.png")); 
    questions.push(loadImage("2014-NC-22.png")); 
    questions.push(loadImage("2014-NC-23.png")); 
    questions.push(loadImage("2014-NC-24.png")); 
    questions.push(loadImage("2014-NC-25.png")); 
    questions.push(loadImage("2014-NC-26.png")); 
    questions.push(loadImage("2014-NC-27.png")); 
    questions.push(loadImage("2014-NC-28.png")); 
}

function load2015(){
    questions.push(loadImage("2015-C-76.png")); 
    questions.push(loadImage("2015-C-77.png")); 
    questions.push(loadImage("2015-C-78.png")); 
    questions.push(loadImage("2015-C-79.png")); 
    questions.push(loadImage("2015-C-80.png")); 
    questions.push(loadImage("2015-C-81.png")); 
    questions.push(loadImage("2015-C-82.png")); 
    questions.push(loadImage("2015-C-83.png")); 
    questions.push(loadImage("2015-C-84.png")); 
    questions.push(loadImage("2015-C-85.png")); 
    questions.push(loadImage("2015-C-86.png")); 
    questions.push(loadImage("2015-C-87.png")); 
    questions.push(loadImage("2015-C-88.png")); 
    questions.push(loadImage("2015-C-89.png")); 
    questions.push(loadImage("2015-C-90.png")); 
    questions.push(loadImage("2015-C-91.png")); 
    questions.push(loadImage("2015-C-92.png")); 
    questions.push(loadImage("2015-NC-1.png")); 
    questions.push(loadImage("2015-NC-2.png")); 
    questions.push(loadImage("2015-NC-3.png")); 
    questions.push(loadImage("2015-NC-4.png")); 
    questions.push(loadImage("2015-NC-5.png")); 
    questions.push(loadImage("2015-NC-6.png")); 
    questions.push(loadImage("2015-NC-7.png")); 
    questions.push(loadImage("2015-NC-8.png")); 
    questions.push(loadImage("2015-NC-9.png")); 
    questions.push(loadImage("2015-NC-10.png")); 
    questions.push(loadImage("2015-NC-11.png")); 
    questions.push(loadImage("2015-NC-12.png")); 
    questions.push(loadImage("2015-NC-13.png")); 
    questions.push(loadImage("2015-NC-14.png")); 
    questions.push(loadImage("2015-NC-15.png")); 
    questions.push(loadImage("2015-NC-16.png")); 
    questions.push(loadImage("2015-NC-17.png")); 
    questions.push(loadImage("2015-NC-18.png")); 
    questions.push(loadImage("2015-NC-19.png")); 
    questions.push(loadImage("2015-NC-20.png")); 
    questions.push(loadImage("2015-NC-21.png")); 
    questions.push(loadImage("2015-NC-22.png")); 
    questions.push(loadImage("2015-NC-23.png")); 
    questions.push(loadImage("2015-NC-24.png")); 
    questions.push(loadImage("2015-NC-25.png")); 
    questions.push(loadImage("2015-NC-26.png")); 
    questions.push(loadImage("2015-NC-27.png")); 
    questions.push(loadImage("2015-NC-28.png"));
}

class control{
  constructor(x,y,w,h,txt,there,rgb){
    this.x=x; this.y=y; this.w=w; this.h=h; this.txt=txt; this.there=there; this.rgb=rgb;
  }
  
  tapit(){
    if(mouseX>=this.x && mouseX<=this.x+this.w && mouseY>=this.y && mouseY <= this.y+this.h && this.there){
      if(this.txt==="Next"){
        n++;
        refresher();
      }
      if(this.txt==="Previous"){
        n--;
        refresher();
      }
    }
  }
  
  drawit(){
    if(this.there){
      fill(this.rgb);
      rect(this.x, this.y, this.w, this.h, 4);
      fill(0,0,200);
      textSize(20)
      textAlign(CENTER,CENTER);
      text(this.txt,this.x+this.w/2, this.y+this.h/2)
    }
  }
}
