// output functions are configurable.  This one just appends some text
// to a pre element.
var codeText;
function checkCodeDiv(){
const divs = document.querySelectorAll('.textarea');
const desiredZIndexValue = '99'; // Modify here with the desired z-index value
divs.forEach((div) => {
  const computedStyle = window.getComputedStyle(div);
  const zIndexValue = computedStyle.getPropertyValue('z-index');
  
  if (zIndexValue === desiredZIndexValue) {
     if(div.id =="textarea"){codeText = acehtml;}
     if(div.id =="textarea1"){codeText = text1;}
     if(div.id =="textarea2"){codeText = text2;}
     if(div.id =="textarea3"){codeText = text3;}
     if(div.id =="textarea4"){codeText = text4;}
  }
});
} //check main code div


var wiiw = window.innerWidth;
var wiih = window.innerHeight - 60;


function outf(text) {
  var mypre = document.getElementById("result-code");
  mypre.innerHTML = mypre.innerHTML + text;
}

 
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
document.getElementById("result-code").style.display ="block";
document.getElementById("mycanvas").style.display ="none";
document.getElementById("result-code-div").style.display ="none";

   checklib();
   var html_div_one = codeText.getSession().getValue();
   var prog = html_div_one; 
   var mypre = document.getElementById("result-code"); 
   mypre.innerHTML = "";    
   Sk.canvas = "mycanvas";
   document.getElementById("mycanvas").width = wiiw;
   document.getElementById("mycanvas").height = wiih;
   Sk.pre = "result-code";
   Sk.configure({output:outf, read:builtinRead}); 
   try {
      eval(Sk.importMainWithBody("<stdin>",false,prog)); 
   }
   catch(e) {       
       /* alert(e.toString());=> */	
       var errortext = e.toString(); 	
       errorhideresult(errortext); 
   }
} 



Sk.domOutput = function(html){ 
return $("#result-code-div").append(html).children().last();
};



Sk.externalLibraries = { 
pygal :{ 
path : 'js/pygal.js', 
dependencies : 
[ 
'js/highcharts.js', 
'js/highcharts-more.js' 
], 
loadDepsSynchronously: true 
}};



/*  
Sk.availableWidth = wiiw; 
Sk.availableHeight = wiih;
 */









function errorhideresult(errortext){
var x = document.getElementById("result-error");
window.navigator.vibrate([200]);
x.style.display ="block";
document.getElementById("error-alert").innerHTML = errortext;
document.getElementById("result-div").classList.add("error-blur");
}



document.getElementById("error-close").onclick = function(){
var x = document.getElementById("result-error");
x.style.display ="none";
document.getElementById("result-div").classList.remove("error-blur");				
closeRun();
}





function checklib(){
Sk.onAfterImport = function(library) { 
var fcr = document.getElementById("result-code");
var scr = document.getElementById("mycanvas");
var dcr = document.getElementById("result-code-div");

switch(library) {
case 'pygal':
fcr.style.display ="none";
scr.style.display ="none"; 
dcr.style.display ="block"; 
break;

case 'turtle':
fcr.style.display ="none";
scr.style.display ="block"; 
dcr.style.display ="none"; 
break;
}
}
}








/* compile function */
function run(){
checkCodeDiv(); 
checklib();
runit();
document.getElementById("result-div").style.display ="block"; 
}
function closeRun(){
document.getElementById("result-div").style.display ="none"; 
}
