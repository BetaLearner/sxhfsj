// JavaScript Document

var speed=20;
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;

var tab_2=document.getElementById("demo_2");
var tab1_2=document.getElementById("demo1_2");
var tab2_2=document.getElementById("demo2_2");
tab2_2.innerHTML=tab1_2.innerHTML;

function Marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0)
        tab.scrollLeft-=tab1.offsetWidth
    else{
        tab.scrollLeft++;
    }

    if(tab2_2.offsetWidth-tab_2.scrollLeft<=0)
        tab_2.scrollLeft-=tab1_2.offsetWidth
    else{
        tab_2.scrollLeft++;
    }
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
tab_2.onmouseover=function() {clearInterval(MyMar)};
tab_2.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
