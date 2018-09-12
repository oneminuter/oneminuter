/*
window.onload = function(){	
	//alert(document.cookie + document.domain + document.title + document.URL + document.lastModified + document.referrer);

	//var  font = document.getElementById('font');
	
	setInterval("setFontShadow()",10);
}
function setFontShadow(){
	//text-shadow: x-offset y-offset blur color;	
	//text-shadow:2px 2px 5px red;

	//font.css.text-shadow=("color","blue");

	//alert("gddrg");
	var t = document.getElementById("test");
	
	//var e = window.event;
 	//event.offsetX   返回当前鼠标悬停X坐标值
 	//event.offsetY   返回当前鼠标悬停Y坐标值

	//event.clientX   返回最后一次点击鼠标X坐标值；
	//event.clientY   返回最后一次点击鼠标Y坐标值；
 	var eve = window.event;
    var x = eve.offsetX, // 相对于客户端的X坐标
        y = eve.offsetY,  // 相对于客户端的Y坐标
        x1 = eve.screenX,  // 相对于计算机屏幕的X坐标
        y1 = eve.screenY;  // 相对于计算机屏幕的Y坐标

	x = event.offsetX;

	t.value = window.event.x;
	
}
var body = document.getElementsByTagName("body")[0];
*/
window.onload = function(){
	//var t = document.getElementById("font");

	//elementNode.setAttribute(name,value)
	//t.css("text-shadow","10px 10px 10px blue");

	

	//$("#font").css.text-shadow.x-shadow = x ;
	//$("#font").css.text-shadow.y-shadow = y ;
	//$("#font").css.text-shadow.blur = r ;
	//$("#font").css.text-shadow.color = color;

/*	$("#font").css.text-shadow({
		color:   "blue",
		xoffset: "10px",
		yoffset: "20px",
		radius:  "30px",
	}
		);
*/

	//var a = 10;
	//var b = 10;
	//var c = 10;
/*
	<div onmouseover="test(event)"></div>
	function test(e){
		//这里可得到鼠标X坐标
		var pointX = e.pageX;

		//这里可以得到鼠标Y坐标
		var pointY = e.pageY;
}
*/




	$(function(){
    	$(document).mousemove(function(){
    		var a = event.x;
    		var b = event.y;
    		var c = 30;

    		
    		
    		var x = 0.04*(675-a) + "px";
			var y = 0.04*(315-b) + "px";
    		

    		//var x = -0.03*a + "px";
			//var y = -0.03*b + "px";
			var r = c + "px";
			var color = "black"

			$("#font").css("text-shadow", x + " "+ y + " " + r + " " + color);

        	return $("#a").text("a=" + a + "    x=" + x), $("#b").text("b=" + b + "    y=" + y);
   		 });
  	

		
	});

	

		

/*	

	var x = a + "px";
	var y = b + "px";
	var r = c + "px";
	var color = "black"
	$("#font").css("text-shadow", x+" "+y+" "+r+" "+color);
*/

	
	//alert(t.innerHTML);
}

