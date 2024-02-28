// Webpage Title
var title = "2024 Series"

// Some intro text underneath the main title
var intro = "The 2024 GB Rollerski Series takes place across the UK incorporating events from London to the Scottish Highlands! Racers can score points by competing at events organised by local clubs and stake their claim to the Series Title!"

// Championship race details
var championshipRaceHeader = "(TBC) Clashindarroch Hill Climb "
var championshipRaceBlurb = "Classic technique time trial format hill race following the A941 from Rhynie to the entrance to Clashindarroch Forest, one of the few regularly pisted Nordic Ski  ares in the UK. Climbing over 200m, the route winds and undulates through scenic Aberdeenshire countryside. "

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
		"raceNotes": "<ul><li> Starts at 11:00.</li><li> Marwe 610s/US0 wheels or no faster (6/3 km junior/novice races). </li></ul>"
	},

	{
		"raceID": "race2",
		"raceVenue": "Huntly",
		"raceOrganiser": "HNSC", 
		"raceName": "Huntly Sprints – FT",
		"raceDate": "Sat 25 May",
		"raceNotes": "<ul><li>GB Series race will be combined time of two time-trials.</li><li> K.O. sprints in the afternoon.</li><li> Races start 10:00. Organiser will supply Marwe roller skis.</li></ul>"
	},
		
	{
		"raceID": "champs",
		"raceVenue": "Rhynie A941",
		"raceOrganiser": "HNSC", 
		"raceName": "Clashindarroch Hill Climb – CT",
		"raceDate": "Sun 26 May",
		"raceNotes": "<ul><li>Minimum age 11.</li><li> Any type of classic roller, must have ratchet.</li><li> 8.05/4.85 km climbs.</li><li> British Championship (TBC).</li></ul>"
	},
	{
		"raceID": "race4",
		"raceVenue": "Hayes",
		"raceOrganiser": "LNRSC", 
		"raceName": "12 km mass start – CT",
		"raceDate": "Sun 23 June",
		"raceNotes": "<ul><li>Starts at 11:00.</li><li> Swenor Alutech/No. 2 rubber wheels and ratchet, or no faster.</li><li> (6/3 km junior/novice race).</li></ul>"
	},
	{
		"raceID": "race5",
		"raceVenue": "Hayes",
		"raceOrganiser": "LNRSC", 
		"raceName": "24 km (16 lap) mass start – FT",
		"raceDate": "Sun 21 July",	
		"raceNotes": "<ul><li>Starts at 11:00.</li><li> Marwe 610s/US0 wheels or no faster.</li><li> (12/6 km junior/novice races).</li></ul>"
	},
	{
		"raceID": "race6",
		"raceVenue": "Fife Cycle Park",
		"raceOrganiser": "Fife Nordic Ski Club", 
		"raceName": "Fife races, 1.6 / 3.2 / 6.4 / 9.6k mass start – FT",
		"raceDate": "Sat 3 Aug.",
		"raceNotes": "<ul><li> Start time TBC.</li><li> Marwe roller skis provided by organisers.</li></ul>"
	},
	{
		"raceID": "race7",
		"raceVenue": "Huntly",
		"raceOrganiser": "HNSC", 
		"raceName": "Huntly 3.5/5.4/7.1 km – FT",
		"raceDate": "Sat 14 Sept.",
		"raceNotes": "<ul><li> Registration from 9 a.m, races start at 10:00.</li><li> Relays follow main races.</li><li> Marwe roller skis provided by organisers.</li></ul>"
	},
    ]
}





// DO NOT EDIT BELOW HERE!!! jQuery to do formatting...

// Add Title and intro text div
$('#header').append('<h1 style = "color:rgb(0,56,101)" class="w3-jumbo"><b>'+title+'</b></h1>')

// Add intro text
$('#header').append('<p>'+intro+'</p>')

// Add a simple link to the rules
$('#header').append('<p><a href="./rules.md" >Click here reveiw the Series rules. </a></p>')

// Add Championship race details
$('#championshipRace').append('<h1 style = "color:rgb(0,56,101)"><a href="#champs" style="text-decoration:none">'+championshipRaceHeader+'</a></h1>')
$('#championshipRace').append('<p>'+championshipRaceBlurb+'</p>')


// Read the race data
$.each(raceData.races,function(i,race){
        
    // Create a div and add a space
        $('#raceList').append('<div id ="'+race.raceID+'"></div>');
	$('#'+race.raceID).append('<br>');
    // Put the date in
        $('#'+race.raceID).append('<h3>'+race.raceDate+'</h3>');
    // give it a title based on the race name
        $('#'+race.raceID).append('<h1>'+race.raceName+'</h1>');
    // add the organising club and location
	$('#'+race.raceID).append('<h3>'+race.raceVenue+' - '+race.raceOrganiser+'</h3>');
    // add notes and another space
	$('#'+race.raceID).append('<p>'+race.raceNotes+'</p>');
	$('#'+race.raceID).append('<br>');
    
    // Put an entry in the menu
	$('#racesMenu').append('<dd><a style="color: white;"href="#'+race.raceID+'" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">'+race.raceName+'</a></dd>');  
   });
