// Webpage Title
var title = "GB Rollerski Series 2024"

// Some intro text underneath the main title
var intro = "The 2024 GB Rollerski Series takes place across the UK incorporating events from London to the Scottish Highlands! Racers can score points by competing at events organised by local clubs and stake their claim to the Series Title!"

// Championship race details
var championshipRaceHeader = "Clashindarroch Hill Climb "
var championshipRaceBlurb = "Classic technique time trial format hill race following the A941 from Rhynie to the entrance to Clashindarroch Forest, one of the few regularly pisted Nordic Ski  ares in the UK. Climbing over 200m, the route winds and undulates through scenic Aberdeenshire countryside. "
var champsDate = "Sun 26 May"

// Rules details
var rulesText = "Whilst each local race will have their own race rules in place, organisers have agreed to adhere to the general rules laid out in the GB Series rules. These rules cover categories, the make-up of the GB series, scoring and awarding the title of British champion."
var rulePoints = [
    '<a href="./rules" >Click here to reveiw the full Series rules for 2024.</a>',
    "Racers accumulate points from their best 5 races in the Series",
    "At least one race of the 5 must be 'cross-border' (i.e 4 in Scotland plus 1 in England)",
    "The Serties is open to competitors of all nationalities, however the evenutal Series Champion must be British",
]

// Information about all the races in the Series (keep the format!)
var raceData = {
    "raceYear": 2024,
    "races": [
	{
		"raceID": "race1",
		"raceVenue": "Hayes",
		"raceOrganiser": "LRNSC", 
		"raceName": "Hayes 12 km time trial – FT",
		"raceDate": "Sun 14 April",
		"raceNotes": "<ul><li> Starts at 11:00.</li><li> Marwe 610s/US0 wheels or no faster (6/3 km junior/novice races). </li></ul>"
	},

	{
		"raceID": "race2",
		"raceVenue": "Huntly",
		"raceOrganiser": "Huntly Nordic Ski Club", 
		"raceName": "Huntly Sprints – FT",
		"raceDate": "Sat 25 May",
		"raceNotes": "<p>The 600m purpose built track in Huntly, Aberdeenshire is the venue of races 1: The Huntly Sprints and 4: Huntly Championships of the Snowsport Scotland Roller Ski Series.</p><ul><li>Races start from 10am.</li><li>GB Series race will be combined time of two time-trials.</li><li> K.O. sprints in the afternoon.</li><li>Matched Marwe 610 rollerskis will be issued to skiers before the start of each race. Marwe barrel-wheeled rollerskis will be available for those who prefer to use them. Skiers should use their own rollerskis for practice & warm up.</li></ul>"
	},
		
	{
		"raceID": "champs",
		"raceVenue": "Rhynie A941",
		"raceOrganiser": "Huntly Nordic Ski Club", 
		"raceName": "Clashindarroch Hill Climb – CT",
		"raceDate": "Sun 26 May",
		"raceNotes": "<p>The second race of the Scottish series, the Clash Road Climb is along the A941 from Rhynie to the car park of the Clashandarroch Forest.</p><ul><li>Minimum age 11.</li><li> Time trial race format on Classic rollerskis.</li><li>Distances: 4 km and 7.75 km. Elevation Gain: 95 m, 178 m.</li><li>Gradually climbing road with some shorter steep sections. Some downhill with gradual bends and good visibility.</li><li> British Championship Race.</li></ul>"
	},
	{
		"raceID": "race4",
		"raceVenue": "Hayes",
		"raceOrganiser": "LNRSC", 
		"raceName": "Hayes 12 km mass start – CT",
		"raceDate": "Sun 23 June",
		"raceNotes": "<ul><li>Starts at 11:00.</li><li> Swenor Alutech/No. 2 rubber wheels and ratchet, or no faster.</li><li> (6/3 km junior/novice race).</li></ul>"
	},
	{
		"raceID": "race5",
		"raceVenue": "Hayes",
		"raceOrganiser": "LNRSC", 
		"raceName": "Hayes 24 km mass start – FT",
		"raceDate": "Sun 21 July",	
		"raceNotes": "<ul><li>Starts at 11:00.</li><li> 16 laps.</li><li> Marwe 610s/US0 wheels or no faster.</li><li> (12/6 km junior/novice races).</li></ul>"
	},
	{
		"raceID": "race6",
		"raceVenue": "Fife Cycle Park",
		"raceOrganiser": "Fife Nordic Ski Club", 
		"raceName": "Fife Races – FT",
		"raceDate": "Sat 3 Aug.",
		"raceNotes": "<p>Located between Lochgelly and Loch Ore, Fife, this purpose built cycle park has a traffic free 1.6 km track. The third race of the Scottish series, held at the Fife Cycle Park, is a relatively new addition.</p><ul><li> 1km Novice; 3.2 km U14/U12; 6.4km Open + U16F; 9.6km Senior + U16M</li><li>Terrain: undulating with some well banked downhill corners.</li><li> Mass start format, Marwe roller skis provided by organisers.</li></ul>"
	},
	{
		"raceID": "race7",
		"raceVenue": "Huntly",
		"raceOrganiser": "Huntly Nordic Ski Club", 
		"raceName": "Huntly Championships – FT",
		"raceDate": "Sat 14 Sept.",
		"raceNotes": "<p>The 600m purpose built track in Huntly, Aberdeenshire is the venue of Races 1 and 4 of the Scottish Series.</p><ul><li> Registration from 9 a.m, races start at 10:00.</li><li> Distances: Sen + vets 7.1km, U18 + U16 5.1 km, U14 +U12 3.7km, Novice 1.2km, Open 2km.</li><li> Relays follow main races.</li><li> Time trial format, Matched Marwe 610 rollerskis will be issued to skiers before the start of each race. Marwe barrel-wheeled rollerskis will be available for those who prefer to use them. Skiers should use their own rollerskis for practice & warm up.</li></ul>"
	},
	{
		"raceID": "race8",
		"raceVenue": "Cairngorm Ski Road",
		"raceOrganiser": "Cairngorm Biathlon and Nordic Ski Club", 
		"raceName": "Cairngorm Hill Climb – FT",
		"raceDate": "Sun 15 Sept.",
		"raceNotes": "<p>The iconic ski road for accessing the Cairngorms has a long tradition of challenging athletes on bikes as well as roller skis and is a traditional training location for Scottish cross-country skiers and biathletes.</p><p>The Novice category is open to newer skiers, HOWEVER as the race is held on an open road, skiers must be able to fully control their direction and stay to the left side of the road. If in doubt speak to your club coach or the race organiser before entering.</p><ul><li> Volunteers are always needed to make this race a success, please contact CBNSC.chair@gmail.com if you can help out! </li><li> Sign up <a href = 'https://https://www.eventbrite.co.uk/e/cairngorm-hill-climb-2024-tickets-1004713895307'>here</a> </li><li> Distances: Novice 1.3km, U12 and U14 2.25km, U16 & U18 3.1km, and Super Vet, Vet and Senior 5.4km.</li><li>Elevation Gain: 50 m, 150 m, 205 m, 295 m by respective race distance above.</li><li>Time trial format.</li></ul>"
	},
	{
		"raceID": "race9",
		"raceVenue": "Redbridge",
		"raceOrganiser": "Hyde Park", 
		"raceName": "Redbridge Races - TBC",
		"raceDate": "Sun 29 Sept.",
		"raceNotes": "<ul><li> Details TBC.</li></ul>"
	},
	{
		"raceID": "race10",
		"raceVenue": "Hayes",
		"raceOrganiser": "LRNSC", 
		"raceName": "Hayes 24 km time trial – CT",
		"raceDate": "Sun 29 Sept.",
		"raceNotes": "<ul><li> Starts at 11:00.</li><li> 16 laps.</li><li> Swenor Alutech/No. 2 rubber wheels and ratchet, or no faster.</li><li> (12/6 km junior/novice race).</li></ul>"
	},
    ]
}




