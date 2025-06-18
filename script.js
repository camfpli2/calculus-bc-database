var wdth;
var hgt;
var controls=[];
var butcolor=[220, 200, 190];
var questions=[];

function preload(){
     // questions.push(require(`./assets/2013-C-${g+76}.png`)); 
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
  
  
}



function setup(){
    questions.push(loadImage("2013-NC-27.png")); 
    questions.push(loadImage("2013-NC-28.png")); 
     console.log(questions);
  hgt=windowHeight;
  wdth=windowWidth;
  createCanvas(wdth-20,hgt-20);
  background(240);
  controls.push(new control(5,5,120,70,"Histogram",butcolor));
  controls.push(new control(130,5,120,70,"Previous",butcolor));
  controls.push(new control(255,5,120,70,"Next",butcolor));

}


function adjustImageDimensions(questions){
  for(var v=1;v<questions.length;v++){

    if((questions[v].width>wdth-40)||(questions[v].height>hgt-130)){      //too tall and too wide
      if(questions[v].width/(wdth-40)>questions[v].height/(hgt-130)){    //%wise, wider than taller
         questions[v].resize(wdth-40,0);
      }
      else{                                               //%wise, taller than wider
         questions[v].resize(0,hgt-130);
      }
    }
  }
}





class control{
  constructor(x,y,w,h,txt,rgb){
    this.x=x; this.y=y; this.w=w; this.h=h; this.txt=txt; this.rgb=rgb;
  }
  
  tapit(){
    if(mouseX>=this.x && mouseX<=this.x+this.w && mouseY>=this.y && mouseY <= this.y+this.h){
      if(this.txt==="Next"){
        n++;
      }
      if(this.txt==="Previous"){
        n--;
      }
    }
  }
  
  drawit(){
    fill(this.rgb);
    rect(this.x, this.y, this.w, this.h, 4);
    fill(0,0,200);
    textSize(20)
    textAlign(CENTER,CENTER);
    text(this.txt,this.x+this.w/2, this.y+this.h/2)
    
  }
}
