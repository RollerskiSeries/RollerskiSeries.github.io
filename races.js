var raceData = {
    "raceYear": 2024,
    "races": [
	{
		"raceID": "race1",
		"raceVenue": "Hayes",
		"raceOrganiser": "LRNSC", 
		"raceName": "12 km time trial – FT",
		"raceDate": "Sun 14 April",
		"raceNotes": "Starts at 11:00. Marwe 610s/US0 wheels or no faster (6/3 km junior/novice races)."
	},

	{
		"raceID": "race2",
		"raceVenue": "Huntly",
		"raceOrganiser": "HNSC", 
		"raceName": "Huntly Sprints – FT",
		"raceDate": "Sat 25 May",
		"raceNotes": "GB Series race will be combined time of two time-trials. K.O. sprints in the afternoon. Races start 10:00. Organiser will supply Marwe roller skis."
	},
		
	{
		"raceID": "race3",
		"raceVenue": "Rhynie A941",
		"raceOrganiser": "HNSC", 
		"raceName": "Clashindarroch Hill Climb – CT",
		"raceDate": "Sun 26 May",
		"raceNotes": "Minimum age 11. Any type of classic roller, must have ratchet. 8.05/4.85 km climbs. British Championship (TBC)"
	},
    ]
}

//DO NOT EDIT BELOW HERE!!!
$.each(raceData.races,function(i,race){
        $('#raceList').append('<div id ="'+race.raceID+'"></div>');
	$('#'+race.raceID).append('<br>');
        $('#'+race.raceID).append('<h3>'+race.raceDate+'</h3>');
        $('#'+race.raceID).append('<h1>'+race.raceName+'</h1>');
	$('#'+race.raceID).append('<h3>'+race.raceVenue+' - '+race.raceOrganiser+'</h3>');
	$('#'+race.raceID).append('<p>'+race.raceNotes+'</p>');
	$('#'+race.raceID).append('<br>');
	$('#racesMenu').append('<dd><a style="color: white;"href="#'+race.raceID+'" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">'+race.raceName+'</a></dd>');  
   });
