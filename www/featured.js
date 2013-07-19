$(document).ready(function(){

var output = $('#featured');

	$.ajax({
		type: 'GET',
		url: 'http://www.jmuafterdark.com/featured.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
                   var featured ='<strong>'+item.title+'</strong><br>'
                       +  item.detail+'<br>';

				output.append(featured);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});                

});