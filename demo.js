$(function(){
	$.getJSON("/assets/races.json",function(data){
	$('#raceList').append('<h1>'+data.races+'/h1>');
	//$('#raceList').append('<h1>'+race.raceName+'</h1>');
	//$('#raceList').append('<p>'+race.raceDetails+'</p>');
         //   console.log('success');
          //  $.each(data.races.race,function(i,race){
        //	$('#raceList').append('<h1>'+race.raceName+'</h1>');
	//	$('#raceList').append('<p>'+race.raceDetails+'</p>');
        //	});
	//});
});
