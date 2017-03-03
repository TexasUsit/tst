$(document).ready(function(){
	$("#register-form").submit(function(e){
		e.preventDefault();
		$.post("https://script.google.com/macros/s/AKfycbzR0C-CuI1MZOeU0dhAVwgM6hfsx04fsjRRAQTFVxbCNZ0eAhw/exec",
			  	$("#register-form").serialize(), function(data){});
		window.location="http://127.0.0.1:58327/index.html";
	});
});