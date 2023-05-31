function langSet() {
  var str = location.href;
  if (str.match("_en.html")) {
    var result = str.replace("_en.html",".html");
	}else{
    var result = str.replace(".html","_en.html");
	}
  window.location.href = result;
}