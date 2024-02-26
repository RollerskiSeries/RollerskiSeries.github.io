//$(function(){
//	$.getJSON("./assets/races.json", function(json) {
  //  console.log(json); 
//	$('#raceList').append('<h1> Hello World </h1>');
//});
	//$.getJSON("./assets/races.json",function(json){
	//	console.log(json);
		//$('#raceList').append('<h1>'+json.races[0].raceID+'/h1>');
	//$('#raceList').append('<h1>'+race.raceName+'</h1>');
	//$('#raceList').append('<p>'+race.raceDetails+'</p>');
         //   console.log('success');
          //  $.each(data.races.race,function(i,race){
        //	$('#raceList').append('<h1>'+race.raceName+'</h1>');
	//	$('#raceList').append('<p>'+race.raceDetails+'</p>');
        //	});
	//});
	//});
//});

$.getJSON( "./assets/races.json", function( data ) {
  var items = [];
  $.each( data.races, function( val ) {
    items.push( "<li id='" + val + "</li>" );
  });
 
  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "#raceList" );
});
