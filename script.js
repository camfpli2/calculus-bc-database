var wdth;
var hgt;
var controls=[];
var butcolor=[220, 210, 195];
var selectcolor=[210,225,225];
var textcolor=[25,55,66];
var bordercolor=[35,35,200];
var selectbordercolor=[200,45,35];
var whichUnitSelected;
var questions=[];
var n=0;
var data;
var skillIndexes=[[9,13],[14,23],[24,31],[32,35],[36,40],[41,46],[47,48],[49,50],[51,56]];
var skillBoxInfo=[[80,300],[150,550],[220,450],[290,250],[360,300],[330,350],[500,130],[570,130],[380,330]];
var questionData=[];  //array of arrays, format: [year, NC/C, n:number of answer choices, a:answer, skill1, skill2]
                      //taken from a master csv

function preload(){
    data=loadTable("calc-data-for-database.csv",".csv");

}

function refresher(){
  background(230);
  for(var s=0;s<controls.length;s++){
    controls[s].drawit();
  }
  fill(240);
  strokeWeight(1);
  stroke(bordercolor);
  rect(5,70,wdth-30,hgt-100,5);
  image(questions[n],10,80);
}

function getQuestionData(){
  var ii=data.getRowCount();
  var col0=data.getColumn(0);
  console.log(col0);
  var col1=data.getColumn(1);
  console.log(col1);
  var col2=data.getColumn(2);
  console.log(col2);
  var col3=data.getColumn(3);
  console.log(col3);
  var col4=data.getColumn(4);
  var col5=data.getColumn(5);

  for(var c=0;c<ii;c++){
    questionData.push([parseInt(col0[c]),col1[c],parseInt(col2[c]),col3[c],parseFloat(col4[c]),parseFloat(col5[c])]);
  }


}


function yearHomeScreen(y){
  //adjustImageDimensions();
  background(230);
  fill(240);
  strokeWeight(1);
  stroke(bordercolor);
  rect(5,70,wdth-30,hgt-100,5);
  for(var p=0;p<controls.length;p++){
    if(controls[p].ind==="exam controller"||controls[p].ind==="answer choice"){
      controls[p].there=true;
      controls[p].drawit();
    }
  }
  //refresher();
  textSize(40);
  noStroke();
  fill(textcolor);
  textAlign(CENTER);
  text("AP Calculus BC: "+y,wdth/2,250);
  text("Multiple Choice Section",wdth/2,300);
  textSize(26);
  text("1 - 28, No Calculator",wdth/2,350);
  text("76 - 92, Calculator",wdth/2,400);
}

function wholeSkillHomeScreen(i){
  background(240);
}

function loadQuestions(ask){   //ask could be "year" , integer, or skill(decimal)
  if(ask>1000){   //user has clicked a year
    if(ask===2015){load2015();}
    else if(ask===2014){load2014();}
    else if(ask===2013){load2013();}
    else if(ask===2012){load2012();}
    else if(ask===2008){load2008();}
  }

  adjustImageDimensions();
}


