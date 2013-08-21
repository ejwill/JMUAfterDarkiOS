//$(document).on(function(){
	//$(document).bind('deviceready', function(){
		//Phonegap ready
		//onDeviceReady();
$(document).ready(function(){
	

	//function getSoberDrivers() {
	
	var output = $('#output');
//ajax request to pull string from php page
	$.ajax({
		type: 'GET',
		url: '__________________',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		success: function(data, status){
			$.each(data, function(i,item){ 
				var soberdriver = '<div data-role="collapsible"><h3>'+item.name+'</h3>'
				+ '<p>'+item.phonenumber+'<br>'
				+ item.day+'<br>'
				+ item.time+'<br>'
				+ item.price+'</p></div>';

				output.append(soberdriver);
			});
		},
		error: function(){
		   output.text('There was an error loading the data.');
		}
	});
	
	/*$('form').submit(function(){
		var postData = $(this).serialize();
		
		$.ajax({
			type: 'POST',
			data: postData,
			url: 'http://jmuafterdark.com/add-driver.php',
			success: function(data){
				console.log(data);
				alert('Your diver was successfully added');
			},
			error: function(){
				console.log(data);
				alert('There was an error adding your driver');
			}
		});
		
		return false;
	});*/

	
	$('#add-driver form').submit(function(){
		var loading = $(this).find('input[type="submit"]');
		loading.addClass('loading');

		var postData = $(this).serialize();

		$.ajax({
			type: 'POST',
			data: postData,
			url: '______________________________',
			success: function(data){
				loadSoberDrivers();
				
				$('#output').addClass('current');
				$('#add-driver').removeClass('current');
				
				loading.removeClass('loading');
				console.log('Driver added!');
			},
			error: function(){
				loading.removeClass('loading');
				console.log('There was an error');
			}
		});

		return false;
	});

});
//}
//});
//});
