$(document).ready(function(){

var output = $('#featu=red');

	$.ajax({
		type:'GET',
		url: '__________________',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
                   var featured ='<span>'+item.title+'<span>';

				output.append(featured);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
                  
var output = $('#feature');

        $.ajax({
            type: 'GET',
            url: 'http://www.jmuafterdark.com/featured.php',
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function(data, status){
            $.each(data, function(i,item){
                var featured ='<br>'+item.detail+'</br>';
                                
                output.append(feature);
            });
        },
        error: function(){
            output.text('There was an error loading the data.');
        } 
    });

});