function setup(){

  hgt=windowHeight;
  wdth=windowWidth;
  createCanvas(wdth-20,hgt-20);
  background(240);


  controls.push(new control(550,80,400,60,"Unit 1: Limits and Continuity",true,butcolor,0));
  controls.push(new control(550,150,400,60,"Unit 2: Derivatives",true,butcolor,1));
  controls.push(new control(550,220,400,60,"Unit 3: Applications of the Derivative",true,butcolor,2));
  controls.push(new control(550,290,400,60,"Unit 4: Integration",true,butcolor,3));
  controls.push(new control(550,360,400,60,"Unit 5: Differential Equations",true,butcolor,4));
  controls.push(new control(550,430,400,60,"Unit 6: Applications of Integration",true,butcolor,5));
  controls.push(new control(550,500,400,60,"Unit 7: Parametric Equations",true,butcolor,6));
  controls.push(new control(550,570,400,60,"Unit 8: Polar Equations",true,butcolor,7));
  controls.push(new control(550,640,400,60,"Unit 9: Sequences and Series",true,butcolor,8));
  
  controls.push(new control(1000,100,360,40,"1.1 Limits and Continuity",false,butcolor,9));  //unit 1 , index 9 thru 13
  controls.push(new control(1000,150,360,40,"1.2 Properties of Limits",false,butcolor,10));
  controls.push(new control(1000,200,360,40,"1.3 Limits at Infinity",false,butcolor,11));
  controls.push(new control(1000,250,360,40,"1.4 Algebraic Limits",false,butcolor,12));
  controls.push(new control(1000,300,360,40,"1.5 Continuity and the IVT",false,butcolor,13));
  
  controls.push(new control(1000,170,360,40,"2.1 Tangent Line & Differentiability",false,butcolor,14));  //unit2, index 14 thru 23
  controls.push(new control(1000,220,360,40,"2.2 Derivatives on the Calculator",false,butcolor,15));
  controls.push(new control(1000,270,360,40,"2.3 Basic Differentiation Rules",false,butcolor,16));
  controls.push(new control(1000,320,360,40,"2.4 Product & Quotient Rules",false,butcolor,17));
  controls.push(new control(1000,370,360,40,"2.5 Rates of Change and Particle Motion I",false,butcolor,18));
  controls.push(new control(1000,420,360,40,"2.6 The Chain Rule",false,butcolor,19));
  controls.push(new control(1000,470,360,40,"2.7 Implicit Differentiation",false,butcolor,20));
  controls.push(new control(1000,520,360,40,"2.8 Derivatives of Inverse & Inverse Trig Functions",false,butcolor,21));
  controls.push(new control(1000,570,360,40,"2.9 Derivatives of Exponential Functions",false,butcolor,22));
  controls.push(new control(1000,620,360,40,"2.10 Derivatives of Log Functions",false,butcolor,23));

  controls.push(new control(1000,240,360,40,"3.1 Extrema on an interval",false,butcolor,24));   //unit 3, index 24 tru 31
  controls.push(new control(1000,290,360,40,"3.2 Rolle's Theorem and the MVT",false,butcolor,25));   
  controls.push(new control(1000,340,360,40,"3.3 Increasing, Decreasing, and 1st Derivative Test",false,butcolor,26));   
  controls.push(new control(1000,390,360,40,"3.4 Concavity and the Second Derivative Test",false,butcolor,27));   
  controls.push(new control(1000,440,360,40,"3.5 Graphs of Derivatives",false,butcolor,28));   
  controls.push(new control(1000,490,360,40,"3.6 Optimization",false,butcolor,29));   
  controls.push(new control(1000,540,360,40,"3.7 Linearization and Differentials",false,butcolor,30));   
  controls.push(new control(1000,590,360,40,"3.8 Related Rates",false,butcolor,31));   

  controls.push(new control(1000,310,360,40,"4.1",false,butcolor,32));   //unit 4, index 32 thru 35
  controls.push(new control(1000,360,360,40,"4.2",false,butcolor,33));
  controls.push(new control(1000,410,360,40,"4.3",false,butcolor,34));
  controls.push(new control(1000,460,360,40,"4.4",false,butcolor,35));

  controls.push(new control(1000,380,360,40,"5.1",false,butcolor,36));   //unit 5, index 36 thru 40
  controls.push(new control(1000,430,360,40,"5.2",false,butcolor,37));
  controls.push(new control(1000,480,360,40,"5.3",false,butcolor,38));
  controls.push(new control(1000,530,360,40,"5.4",false,butcolor,39));
  controls.push(new control(1000,580,360,40,"5.4",false,butcolor,40));

  controls.push(new control(1000,350,360,40,"6.1",false,butcolor,41));   //unit 6, index 41 thru 46
  controls.push(new control(1000,400,360,40,"6.2",false,butcolor,42));
  controls.push(new control(1000,450,360,40,"6.3",false,butcolor,43));
  controls.push(new control(1000,500,360,40,"6.4",false,butcolor,44));
  controls.push(new control(1000,550,360,40,"6.5",false,butcolor,45));
  controls.push(new control(1000,600,360,40,"6.6",false,butcolor,46));

  controls.push(new control(1000,520,360,40,"7.1",false,butcolor,47));   //unit 7, index 47 thru 48
  controls.push(new control(1000,570,360,40,"7.2",false,butcolor,48));

  controls.push(new control(1000,590,360,40,"8.1",false,butcolor,49));   //unit 8, index 49 thru 50
  controls.push(new control(1000,640,360,40,"8.2",false,butcolor,50));

  controls.push(new control(1000,400,360,40,"9.1",false,butcolor,51));   //unit 9, index 51 thru 56
  controls.push(new control(1000,450,360,40,"9.2",false,butcolor,52));
  controls.push(new control(1000,500,360,40,"9.3",false,butcolor,53));
  controls.push(new control(1000,550,360,40,"9.4",false,butcolor,54));
  controls.push(new control(1000,600,360,40,"9.5",false,butcolor,55));
  controls.push(new control(1000,650,360,40,"9.6",false,butcolor,56));
  
  
  controls.push(new control(80,80,120,60,"1996",true,butcolor,"year"));
  controls.push(new control(80,150,120,60,"1997",true,butcolor,"year"));
  controls.push(new control(80,220,120,60,"1998",true,butcolor,"year"));
  controls.push(new control(80,290,120,60,"1999",true,butcolor,"year"));
  controls.push(new control(80,360,120,60,"2006",true,butcolor,"year"));
  controls.push(new control(80,430,120,60,"2007",true,butcolor,"year"));
  controls.push(new control(80,500,120,60,"2008",true,butcolor,"year"));
  controls.push(new control(80,570,120,60,"2009",true,butcolor,"year"));
  controls.push(new control(80,640,120,60,"2010",true,butcolor,"year"));


  controls.push(new control(250,80,120,60,"2011",true,butcolor,"year"));
  controls.push(new control(250,150,120,60,"2012",true,butcolor,"year"));
  controls.push(new control(250,220,120,60,"2013",true,butcolor,"year"));
  controls.push(new control(250,290,120,60,"2014",true,butcolor,"year"));
  controls.push(new control(250,360,120,60,"2015",true,butcolor,"year"));
  controls.push(new control(250,430,120,60,"2016",true,butcolor,"year"));
  controls.push(new control(250,500,120,60,"2017",true,butcolor,"year"));
  controls.push(new control(250,570,120,60,"2018",true,butcolor,"year"));
  controls.push(new control(250,640,120,60,"2019",true,butcolor,"year"));
  
  controls.push(new control(5,5,120,60,"Home",false,butcolor,"exam controller"));
  controls.push(new control(130,5,120,60,"Previous",false,butcolor,"exam controller"));
  controls.push(new control(255,5,120,60,"Next",false,butcolor,"exam controller"));
  controls.push(new control(385,5,120,60,"Start",false,butcolor,"exam controller"));

  controls.push(new control(600,5,60,60,"A",false,butcolor,"answer choice"));
  controls.push(new control(670,5,60,60,"B",false,butcolor,"answer choice"));
  controls.push(new control(740,5,60,60,"C",false,butcolor,"answer choice"));
  controls.push(new control(810,5,60,60,"D",false,butcolor,"answer choice"));
  controls.push(new control(880,5,60,60,"D",false,butcolor,"answer choice"));
console.log(data);
      getQuestionData();


  homeScreen();

}

