function $(id){return document.getElementById(id);}
window.onload=function(){
	   $("list1").onclick=function(){
			$("list1").style.border="2px solid black";
			var i;
			for(i=2;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			//var bg=document.getElementById("bodyoutid");
			//bg.style.backgroundImage="url(../img/bgs/1.jpg)";
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/1.jpg)";
			//var bg = document.getElementById("background");
			//bg.style.backgroundImage ="url(images/1.jpg)";
			//$("bodyoutid").style.backgroundImage="url(../img/bgs/1.jpg)";
		}
	    $("list2").onclick=function(){
			$("list2").style.border="2px solid black";			
			for(i=3;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			for(i=1;i<2;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/2.jpg)";
		}
		
	    $("list3").onclick=function(){
			$("list3").style.border="2px solid black";			
			for(i=4;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			for(i=1;i<3;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/3.jpg)";
		}

	    $("list4").onclick=function(){
			$("list4").style.border="2px solid black";			
			for(i=5;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			for(i=1;i<4;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/4.jpg)";
		}

	    $("list5").onclick=function(){
			$("list5").style.border="2px solid black";			
			for(i=6;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			for(i=1;i<5;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/5.jpg)";
		}

	    $("list6").onclick=function(){
			$("list6").style.border="2px solid black";			
			for(i=7;i<8;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			for(i=1;i<6;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/6.jpg)";
		}

	    $("list7").onclick=function(){
			$("list7").style.border="2px solid black";			
			for(i=1;i<7;i++){
				$("list"+i).style.border="2px solid #9fcef1";
			}
			var bg=document.getElementById("bodyoutid");
		    bg.style.backgroundImage="url(img/bgs/7.jpg)";
		}
}
/*
function newbg1(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/1.jpg)";
}
function newbg2(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/2.jpg)";
}

function newbg3(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/3.jpg)";
}
function newbg4(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/4.jpg)";
}
function newbg5(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/5.jpg)";
}
function newbg6(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/6.jpg)";
}
function newbg7(){
			var bg=document.getElementById("bodyoutid");
			bg.style.backgroundImage="url(img/bgs/7.jpg)";
}
*/