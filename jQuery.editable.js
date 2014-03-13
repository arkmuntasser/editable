/*
* Name: Editable
* Author: Amir R Muntasser
* Description: A little tool to enable live editing on a static webpage.
* Dependencies: jQuery 1.4.2+
* License: MIT License
*/

$("#editable-edit").click(function() {
  $(".control:first").hide();
  $(".control:last").show();
  $(".editable").attr("contenteditable", "true");
  $(".editable").each(function() {
	var html = $(this).html();
	$(this).data("previous", html);
  });
});

$("#editable-cancel").click(function() {
  $(".control:first").show();
  $(".control:last").hide();
  $(".editable").removeAttr("contenteditable");
  $(".editable").each(function() {
	var html = $(this).data("previous");
	$(this).html(html);
  });
});

$("#editable-save").click(function() {
  var array = [];
  var i = 0;
  $(".editable").each(function() {
	  array[i] = $(this).html();
	  i++;
  });
  
  $.post("save.php", {data: array}, function(response) {
	$(".control:first").show();
	$(".control:last").hide();
	$(".editable").removeAttr("contenteditable");
  });
});