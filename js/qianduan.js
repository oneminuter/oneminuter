var html5 = document.getElementById("html5");
var qd_html5 = document.getElementById("qd_html5");
var webApp = document.getElementById("webApp");
var qd_webApp = document.getElementById("qd_webApp");
var js = document.getElementById("js");
var qd_js = document.getElementById("qd_js");
var jquery = document.getElementById("jquery");
var qd_jquery = document.getElementById("qd_jquery");
var browser = 0;
var oldOffsetTop = 0;

html5.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = qd_html5.offsetTop;
	var newOffersetTop = oldOffsetTop - 40;
	if (browser < 920) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
webApp.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = qd_webApp.offsetTop;
	var newOffersetTop = oldOffsetTop - 40;
	if (browser < 920) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
js.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = qd_js.offsetTop;
	var newOffersetTop = oldOffsetTop - 40;
	if (browser < 920) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
jquery.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = qd_jquery.offsetTop;
	var newOffersetTop = oldOffsetTop - 40;
	if (browser < 920) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}