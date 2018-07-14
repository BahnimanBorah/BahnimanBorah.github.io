/** NEWS BULLETIN SLIDE SHOW */

var marqueespeed=1;
var marqueespeed1=1; //Specify marquee scroll speed (larger is faster 1-10)
var pauseit=1;
var pauseit1=1; //Pause marquee onMousever (0=no. 1=yes)?


var copyspeed=marqueespeed;
var copyspeed1=marqueespeed1;
var pausespeed=(pauseit==0)? copyspeed: 0;
var pausespeed1=(pauseit1==0)? copyspeed1: 0;
var actualheight='';
var actualheight1='';

function initializemarquee(){
    cross_marquee=document.getElementById("vmarquee");
    cross_marquee.style.top=0;
    
    marquees=document.getElementById("marqueecontainer");
    marqueeheight=marquees.offsetHeight;
    actualheight=cross_marquee.offsetHeight;
    
    if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
        cross_marquee.style.height=marqueeheight+"px";
        cross_marquee.style.overflow="scroll";
        return;
    }
    setTimeout('lefttime=setInterval("scrollmarquee()",30)', 2000);
}

function scrollmarquee(){
    if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)){
    cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px";
    }
    else{
    cross_marquee.style.top=parseInt(marqueeheight)+280+"px";
    }
}

function initializemarquee1(){
    cross_marquee1=document.getElementById("vmarquee1");
    cross_marquee1.style.top=0;
    
    marquees1=document.getElementById("marqueecontainer1");
    marqueeheight1=marquees1.offsetHeight;
    actualheight1=cross_marquee1.offsetHeight;
    
    if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
        cross_marquee1.style.height=marqueeheight1+"px";
        cross_marquee1.style.overflow="scroll";
        return;
    }
    setTimeout('lefttime=setInterval("scrollmarquee1()",30)', 2000);
}

function scrollmarquee1(){
    if (parseInt(cross_marquee1.style.top)>(actualheight1*(-1)+8)){
    cross_marquee1.style.top=parseInt(cross_marquee1.style.top)-copyspeed1+"px";
    }
    else{
    cross_marquee1.style.top=parseInt(marqueeheight1)+280+"px";
    }
}

if (window.addEventListener){
    window.addEventListener("load", initializemarquee, false);
    window.addEventListener("load", initializemarquee1, false);
}
else if (window.attachEvent){
    window.attachEvent("onload", initializemarquee);
    window.attachEvent("onload", initializemarquee1);
}
else if (document.getElementById){
    window.onload=initializemarquee;
    window.onload=initializemarquee1;
}

/** NEWS BULLETIN SLIDE SHOW ENDS HERE*/


/**JQUERY EVENTS */


/**JQUERY EVENTS END HERE*/