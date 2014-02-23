(function($) {
    "use strict";

	var shows = [
		{
			"title":"24",
			"status":"watched"
		},
		{
			"title":"30 Rock",
			"status":"watched"
		},
		{
			"title":"666 Park Avenue",
			"status":"watched"
		},
		{
			"title":"90210",
			"status":"watched"
		},
		{
			"title":"Adventure Time",
			"status":"watching"
		},
		{
			"title":"Alcatraz",
			"status":"watched"
		},
		{
			"title":"Almost Human",
			"status":"not-watched"
		},
		{
			"title":"Alphas",
			"status":"not-watched"
		},
		{
			"title":"American Dad!",
			"status":"stopped-watching"
		},
		{
			"title":"American Horror Story",
			"status":"watched"
		},
		{
			"title":"Anger Management",
			"status":"watching"
		},
		{
			"title":"Angry Boys",
			"status":"watched"
		},
		{
			"title":"Archer",
			"status":"watching"
		},
		{
			"title":"Arrested Development",
			"status":"watched"
		},
		{
			"title":"Bad Girls Club",
			"status":"watched"
		},
		{
			"title":"Battlestar Galactica",
			"status":"not-watched"
		},
		{
			"title":"Best Ink",
			"status":"watching"
		},
		{
			"title":"Betas",
			"status":"watching"
		},
		{
			"title":"Better off Ted",
			"status":"watched"
		},
		{
			"title":"Big Brother",
			"status":"watched"
		},
		{
			"title":"Black Mirror",
			"status":"not-watched"
		},
		{
			"title":"Boardwalk Empire",
			"status":"watching"
		},
		{
			"title":"Bob's Burgers",
			"status":"watching"
		},
		{
			"title":"Bones",
			"status":"stopped-watching"
		},
		{
			"title":"Bored to Death",
			"status":"watched"
		},
		{
			"title":"Boston Legal",
			"status":"watched"
		},
		{
			"title":"Breaking Bad",
			"status":"watched"
		},
		{
			"title":"Breakout Kings",
			"status":"not-watched"
		},
		{
			"title":"Brotherhood",
			"status":"watched"
		},
		{
			"title":"Burn Notice",
			"status":"watched"
		},
		{
			"title":"Californication",
			"status":"watched"
		},
		{
			"title": "Chuck",
			"status": "not-watched",
		},
		{
			"title": "Cleveland Show",
			"status": "stopped-watching",
		},
		{
			"title":"Community",
			"status":"watched"
		},
		{
			"title":"Covert Affairs",
			"status":"watching"
		},
		{
			"title":"Criminal Minds",
			"status":"watching"
		},
		{
			"title":"Curb Your Enthusiasm",
			"status":"not-watched"
		},
		{
			"title":"Damages",
			"status":"not-watched"
		},
		{
			"title":"Deadwood",
			"status":"not-watched"
		},
		{
			"title":"Desperate Housewives",
			"status":"watched"
		},
		{
			"title":"Dexter",
			"status":"watched"
		},
		{
			"title": "Doctor Who",
			"status":"not-watched"
		},
		{
			"title": "Dollhouse",
			"status":"watched"
		},
		{
			"title": "Don't Trust the B---- in Apartment 23",
			"status":"stopped-watching"
		},
		{
			"title":"Downton Abbey",
			"status":"not-watched"
		},
		{
			"title":"Eastbound & Down",
			"status":"watched"
		},
		{
			"title":"Elementary",
			"status":"watching"
		},
		{
			"title":"Entourage",
			"status":"watched"
		},
		{
			"title":"Episodes",
			"status":"watching"
		},
		{
			"title":"Extras",
			"status":"not-watched"
		},
		{
			"title":"Family Guy",
			"status":"watching"
		},
		{
			"title":"Friends",
			"status":"watched"
		},
		{
			"title":"Fringe",
			"status":"not-watched"
		},
		{
			"title":"Flight of the Conchords",
			"status":"watched"
		},
		{
			"title":"Futurama",
			"status":"watched"
		},
		{
			"title":"Game of Thrones",
			"status":"watched"
		},
		{
			"title":"Girls",
			"status":"watched"
		},
		{
			"title":"Gossip Girl",
			"status":"watched"
		},
		{
			"title":"Happy Endings",
			"status":"watched"
		},
		{	
			"title":"Heroes",
			"status":"watched"
		},
		{
			"title":"Homeland",
			"status":"watching"
		},
		{
			"title":"Hostages",
			"status":"watching"
		},
		{
			"title":"House of Cards",
			"status":"watching"
		},
		{
			"title":"House of Lies",
			"status":"watching"
		},
		{
			"title":"How I Met Your Mother",
			"status":"watched"
		},
		{
			"title":"How to Make it In America",
			"status":"watched"
		},
		{
			"title":"Hung",
			"status":"watched"
		},
		{
			"title":"Ink Master",
			"status":"watched"
		},
		{
			"title":"It's Always Sunny In Philadelphia",
			"status":"watched"
		},
		{
			"title":"Ja'mie: Private School Girl",
			"status":"watching"
		},
		{
			"title":"Jersey Shore",
			"status":"watched"
		},
		{
			"title":"Kenny vs. Spenny",
			"status":"watched"
		},
		{
			"title":"King of Queens",
			"status":"watched"
		},
		{
			"title":"LA Ink",
			"status":"watched"
		},
		{
			"title":"Legit",
			"status":"watched"
		},
		{
			"title":"Lie to Me",
			"status":"watched"
		},
		{
			"title":"Life",
			"status":"not-watched"
		},
		{
			"title":"Lost",
			"status":"watched"
		},
		{	
			"title":"Louie",
			"status":"not-watched"
		},
		{
			"title":"Lucky Louie",
			"status":"watched"
		},
		{
			"title":"Mad Men",
			"status":"watched"
		},
		{
			"title":"Modern Family",
			"status":"watched"
		},
		{
			"title":"Mom",
			"status":"stopped-watching",
		},
		{
			"title":"Napoleon Dynamite",
			"status":"stopped-watching",
		},
		{
			"title":"New Girl",
			"status":"stopped-watching",
		},
		{
			"title": "Numb3rs",
			"status":"watched"
		},
		{
			"title":"Nurse Jackie",
			"status":"watched"
		},
		{	
			"title":"One Tree Hill",
			"status":"stopped-watching"
		},
		{
			"title":"Orange Is The New Black",
			"status":"watched"
		},
		{
			"title":"Oz",
			"status":"stopped-watching",
		},
		{
  			"title": "Prison Break",
  			"status":"stopped-watching",
  		},
		{
			"title":"Parenthood",
			"status":"stopped-watching",
		},
		{
			"title":"Parks And Recreation",
			"status":"watched"
		},
		{
			"title":"Partners",
			"status":"watched"
		},
		{
			"title":"Party Down",
			"status":"watched"
		},
		{
			"title":"Person of Interest",
			"status":"watched"
		},
		{
			"title":"Portlandia",
			"status":"not-watched"
		},
		{
			"title":"Prime Suspect",
			"status":"stopped-watching",
		},
		{
			"title":"Project Runway",
			"status":"watched"
		},
		{
			"title":"Revenge",
			"status":"watching"
		},
		{
			"title":"Ringer",
			"status":"watched"
		},
		{
			"title":"Rules of Engagement",
			"status":"watched"
		},
		{
			"title":"Samantha Who?",
			"status":"watched"
		},
		{
			"title":"Scandal",
			"status":"watched"
		},
		{
			"title":"Secret Diary of a Call Girl",
			"status":"watched"
		},
		{
			"title":"Seinfeld",
			"status":"watched"
		},
		{
			"title":"Shameless",
			"status":"watching"
		},
		{
			"title":"Shark Tank",
			"status":"watched"
		},
		{
			"title":"Six Feet Under",
			"status":"not-watched"
		},
		{
			"title":"Sons of Anarchy",
			"status":"watched"
		},
		{
			"title":"South Park",
			"status":"watched"
		},
		{
			"title":"Suburgatory",
			"status":"watched"
		},
		{
			"title":"Suits",
			"status":"watched"
		},
		{
			"title":"Summer Heights High",
			"status":"watched"
		},
		{
			"title":"Tattoo Nightmares",
			"status":"watched"
		},
		{
			"title": "That '70s Show",
			"status":"watched"
		},
		{
			"title":"The Awesomes",
			"status":"not-watched"
		},
		{
			"title":"The Bad Girl's Club",
			"status":"watched"
		},
		{
			"title":"The Big Bang Theory",
			"status":"watching"
		},
		{
			"title":"The Big C",
			"status":"not-watched"
		}, 
		{
			"title":"The Blacklist",
			"status":"watching"
		},
		{
			"title":"The Crazy Ones",
			"status":"watching"
		},
		{
			"title":"The Following",
			"status":"watching"
		},
		{
			"title":"The Good Wife",
			"status":"watched"
		},
		{
			"title":"The IT Crowd",
			"status":"watched"
		},
		{
			"title":"The League",
			"status":"watched"
		}, 
		{
			"title":"The L Word",
			"status":"watched"
		},
		{
			"title":"The Mentalist",
			"status":"watching"
		},
		{
			"title":"The Mindy Project",
			"status":"watching"
		},
		{
			"title": "The Newsroom",
			"status":"not-watched"
		},
		{
			"title":"The Office",
			"status":"watched"
		},
		{
			"title":"The Playboy Club",
			"status":"watched"
		},
		{
			"title":"The Real Housewives of Vancouver",
			"status":"watched"
		},
		{
			"title":"The Sopranos",
			"status":"watched"
		},
		{
			"title":"the Tudors",
			"status":"not-watched"
		},
		{
			"title":"The Walking Dead",
			"status":"watching"
		},
		{
			"title":"White Collar",
			"status":"watching"
		},
		{
			"title":"The Wire",
			"status":"watched"
		},
		{
			"title":"Trailer Park Boys",
			"status":"watched"
		},
		{
			"title":"Trophy Wife",
			"status":"watching"
		},
		{
			"title":"True Blood",
			"status":"watched"
		},
		{
			"title":"Two And A Half Men",
			"status":"watching"
		},
		{
			"title":"Ugly Betty",
			"status":"watched"
		},
		{
			"title":"United States of Tara",
			"status":"watched"
		},
		{
			"title":"Up All Night",
			"status":"watched"
		},
		{
			"title":"Veep",
			"status":"not-watched"
		},
		{
			"title":"Vegas",
			"status":"watched"
		},
		{
			"title":"We Are Men",
			"status":"watched"
		},
		{
			"title":"Weeds",
			"status":"watched"
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
	            html += "<li class='show-item "+ genreClass +"' data-status='"+ status +"'>";
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

	$("#status").on("change", function (){
		var value = $(this).val();

		// set genres to all
		$(".genres a").removeClass("current");
		$(".genres a[href='#all']").addClass("current");
		
		if(value != ""){
			$(".shows .show-item").hide();
			$(".shows li.show-item[data-status='"+ value +"']").fadeIn();
		}
		
	});


	$(".genres").on("click", "a", function(){
		var genreClick = $(this).attr("href");
		genreClick = genreClick.replace("#", "");

		$(".genres a").removeClass("current");
		$(this).addClass("current");

		// watch status
		var watchStatus = $("#status").val();

		$(".shows .show-item").hide();
		if(genreClick != "all"){
			if(watchStatus != ""){
				$(".shows li."+ genreClick +"[data-status='"+ watchStatus +"']").fadeIn();
			}else{
				$(".shows li."+ genreClick).fadeIn();
			}
		}
		
		
		return false;
	});
	
}(jQuery));