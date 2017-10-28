/*
 * 让textarea的行数自动适应
 */
//获取textarea
var textarea = document.getElementById("textarea");
var rows = 0;
window.onload = function(){
	var rows = textarea.value.split(/\n/).length;
	textarea.rows = rows;
}
window.onresize = function(){
	var rows = textarea.value.split(/\n/).length;
	textarea.rows = rows;
}
