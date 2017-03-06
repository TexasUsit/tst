$(document).ready(function(){
	var i_image = 0;
	$("#register-form").submit(function(e){
		e.preventDefault();
		$.post("https://script.google.com/macros/s/AKfycbzR0C-CuI1MZOeU0dhAVwgM6hfsx04fsjRRAQTFVxbCNZ0eAhw/exec",
			  	$("#register-form").serialize(), function(data){});
		
	});
	
	setInterval(function(){
		if(i_image == 0){
			$('#location-image').fadeOut(1000, function(){
				$("#location-image").attr('src', 'images/sac-scene2.jpg');
				$('#location-image').fadeIn(1000);
			});
		}
		else{
			$('#location-image').fadeOut(1000, function(){
				$("#location-image").attr('src', 'images/sac-scene1.jpg');
				$('#location-image').fadeIn(1000);
			});
		}
		i_image++;
		if(i_image > 1) {i_image=0;}
	}, 7000);
	
});