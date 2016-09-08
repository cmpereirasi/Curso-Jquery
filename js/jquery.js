$(document).ready(function(){
	$("h1").click(function(c){
		$("h1").html("<h2>Hello</h2>")
	}),
	$("button").click(function(c){
		$(this).css("color","yellow")
	});

	var c=$("#bird").html();
	$("button").click(function(n){
		$("#bird").html(" h is me")
	}),
	$("button").click(function(c){
		$(".container").css({transition:"3s",background:"purple"})
	})
 		//adicionando novos valores com attrs
	$("img").click(function(event) {
		$("img").attr("src", "img/img 9.png");
		$("img").toggleClass("img-id");
	});

	alert($("img-mobil").html());
});