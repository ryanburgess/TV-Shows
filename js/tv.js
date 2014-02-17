(function($) {
    "use strict";

	var shows = [
		{
			"title":"30 Rock",
			"status":"watched",
		},
		{
			"title":"666 Park Avenue",
			"status":"watched",
		},
		{
			"title":"90210",
			"status":"watched",
		},
		{
			"title":"Adventure Time",
			"status":"watching",
		},
		{
			"title":"Alcatraz",
			"status":"watched",
		},
		{
			"title":"American Horror Story",
			"status":"watched",
		},
		{
			"title":"Anger Management",
			"status":"watching",
		},
		{
			"title":"Angry Boys",
			"status":"watched",
		},
		{
			"title":"Archer",
			"status":"watching",
		},
		{
			"title":"Arrested Development",
			"status":"watched",
		},
		{
			"title":"Bad Girls Club",
			"status":"watched",
		},
		{
			"title":"Best Ink",
			"status":"watching",
		},
		{
			"title":"Better off Ted",
			"status":"watched",
		},
		{
			"title":"Big Brother",
			"status":"watched",
		},
		{
			"title":"Boardwalk Empire",
			"status":"watching",
		},
		{
			"title":"Bob's Burgers",
			"status":"watched",
		},
		{
			"title":"Bored to Death",
			"status":"watched",
		},
		{
			"title":"Breaking Bad",
			"status":"watched",
		},
		{
			"title":"Brotherhood",
			"status":"watched",
		},
		{
			"title":"Burn Notice",
			"status":"watching",
		},
		{
			"title":"Californication",
			"status":"watched",
		},
		{
			"title":"Community",
			"status":"watched",
		},
		{
			"title":"Covert Affairs",
			"status":"watching",
		},
		{
			"title":"Criminal Minds",
			"status":"watching",
		},
		{
			"title":"Desperate Housewives",
			"status":"watched",
		},
		{
			"title":"Dexter",
			"status":"watched",
		},
		{
			"title":"Eastbound & Down",
			"status":"watched",
		},
		{
			"title":"Elementary",
			"status":"watching",
		},
		{
			"title":"Entourage",
			"status":"watched",
		},
		{
			"title":"Episodes",
			"status":"watching",
		},
		{
			"title":"Family Guy",
			"status":"watching",
		},
		{
			"title":"Flight of the Conchords",
			"status":"watched",
		},
		{
			"title":"Futurama",
			"status":"watched",
		},
		{
			"title":"Game of Thrones",
			"status":"watched",
		},
		{
			"title":"Girls",
			"status":"watched",
		},
		{
			"title":"Gossip Girl",
			"status":"watched",
		},
		{
			"title":"Happy Endings",
			"status":"watched",
		},
		{
			"title":"Homeland",
			"status":"watching",
		},
		{
			"title":"Hostages",
			"status":"watching",
		},
		{
			"title":"House of Cards",
			"status":"watching",
		},
		{
			"title":"House of Lies",
			"status":"watching",
		},
		{
			"title":"How I Met Your Mother",
			"status":"watched",
		},
		{
			"title":"How to Make it In America",
			"status":"watched",
		},
		{
			"title":"Hung",
			"status":"watched",
		},
		{
			"title":"Ink Master",
			"status":"watched",
		},
		{
			"title":"It's Always Sunny In Philadelphia",
			"status":"watched",
		},
		{
			"title":"Ja'mie: Private School Girl",
			"status":"watched",
		},
		{
			"title":"Jersey Shore",
			"status":"watched",
		},
		{
			"title":"LA Ink",
			"status":"watched",
		},
		{
			"title":"Legit",
			"status":"watched",
		},
		{
			"title":"Lie to Me",
			"status":"watched",
		},
		{
			"title":"Lost",
			"status":"watched",
		},
		{
			"title":"Mad Men",
			"status":"watched",
		},
		{
			"title":"Modern Family",
			"status":"watched",
		},
		{
			"title":"Mom",
			"status":"watched",
		},
		{
			"title":"Napoleon Dynamite",
			"status":"watched",
		},
		{
			"title":"New Girl",
			"status":"watched",
		},
		{
			"title":"Nurse Jackie",
			"status":"watched",
		},
		{
			"title":"Orange Is The New Black",
			"status":"watched",
		},
		{
			"title":"Parenthood",
			"status":"watched",
		},
		{
			"title":"Parks And Recreation",
			"status":"watched",
		},
		{
			"title":"Partners",
			"status":"watched",
		},
		{
			"title":"Party Down",
			"status":"watched",
		},
		{
			"title":"Person of Interest",
			"status":"watched",
		},
		{
			"title":"Portlandia",
			"status":"watched",
		},
		{
			"title":"Prime Suspect",
			"status":"watched",
		},
		{
			"title":"Project Runway",
			"status":"watched",
		},
		{
			"title":"Revenge",
			"status":"watched",
		},
		{
			"title":"Ringer",
			"status":"watched",
		},
		{
			"title":"Rules of Engagement",
			"status":"watched",
		},
		{
			"title":"Scandal",
			"status":"watched",
		},
		{
			"title":"Seinfeld",
			"status":"watched",
		},
		{
			"title":"Shameless",
			"status":"watching",
		},
		{
			"title":"Shark Tank",
			"status":"watched",
		},
		{
			"title":"Six Feet Under",
			"status":"watched",
		},
		{
			"title":"Sons of Anarchy",
			"status":"watched",
		},
		{
			"title":"South Park",
			"status":"watched",
		},
		{
			"title":"Suburgatory",
			"status":"watched",
		},
		{
			"title":"Suits",
			"status":"watched",
		},
		{
			"title":"Summer Heights High",
			"status":"watched",
		},
		{
			"title":"Tattoo Nightmares",
			"status":"watched",
		},
		{
			"title":"The Awesomes",
			"status":"watched",
		},
		{
			"title":"The Bad Girl's Club",
			"status":"watched",
		},
		{
			"title":"The Big Bang Theory",
			"status":"watched",
		},
		{
			"title":"The Blacklist",
			"status":"watched",
		},
		{
			"title":"The Crazy Ones",
			"status":"watched",
		},
		{
			"title":"The Following",
			"status":"watched",
		},
		{
			"title":"The Good Wife",
			"status":"watched",
		},
		{
			"title":"The IT Crowd",
			"status":"watched",
		},
		{
			"title":"The L Word",
			"status":"watched",
		},
		{
			"title":"The Mentalist",
			"status":"watched",
		},
		{
			"title":"The Mindy Project",
			"status":"watching",
		},
		{
			"title":"The Office",
			"status":"watched",
		},
		{
			"title":"The Playboy Club",
			"status":"watched",
		},
		{
			"title":"The Real Housewives of Vancouver",
			"status":"watched",
		},
		{
			"title":"The Walking Dead",
			"status":"watching",
		},
		{
			"title":"White Collar",
			"status":"watching",
		},
		{
			"title":"The Wire",
			"status":"watched",
		},
		{
			"title":"Trophy Wife",
			"status":"watching",
		},
		{
			"title":"True Blood",
			"status":"watched",
		},
		{
			"title":"Two And A Half Men",
			"status":"watching",
		},
		{
			"title":"Up All Night",
			"status":"watched",
		},
		{
			"title":"Vegas",
			"status":"watched",
		},
		{
			"title":"We Are Men",
			"status":"watched",
		},
		{
			"title":"Weeds",
			"status":"watched",
		},
		{
			"title":"Workaholics",
			"status":"watching"
		}
	];
    
    function tvData(title, status){
	    $.ajax({
	      url: "http://www.imdbapi.com/?t=" + title,
	        dataType: 'json',
	        success: function(data){
	            var year = data.Year;
	            var image = data.Poster;
	            var rating = data.imdbRating;
	            var genre = data.Genre;
	            var description = data.Plot;

	            if(image === "N/A"){
	            	image = "default.jpg";
	            }
	            
	            var genreClass = genre.toLowerCase();
	            genreClass = genreClass.replace(/,/g, "");
	            var html = "";
	            html += "<li class='show-item "+ genreClass +"'>";
	            html += "<img src='"+ image +"' alt='"+ title +" poster'>";
	            html += "<div class='content'>";
	            html += "<h2>"+ title +"</h2>";
	            html += "<ul class='info'>";
	            html += "<li class='date'>("+ year +")</li>";
	            html += "<li class='rating'>Rating: "+ rating +"</li>";
	            html += "<li class='genre'>"+ genre +"</li>";
	            html += "</ul>";
	            html += "<p>"+ description +"</p>"
	            html += "</div>";
	            html += "</li>";

	            $(".shows").append(html);
	        }
	    });
	            
	}

	for (var i = 0; i < shows.length; i++){
	    tvData(shows[i].title, shows[i].status);

	}


	$(".genres").on("click", "a", function(){
		var genreClick = $(this).attr("href");
		genreClick = genreClick.replace("#", "");

		$(".genres a").removeClass("current");
		$(this).addClass("current");

		$(".shows .show-item").hide();
		if(genreClick != "all"){
			$(".shows ."+ genreClick).fadeIn();
		}else{
			$(".shows .show-item").fadeIn();
		}
		
	});
	
}(jQuery));