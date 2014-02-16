(function($) {
    "use strict";

    var shows = ["2 Broke Girls",
			"30 Rock",
			"666 Park Avenue",
			"90210",
			"Adventure Time",
			"Alcatraz",
			"American Horror Story",
			"Anger Management",
			"Angry Boys",
			"Archer",
			"Arrested Development",
			"Bad Girls Club",
			"Best Ink",
			"Better off Ted",
			"Big Brother",
			"Boardwalk Empire",
			"Bob's Burgers",
			"Bored to Death",
			"Breaking Bad",
			"Brotherhood",
			"Burn Notice",
			"Californication",
			"Community",
			"Covert Affairs",
			"Criminal Minds",
			"Desperate Housewives",
			"Dexter",
			"Eastbound & Down",
			"Elementary",
			"Entourage",
			"Episodes",
			"Family Guy",
			"Flight of the Conchords",
			"Futurama",
			"Game of Thrones",
			"Girls",
			"Gossip Girl",
			"Happy Endings",
			"Homeland",
			"Hostages",
			"House of Cards",
			"House of Lies",
			"How I Met Your Mother",
			"How to Make it In America",
			"Hung",
			"Ink Master",
			"It's Always Sunny In Philadelphia",
			"Ja'mie: Private School Girl",
			"Jersey Shore",
			"LA Ink",
			"Legit",
			"Lie to Me",
			"Lost",
			"Mad Men",
			"Married With Children",
			"Modern Family",
			"Mom",
			"Napoleon Dynamite",
			"New Girl",
			"Nurse Jackie",
			"Orange Is The New Black",
			"Parenthood",
			"Parks And Recreation",
			"Partners",
			"Party Down",
			"Person of Interest",
			"Portlandia",
			"Prime Suspect",
			"Project Runway",
			"Revenge",
			"Ringer",
			"Rules of Engagement",
			"Scandal",
			"Seinfeld",
			"Shameless",
			"Shark Tank",
			"Six Feet Under",
			"Sons of Anarchy",
			"South Park",
			"Suburgatory",
			"Suits",
			"Summer Heights High",
			"Tattoo Nightmares",
			"The Awesomes",
			"The Bad Girl's Club",
			"The Big Bang Theory",
			"The Blacklist",
			"The Crazy Ones",
			"The Following",
			"The Good Wife",
			"The IT Crowd",
			"The L Word",
			"The Mentalist",
			"The Mindy Project",
			"The Office",
			"The Playboy Club",
			"The Real Housewives of Vancouver",
			"The Walking Dead",
			"The Wire",
			"Transporter",
			"Trophy Wife",
			"True Blood",
			"Two And A Half Men",
			"Up All Night",
			"Vegas",
			"We Are Men",
			"Weeds",
			"Workaholics"];
    
    function tvData(title){
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
	    tvData(shows[i]);
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