window.onload = function(){

	var w = document.body.clientWidth;
	if(w > 641 ){
		alert("本页面为手机端页面呕！亲");
	}		
	
	 var pic1 = document.getElementById("pic1");
	 var pic2 = document.getElementById("pic2");
	 var pic4 = document.getElementById("pic3");
	 
	 pic2.style.display = "none";
	 pic3.style.display = "none";
	 
	 var pic1Btn = document.getElementById("pic1Btn");
	 var pic2Btn = document.getElementById("pic2Btn");
	 var pic3Btn = document.getElementById("pic3Btn");
	 
	 function pic1Btn(){
	 	pic1Btn.style.background="#D1D0CE";
	 	pic2Btn.style.background="#65615E";
		pic3Btn.style.background="#65615E";
	 }
	/* pic1.bind("click",function(){
	 	pic1.style.display = "block";
	 	pic2.style.display = "none";
	 	pic3.style.display = "none";alert("pic1");
	 })
	 pic2.bind("onclick",function(){
	 	pic2.style.display = "block";
	 	pic1.style.display = "none";
	 	pic3.style.display = "none";alert("pic2");
	 })
	 pic3.bind("onclick",function(){
	 	pic3.style.display = "block";
	 	pic2.style.display = "none";
	 	pic1.style.display = "none";alert("pic3");
	 })*/
	/*
	$("#pic1Btn").bind("click",function(){
		var $this = $(this);
		$("#pic1Btn").style.background="#D1D0CE";alert("1");
		$("#pic2Btn").style.background = "#65615E";
		$("#pic3Btn").style.background = "#65615E";
		
		$("#pic1").style.display = "block";
		$("#pic2").style.display = "none";
	    $("#pic3").style.display = "none";
	})
	
	$("#pic2Btn").bind("click",function(){
		var $this = $(this);
		$this.style.background = "#D1D0CE";
		$("#pic1Btn").style.background = "#65615E";
		$("#pic3Btn").style.background = "#65615E";
		
		$("#pic1").style.display = "none";
		$("#pic2").style.display = "block";
	    $("#pic3").style.display = "none";alert("2");
	})	
	
		$("#pic3Btn").bind("click",function(){
		var $this = $(this);
		$this.style.background = "#D1D0CE";
		$("#pic1Btn").style.background = "#65615E";
		$("#pic2Btn").style.background = "#65615E";
		
		$("#pic1").style.display = "none";
		$("#pic2").style.display = "none";
	    $("#pic3").style.display = "block";alert("3");
	})*/
}//window.onload()
