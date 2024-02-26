$().ready(function(){
    $.getJSON( "/assets/races.json", function( raceData ) {
          
   var doc = document.getElementById("raceList");
   
    //remove the placeholder text
	doc.innerHTML = "";
    
    //append the race details
   for (var race of raceData.races) 
       {
         //create an entry for each race
         const el = document.createElement("div");
         el.setAttribute('id', race.raceID);
         const h1 = document.createElement("H1");
         h1.textContent = race.raceName;
         const p = document.createElement("P");
         p.textContent = race.raceDetails;
         el.appendChild(h1);
         el.appendChild(p);
         doc.appendChild(el);
       }
  });
});
