var jsp = document.getElementById("jsp");
var ht_jsp = document.getElementById("ht_jsp");
var php = document.getElementById("php");
var ht_php = document.getElementById("ht_php");
var python = document.getElementById("python");
var ht_python = document.getElementById("ht_python");
var database = document.getElementById("database");
var ht_database = document.getElementById("ht_database");
var browser = 0;
var oldOffsetTop = 0;

jsp.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = ht_jsp.offsetTop;
	var newOffersetTop = oldOffsetTop - 25;
	if (browser < 1200) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
php.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = ht_php.offsetTop;
	var newOffersetTop = oldOffsetTop - 25;
	if (browser < 1200) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
python.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = ht_python.offsetTop;
	var newOffersetTop = oldOffsetTop - 25;
	if (browser < 1200) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}
database.onclick = function() {
	browser = document.body.clientWidth;
	oldOffsetTop = ht_database.offsetTop;
	var newOffersetTop = oldOffsetTop - 25;
	if (browser < 1200) {
		this.setAttribute('data-am-smooth-scroll', '{position: ' + newOffersetTop + ', speed: 1000}')
	}
}