function homeScreen(){
    background(230);
    fill(240);
    stroke(bordercolor);
    strokeWeight(1);
    rect(10,10,490,710,5);
    rect(520,10,890,710,5);
    textSize(26);
    noStroke();
    fill(textcolor);
    textAlign(LEFT,CENTER);
    text("Multiple Choice Complete Sections",50,50);
    text("Practice By Unit",600,50);  //change later to be a percent of window width
    //text("Practice By Skill",1000,50);  //same as above
     for(var y=0;y<controls.length;y++){
      controls[y].drawit();
   }
}






function touchEnded() {
    for(var g=0;g<controls.length;g++){
    controls[g].tapit();
  }
  return false;
}

function adjustImageDimensions(){
  for(var v=0;v<questions.length;v++){
    if((questions[v].width>wdth-40)||(questions[v].height>hgt-130)){      //too tall or too wide
      if(questions[v].width/(wdth-40)>questions[v].height/(hgt-130)){    //%wise, wider than taller
         questions[v].resize(wdth-40,0);
      }
      else{                                               //%wise, taller than wider
         questions[v].resize(0,hgt-130);
      }
    }
  }
}


function load2008(){ 
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
}
 function load2012(){
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
 }

function load2013(){
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
}

function load2014(){
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
}

// function load2015(){

//     questions.push(loadImage("2015-NC-1.png")); 
//     questions.push(loadImage("2015-NC-2.png")); 
//     questions.push(loadImage("2015-NC-3.png")); 
//     questions.push(loadImage("2015-NC-4.png")); 
//     questions.push(loadImage("2015-NC-5.png")); 
//     questions.push(loadImage("2015-NC-6.png")); 
//     questions.push(loadImage("2015-NC-7.png")); 
//     questions.push(loadImage("2015-NC-8.png")); 
//     questions.push(loadImage("2015-NC-9.png")); 
//     questions.push(loadImage("2015-NC-10.png")); 
//     questions.push(loadImage("2015-NC-11.png")); 
//     questions.push(loadImage("2015-NC-12.png")); 
//     questions.push(loadImage("2015-NC-13.png")); 
//     questions.push(loadImage("2015-NC-14.png")); 
//     questions.push(loadImage("2015-NC-15.png")); 
//     questions.push(loadImage("2015-NC-16.png")); 
//     questions.push(loadImage("2015-NC-17.png")); 
//     questions.push(loadImage("2015-NC-18.png")); 
//     questions.push(loadImage("2015-NC-19.png")); 
//     questions.push(loadImage("2015-NC-20.png")); 
//     questions.push(loadImage("2015-NC-21.png")); 
//     questions.push(loadImage("2015-NC-22.png")); 
//     questions.push(loadImage("2015-NC-23.png")); 
//     questions.push(loadImage("2015-NC-24.png")); 
//     questions.push(loadImage("2015-NC-25.png")); 
//     questions.push(loadImage("2015-NC-26.png")); 
//     questions.push(loadImage("2015-NC-27.png")); 
//     questions.push(loadImage("2015-NC-28.png"));
      
