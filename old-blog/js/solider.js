	//获取左边按钮
	var leftBtn = document.getElementById("leftBtn");
	//获得右边按钮
	var rightBtn = document.getElementById("rightBtn")
	//获得ul
	var sliderUl = document.getElementById("slider_ul");
	//获得ul下的所有li
	var sliderLis = sliderUl.getElementsByTagName("li");
	//获得dote_nav
	var doteNav = document.getElementById("dote_nav");
	//获得dote_nav下的span
	doteNavSpans = doteNav.getElementsByTagName("span");
	
window.onload = function(){
	//给li 和 dote_nav下的span 编号
	for(var i = 0; i < sliderLis.length; i++){
		sliderLis[i].id=i;
		doteNavSpans[i].id = i;
	}
	
	/*为左右按钮添加显示监听事件 start*/
	//当鼠标在幻灯片上时，显示左右按钮
	//1.获取浏览器窗口宽度
	var browserWidth =  0;
	leftBtn.onmouseover = function(){
		leftBtn.style.left = 0 + "px";
	}
	rightBtn.onmouseover = function(){
		rightBtn.style.right = 0 + "px";
		rightBtn.style.zIndex = "1";
	}
	sliderUl.onmouseover = function(){
		//获取浏览器窗口宽度
		browserWidth =  document.body.clientWidth;
		if(browserWidth>640){
			leftBtn.style.left = 0 + "px";
			rightBtn.style.zIndex = "1";
		}
	}
	sliderUl.onmouseout = function(){
		//获取浏览器窗口宽度
		browserWidth =  document.body.clientWidth;
		if(browserWidth > 640){
			leftBtn.style.left = "-100%";
			rightBtn.style.right = "0px"
			rightBtn.style.zIndex = "-1";
		}
	}
	/*为左右按钮添加显示监听事件 end*/
	
	if(sliderLis.length<2){ //只有一张图片的情况
		//使第一张图片的位置在左端
		sliderLis[0].className = "posCenter";
		doteNavSpans[0].className = "dote_nav_select";
	}else if(sliderLis.length>2){
		//使第一张图片的位置在左端
		sliderLis[0].className = "posLeft";
		//使第一张图片显示,第一张编号为1，因为在最前面放了一张与最后一张相同的图片
		sliderLis[1].className = "posCenter";
		doteNavSpans[1].className = "dote_nav_select";
		//初始时，除了第一张在正面外，其他的都在右边
		for(var i = 2; i < sliderLis.length; i++){
			sliderLis[i].className = "posRight";
		}
	}else{ //只有两张图片的情况
		//使第一张图片的位置在左端
		sliderLis[0].className = "posCenter";
		doteNavSpans[0].className = "dote_nav_select";
		//使第一张图片显示,第一张编号为1，因为在最前面放了一张与最后一张相同的图片
		sliderLis[1].className = "posRight";
	}
	
	//设置自动播放
	setInterval("nextBtn()",5000);
}

//为触屏式添加左右滑动事件，左右滑动时切换幻灯片
var startPageX = 0;
var endPageX = 0;
sliderUl.addEventListener('touchstart',function(event){
	event.preventDefault();
	var touch = event.targetTouches[0];
	startPageX = touch.pageX;
});
sliderUl.addEventListener('touchend', function(event){
	event.preventDefault();
	var touch = event.changedTouches[0];
	endPageX = touch.pageX;
	if(endPageX - startPageX > 30){
		preBtn();
	}else if(endPageX - startPageX < -30){
		nextBtn();
	}
});

//左边按钮，点击往右滚动
function preBtn(){
	//取得当前显示图片的编号
	var index = findIndex();
	if(index != 1){
		//获得当前显示的图片的li
		var currentImg = document.getElementById(index);
		//当前显示图片向右移
		currentImg.className = "posRight";
		
		//下一张(排在前面一张)图片从左向中间移动
		//判断当前显示的是不是第一张图片，如果是，则下一张图片是最后一张
		if(index == 0){
			index = sliderLis.length;
		}
		index--;
		var nextImg = document.getElementById(index);
		nextImg.className = "posCenter";
		//同时改变dote_nav的背景
		for(var i = 0; i < doteNavSpans.length; i++){
			doteNavSpans[i].className = "";
		}
		doteNavSpans[index].className = "dote_nav_select";
		
		//把与当前显示图片前面相隔为1的图片移动到最左边
		sliderLis[index-1].className = "posLeft";
	}else{ //index=1时，显示的是第二张图片
		//获得当前显示的图片的li
		var currentImg = document.getElementById(index);
		//当前显示图片向右移，即第二张图片右移
		currentImg.className = "posRight";
		//下一张(第一张)图片从左向中间移动
		index--;
		var nextImg = document.getElementById(index);
		nextImg.className = "posCenter"; //当前显示的是第一张
		//同时改变dote_nav的背景
		for(var i = 0; i < doteNavSpans.length; i++){
			doteNavSpans[i].className = "";
		}
		doteNavSpans[index].className = "dote_nav_select";
		
		//把最后一张图片移到最左边
		sliderLis[sliderLis.length-1].className = "posLeft";
	}
}

//右边按钮，点击往左滚动
function nextBtn(){
	//取得当前显示图片的编号
	var index = findIndex();
	if(index != sliderLis.length-2){
		//获得当前显示的图片的li
		var currentImg = document.getElementById(index);
		//当前图片左移
		currentImg.className = "posLeft";
		//下一张（排在后面的一张）图片向中间移
		//判读下一张是否是第一张，即当前显示的时候是最后一张，如果是，则修改index的值
		if(index == sliderLis.length-1){
			index = -1;
		}
		index++;
		var nextImg = document.getElementById(index);
		nextImg.className = "posCenter";
		//同时改变dote_nav的背景
		for(var i = 0; i < doteNavSpans.length; i++){
			doteNavSpans[i].className = "";
		}
		doteNavSpans[index].className = "dote_nav_select";
		
		//把当前显示图片往后相隔为1的图片移到右边
		sliderLis[index+1].className = "posRight";
	}else{ //index = sliderLis.length-2时，即当前显示的是倒数第二张图片
		//获得当前显示的图片的li，即倒数第二张图片
		var currentImg = document.getElementById(index);
		//倒数第二张图片左移
		currentImg.className = "posLeft";
		//下一张（最后一张）图片向中间移
		index++;
		var nextImg = document.getElementById(index);
		nextImg.className = "posCenter"; //当前显示的是最后一张
		//同时改变dote_nav的背景
		for(var i = 0; i < doteNavSpans.length; i++){
			doteNavSpans[i].className = "";
		}
		doteNavSpans[index].className = "dote_nav_select";
		
		//把第一张图片移到右边
		sliderLis[0].className = "posRight";
	}
}

//判断当前显示的是那一页
function findIndex(){
	for(var i = 0; i < sliderLis.length; i++){
		if(sliderLis[i].className == "posCenter"){
			return sliderLis[i].id;
		}
	}
}
