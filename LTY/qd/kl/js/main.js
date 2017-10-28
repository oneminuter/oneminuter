window.onload = function(){
	var slidePic = document.getElementById("slidePic");
	var slidePicbuttonTurnLeft = document.getElementById("slidePicbuttonTurnLeft");
	var slidePicbuttonTurnRigth = document.getElementById("slidePicbuttonTurnRigth");
	var sliderPicName = document.getElementById("sliderPicName");

	slidePicbuttonTurnLeft.style.display = "none";
	slidePicbuttonTurnRigth.style.display = "none";


}
function showTurnButton(){
	slidePicbuttonTurnLeft.style.display = "block";
	slidePicbuttonTurnRigth.style.display = "block";
	slidePicbuttonTurnLeft.style.transitions = "3s";
}
function hideTurnButton(){
	slidePicbuttonTurnLeft.style.display = "none";
	slidePicbuttonTurnRigth.style.display = "none";
}