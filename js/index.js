window.onload = function(){
init();
}
/* virtual alert*/
function valert(x){
var box = document.getElementById("v_alert");
var content = document.getElementById("v_alert_text");
box.style.display ="flex";
content.innerHTML = x;
setTimeout(function(){
box.style.display ="none";
}, 2500);
}





var acehtml = ace.edit("textarea");
acehtml.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
acehtml.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
acehtml.setHighlightActiveLine(true);
acehtml.setValue(`\n\n\n\n\n`,1);
acehtml.moveCursorToPosition({row: 0, column: 0});
acehtml.setTheme("ace/theme/github_dark");







function init(){
document.querySelectorAll('#tabs div p').forEach((elem) => {
elem.onclick = function(e){
checklib();
x = elem.parentElement.querySelector("i").getAttribute("area");
const mainCode = document.querySelector(".main-code");
if(mainCode){
mainCode.classList.remove("main-code");}

document.getElementById(x).classList.add("main-code")
const mainTab = document.querySelector(".main-tab");
if(mainTab){
mainTab.classList.remove("main-tab");}
elem.parentElement.classList.add("main-tab");
}
});

document.querySelectorAll('#tabs div i').forEach((element) => {
element.onclick = function(e){
var x = element.getAttribute("area");

if(element.parentElement.previousElementSibling){
var y = element.parentElement.previousElementSibling.querySelector("p");
y.click();
}
else if(element.parentElement.nextElementSibling){
var y = element.parentElement.nextElementSibling.querySelector("p");
y.click();
}
else{
element.closest("div").querySelector("p").click();
}



if(document.getElementsByClassName("textarea").length > 1){
document.getElementById(x).parentNode.removeChild(document.getElementById(x));
document.getElementById("tabs").removeChild(element.parentElement);}//if
}
});
} //init




function areaClick(x){
var y = document.querySelector(`[area="${x}"]`).parentElement.querySelector("p");
y.click();
}


/* new File */
function newFile(){
var zero = document.getElementById("textarea");
var one = document.getElementById("textarea1");
var two = document.getElementById("textarea2");
var three = document.getElementById("textarea3");
var four = document.getElementById("textarea4");
var codeBox = document.getElementById("code-cover");
var tabBox = document.getElementById("tabs");


if(zero && !one){
code = document.createElement("div");
code.id ="textarea1";
code.className ="textarea";
codeBox.appendChild(code);
tabBox.innerHTML +=`<div><img src="pyicon.png"><p>*untitled</p><i class="bx bx-x" area="textarea1"></i></div>`;

var text1 = ace.edit("textarea1");
text1.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
text1.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
text1.setHighlightActiveLine(true);
text1.setValue(`\n\n\n\n\n`,1);
text1.moveCursorToPosition({row: 0, column: 0});
text1.setTheme("ace/theme/github_dark");
init();
window.text1 = text1;
areaClick("textarea1");
}//if


if(zero && one && !two){
code = document.createElement("div");
code.id ="textarea2";
code.className ="textarea";
codeBox.appendChild(code);
tabBox.innerHTML +=`<div><img src="pyicon.png"><p>*untitled</p><i class="bx bx-x" area="textarea2"></i></div>`;

var text2 = ace.edit("textarea2");
text2.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
text2.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
text2.setHighlightActiveLine(true);
text2.setValue(`\n\n\n\n\n`,1);
text2.moveCursorToPosition({row: 0, column: 0});
text2.setTheme("ace/theme/github_dark");
init();
window.text2 = text2;
areaClick("textarea2");
}//if


if(zero && one && two && !three){
code = document.createElement("div");
code.id ="textarea3";
code.className ="textarea";
codeBox.appendChild(code);
tabBox.innerHTML +=`<div><img src="pyicon.png"><p>*untitled</p><i class="bx bx-x" area="textarea3"></i></div>`;

var text3 = ace.edit("textarea3");
text3.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
text3.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
text3.setHighlightActiveLine(true);
text3.setValue(`\n\n\n\n\n`,1);
text3.moveCursorToPosition({row: 0, column: 0});
text3.setTheme("ace/theme/github_dark");
init();
window.text3 = text3;
areaClick("textarea3");
}//if


if(zero && one && two && three && !four){
code = document.createElement("div");
code.id ="textarea4";
code.className ="textarea";
codeBox.appendChild(code);
tabBox.innerHTML +=`<div><img src="pyicon.png"><p>*untitled</p><i class="bx bx-x" area="textarea4"></i></div>`;

var text4 = ace.edit("textarea4");
text4.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
text4.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
text4.setHighlightActiveLine(true);
text4.setValue(`\n\n\n\n\n`,1);
text4.moveCursorToPosition({row: 0, column: 0});
text4.setTheme("ace/theme/github_dark");
init();
window.text4 = tzer4;
areaClick("textarea4");
}//if


if(!zero){
code = document.createElement("div");
code.id ="textarea";
code.className ="textarea";
codeBox.appendChild(code);
tabBox.innerHTML +=`<div><img src="pyicon.png"><p>*untitled</p><i class="bx bx-x" area="textarea"></i></div>`;

var text0 = ace.edit("textarea");
text0.setOptions({
enableBasicAutocompletion: true, 
enableSnippets: true, 
enableLiveAutocompletion: true,
fontSize: "100%" 
});
text0.getSession().setMode("ace/mode/python"); 
// acehtml.setValue(acehtml_value);
// acehtml.getSession().getValue();
text0.setHighlightActiveLine(true);
text0.setValue(`\n\n\n\n\n`,1);
text0.moveCursorToPosition({row: 0, column: 0});
text0.setTheme("ace/theme/github_dark");
init();
areaClick("textarea");
}//if

if(four){
valert("Max tab already opened : 5")
}
}//newFile function ended 









