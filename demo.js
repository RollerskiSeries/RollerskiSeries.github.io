$().ready(function(){
    $.getJSON( "/assets/races.json", function( raceData ) {
	    
    //append the race details
   var racesElement = document.createElement("div");
   $for (var race of raceData.races) 
	{
	 //create an entry for each race
	 var el = document.createElement("div");
	 el.setAttribute('id', race.raceID);
	 var h1 = document.createElement("H1");
	 h1.textContent = race.raceName;
	 var p = document.createElement("P");
	 p.textContent = race.raceDetails;
	 el.appendChild(h1);
	 el.appendChild(p);
	 racesElement.appendChild(el);
	}
        //update the html
        $("#raceList").append(racesElement);
  });
});