//     questions.push(loadImage("2015-C-76.png")); 
//     questions.push(loadImage("2015-C-77.png")); 
//     questions.push(loadImage("2015-C-78.png")); 
//     questions.push(loadImage("2015-C-79.png")); 
//     questions.push(loadImage("2015-C-80.png")); 
//     questions.push(loadImage("2015-C-81.png")); 
//     questions.push(loadImage("2015-C-82.png")); 
//     questions.push(loadImage("2015-C-83.png")); 
//     questions.push(loadImage("2015-C-84.png")); 
//     questions.push(loadImage("2015-C-85.png")); 
//     questions.push(loadImage("2015-C-86.png")); 
//     questions.push(loadImage("2015-C-87.png")); 
//     questions.push(loadImage("2015-C-88.png")); 
//     questions.push(loadImage("2015-C-89.png")); 
//     questions.push(loadImage("2015-C-90.png")); 
//     questions.push(loadImage("2015-C-91.png")); 
//     questions.push(loadImage("2015-C-92.png")); 
// }
function load2015() {
  // Load "2015-NC-1.png" to "2015-NC-28.png"
  for (let i = 1; i <= 28; i++) {
    questions.push(loadImage(`2015-NC-${i}.png`));
  }

  // Load "2015-C-76.png" to "2015-C-92.png"
  for (let i = 76; i <= 92; i++) {
    questions.push(loadImage(`2015-C-${i}.png`));
  }
}



function activateUnit(ind){
  for(var g=skillIndexes[ind][0];g<=skillIndexes[ind][1];g++){
    controls[g].there=true;
    controls[g].rgb=selectcolor;
    controls[ind].rgb=selectcolor;
  }
}

class control{
  constructor(x,y,w,h,txt,there,rgb,ind){
    this.x=x; this.y=y; this.w=w; this.h=h; this.txt=txt; this.there=there; this.rgb=rgb; this.ind=ind;
  }
  
  tapit(){
    if(mouseX>=this.x && mouseX<=this.x+this.w && mouseY>=this.y && mouseY <= this.y+this.h && this.there){
      if(this.ind<=8){                  // user clicks a unit
        if(this.rgb===selectcolor){              //user has d-clicked and this will bypass to whole skill mix
          for(var b=0;b<controls.length;b++){   //resets button colors and makes them not there
            controls[b].rgb=butcolor;
            controls[b].there=false;
          }
          wholeSkillHomeScreen(this.ind);
        }
          
        else{
        for(var k=0;k<9;k++){
          controls[k].rgb=butcolor;
        }
        for(var h=9;h<=56;h++){
          controls[h].there=false;
        }
        activateUnit(this.ind);  
        homeScreen();
        fill(240);
        stroke(selectbordercolor);
        strokeWeight(2);
        rect(this.x+this.w+30,skillBoxInfo[this.ind][0],400,skillBoxInfo[this.ind][1],2);
        for(var y=0;y<controls.length;y++){
            controls[y].drawit();
         }
        fill(this.rgb);
        noStroke();
        triangle(this.x+this.w-2,this.y,this.x+this.w-2,this.y+this.h,this.x+this.w+30,this.y+this.h/2);
        stroke(selectbordercolor);
        strokeWeight(2);
        line(this.x+this.w-2,this.y,this.x+this.w+30,this.y+this.h/2);
        line(this.x+this.w-2,this.y+this.h,this.x+this.w+30,this.y+this.h/2);
        }
      }

      else if(this.ind==="year"){    //user clicks a year
        for(var f=0;f<controls.length;f++){
          controls[f].there=false;
        }
        loadQuestions(parseInt(this.txt));
        yearHomeScreen(parseInt(this.txt));
      }

      
      else if(this.txt==="Next"){
        n++;
        refresher();
      }
      else if(this.txt==="Previous"){
        n--;
        refresher();
      }
      else if(this.txt==="Start"){
        adjustImageDimensions();
        this.there=false;
        refresher();
      }
    }
  }
  
  drawit(){
    if(this.there){
      fill(this.rgb);
      stroke(25, 45, 100);
      strokeWeight(2);
      rect(this.x, this.y, this.w, this.h, 4);
      fill(0,0,200);
      noStroke();
      if(this.ind>=9&&this.ind<=56){textSize(15);}
      else if(this.ind==="answer choice"){textSize(44);}
      else{textSize(20);}
      if(this.ind==="year"||this.ind==="exam controller"||this.ind==="answer choice"){
        textAlign(CENTER,CENTER);
        text(this.txt,this.x+this.w/2, this.y+this.h/2);
      }
      else{
        textAlign(LEFT,CENTER);
        text(this.txt,this.x+10, this.y+this.h/2);
      }
    }
  }
}
