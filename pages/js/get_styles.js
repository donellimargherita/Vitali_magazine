$(document).ready(function(){
 		$(".styles").click(function(){
 			style = this.id;
 			switch(style){
 				case "reset":
					  	$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main.css"]').removeAttr('disabled');
	  					$("#nightview").attr("class", "");
	  					break;
	  			case "soviet":
	  					$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
					  	$('link[href="../Assets/css/soviet.css"]').removeAttr('disabled');
					  	$("#nightview").attr("class", "");
					  	break;
				case "future":
						$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
						$('link[href="../Assets/css/hyperfuture.css"]').removeAttr('disabled');
						$("#nightview").attr("class", "fas fa-moon");
						break;
				case "victorian":
						$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
						$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
						$('link[href="../Assets/css/victorian.css"]').removeAttr('disabled');
						$("#nightview").attr("class", "");
						break;
				case "trashy90":
						$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
						$('link[href="../Assets/css/trashy90s.css"]').removeAttr('disabled');
						$("#nightview").attr("class", "");
						break;
				case "beasty_medieval":
						$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
						$('link[href="../Assets/css/beasty_medieval.css"]').removeAttr('disabled');
						$("#nightview").attr("class", "");
						break;
				case "groovy70s":
						$('link[rel="stylesheet alternative"]').attr('disabled', 'true');
	  					$('link[href="../Assets/css/main.css"]').attr('disabled', 'true');
					  	$('link[href="../Assets/css/main_cambiato.css"]').removeAttr('disabled');
						$('link[href="../Assets/css/groovy70s.css"]').removeAttr('disabled');
						$("#nightview").attr("class", "");
						break;
				default: 
						console.log("ti prego non comparire");
 					}
		}); 
});