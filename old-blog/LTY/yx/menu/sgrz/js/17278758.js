var a8758tf = "51la";
var a8758pu = "";
var a8758pf = "51la";
var a8758su = window.location;
var a8758sf = document.referrer;
var a8758of = "";
var a8758op = "";
var a8758ops = 1;
var a8758ot = 1;
var a8758d = new Date();
var a8758color = "";
if (navigator.appName == "Netscape") {
	a8758color = screen.pixelDepth;
} else {
	a8758color = screen.colorDepth;
}
try {
	a8758tf = top.document.referrer;
} catch (e) {}
try {
	a8758pu = window.parent.location;
} catch (e) {}
try {
	a8758pf = window.parent.document.referrer;
} catch (e) {}
try {
	a8758ops = document.cookie.match(new RegExp("(^| )a8758_pages=([^;]*)(;|$)"));
	a8758ops = (a8758ops == null) ? 1 : (parseInt(unescape((a8758ops)[2])) + 1);
	var a8758oe = new Date();
	a8758oe.setTime(a8758oe.getTime() + 60 * 60 * 1000);
	document.cookie = "a8758_pages=" + a8758ops + ";path=/;expires=" + a8758oe.toGMTString();
	a8758ot = document.cookie.match(new RegExp("(^| )a8758_times=([^;]*)(;|$)"));
	if (a8758ot == null) {
		a8758ot = 1;
	} else {
		a8758ot = parseInt(unescape((a8758ot)[2]));
		a8758ot = (a8758ops == 1) ? (a8758ot + 1) : (a8758ot);
	}
	a8758oe.setTime(a8758oe.getTime() + 365 * 24 * 60 * 60 * 1000);
	document.cookie = "a8758_times=" + a8758ot + ";path=/;expires=" + a8758oe.toGMTString();
} catch (e) {}
try {
	if (document.cookie == "") {
		a8758ops = -1;
		a8758ot = -1;
	}
} catch (e) {}
a8758of = a8758sf;
if (a8758pf !== "51la") {
	a8758of = a8758pf;
}
if (a8758tf !== "51la") {
	a8758of = a8758tf;
}
a8758op = a8758pu;
try {
	lainframe
} catch (e) {
	a8758op = a8758su;
}
a8758src = 'http://web.51.la:82/go.asp?svid=11&id=17278758&tpages=' + a8758ops + '&ttimes=' + a8758ot + '&tzone=' + (0 - a8758d.getTimezoneOffset() / 60) + '&tcolor=' + a8758color + '&sSize=' + screen.width + ',' + screen.height + '&referrer=' + escape(a8758of) + '&vpage=' + escape(a8758op) + '&vvtime=' + a8758d.getTime();
setTimeout('a8758img = new Image;a8758img.src=a8758src;', 0);