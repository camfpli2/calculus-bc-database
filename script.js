var wdth;
var hgt;
var controls=[];
var butcolor=[220, 200, 190];
var questions=[];

function preload(){
  //questions=loadImage(('2013-NC-1-Integration.png'));
  // Using template literals for dynamic path
  // Note: This approach typically works in bundlers like Webpack or Vite
  // which can resolve dynamic imports at build time.
  questions.push(loadImage("2013-C-76.png")); 
      //console.log(questions[i]);
  
}



function setup(){

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
