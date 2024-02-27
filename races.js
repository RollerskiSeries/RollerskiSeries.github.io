// Webpage Title
var title = "GB Rollserski Series 2024"

// Some intro text underneath the main title
var intro = "Lorem ipsum dolor sit amet"

// Information about all the races in the Series (keep the format!)
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

//Add Title and intro text div
$('#header').append('<h1 style = "color:rgb(0,56,101)" class="w3-jumbo"><b>'+title+'</b></h1>')
$('#header').append('<div class="w3-container" id="introText" style="margin-top:75px"></div>')

//Add intro text
$('#introText').append('<p>'+intro+'</p>')

// Read the race data
$.each(raceData.races,function(i,race){
        
        //Create a div and add a space
        $('#raceList').append('<div id ="'+race.raceID+'"></div>');
	$('#'+race.raceID).append('<br>');
    // Put the date in
        $('#'+race.raceID).append('<h3>'+race.raceDate+'</h3>');
    //give it a title based on the race name
        $('#'+race.raceID).append('<h1>'+race.raceName+'</h1>');
    // add the organising club and location
	$('#'+race.raceID).append('<h3>'+race.raceVenue+' - '+race.raceOrganiser+'</h3>');
    //add notes and another space
	$('#'+race.raceID).append('<p>'+race.raceNotes+'</p>');
	$('#'+race.raceID).append('<br>');
    
    //Put an entry in the menu
	$('#racesMenu').append('<dd><a style="color: white;"href="#'+race.raceID+'" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">'+race.raceName+'</a></dd>');  
   });
