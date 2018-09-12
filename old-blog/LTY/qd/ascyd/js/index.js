window.onload = function(){
	var more = document.getElementById("more");
	var moreopacity = more.style.opacity;
	
	more.style.opacity="1.0";
	var i = setInterval(detection,200);
	var j = setInterval(regain,1000)

	//clearInterval(i);
	
	function regain(){
		more.style.opacity="1.0";
	}

	function detection(){
		if(moreopacity=0){
			//clearInterval(i);
			//more.style.opacity="1.0";
			addopacity();
		}else{
			lessopacity();
		}
	}
	
	function lessopacity(){
		more.style.opacity-=0.2;
	}
	
	function addopacity(){
		more.style.opacity=more.style.opacity+0.1;
	}
}
