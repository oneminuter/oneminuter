//获取头部导航
var cont_top_nav = document.getElementById("cont_top_nav");
var cont_top_nav_width = 0;
window.onload = function(){
	cont_top_nav_width = cont_top_nav.offsetWidth;
	cont_top_nav.style.marginLeft = "-" + cont_top_nav_width/2 + "px";
}
window.onresize = function(){
	cont_top_nav_width = cont_top_nav.offsetWidth;
	cont_top_nav.style.marginLeft = "-" + cont_top_nav_width/2 + "px";
}