// DO NOT EDIT BELOW HERE!!! jQuery to do formatting...

// Add Title
$('#header').append('<h1 style = "margin-top:200px; color:white" class="w3-jumbo"><b>'+title+'</b></h1>')

// Add intro text
$('#introText').append('<p>'+intro+'</p>')

// Add a summary of the rules
$('#rulesSummary').append('<p>'+rulesText+'</p>')

// List some important points
$('#rulesSummary').append('<ul id="rulesBulletPoints"></ul>')
$.each(rulePoints,function(i, val){
	$('#rulesBulletPoints').append('<li>'+val+'</li>');
});

// Add Championship race details
$('#championshipRace').append('<h1 style = "color:rgb(203,51,59)"><a href="#champs" style="text-decoration:none">'+championshipRaceHeader+'</a></h1>')
$('#champsRaceDate').append('<i class="fa fa-calendar"x", style="font-family: "Lato", sans-serif"> '+champsDate+'</i>')
$('#championshipRace').append('<p>'+championshipRaceBlurb+'</p>')


// Read the race data
$.each(raceData.races,function(i,race){
        
    // Create a div
        $('#raceList').append('<div id ="'+race.raceID+'"></div>');
    // Put the date in (red with calendar icon)
        $('#'+race.raceID).append('<h3 style="color:rgb(203,51,59)"><i class="fa fa-calendar"x"> '+race.raceDate+'</i></h3>');
    // give it a title based on the race name
        $('#'+race.raceID).append('<h1>'+race.raceName+'</h1>');
    // add the organising club and location
	$('#'+race.raceID).append('<h3>'+race.raceVenue+' - '+race.raceOrganiser+'</h3>');
    // add notes and another space
	$('#'+race.raceID).append('<p>'+race.raceNotes+'</p>');
	$('#'+race.raceID).append('<br>');
    
    // Put an entry in the menu
	$('#racesMenu').append('<a href="#'+race.raceID+'" onclick="w3_close()" class=" w3-bar-item w3-button">'+race.raceName+'</a>');  
   });
