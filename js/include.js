$(function() {
	var str = location.href;
  if (str.match("_en.html")) {
    var result = "header_en.html";
    $.ajax({
  	url: result, // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $('body').prepend(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert('header error!');
    },
  });
	}else{
    var result = "header.html";
    $.ajax({
  	url: result, // includeしたいファイルのパスを指定
    dataType: 'html', // htmlのまま
    // 読み込み成功時の処理
    success: function (data) {
      $('body').prepend(data);
    },
    // 読み込み失敗時の処理
    error: function () {
      alert('header error!');
    },
  });
	}
  
});