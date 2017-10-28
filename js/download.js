var qd = document.getElementById("qd");
var qd_download = document.getElementById("qd_download");
var ht = document.getElementById("ht");
var ht_download = document.getElementById("ht_download");
var android = document.getElementById("android");
var android_download = document.getElementById("android_download");
var database = document.getElementById("database");
var database_download = document.getElementById("database_download");
var browser = 0;
var oldOffsetTop = 0;

qd.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = qd_download.offsetTop;
	var newOffersetTop = oldOffsetTop - 17;
	if (browser < 640) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
ht.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = ht_download.offsetTop;
	var newOffersetTop = oldOffsetTop - 17;
	if (browser < 640) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
android.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = android_download.offsetTop;
	var newOffersetTop = oldOffsetTop - 17;
	if (browser < 640) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
database.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = database_download.offsetTop;
	var newOffersetTop = oldOffsetTop - 17;
	if (browser < 640) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}