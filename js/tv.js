(function($) {
    "use strict";
    
    function tvData(title){
	    $.ajax({
	      url: "http://www.imdbapi.com/?t=" + $(title).text(),
	        dataType: 'json',
	        success: function(data){
	            var year = data.Year;
	            var image = data.Poster;
	            var show = $(title).text();
	            var rating = data.imdbRating;
	            var genre = data.Genre;
	            var description = data.Plot;

	            if(image === "N/A"){
	            	image = "default.jpg";
	            }
	            
	            var html = "<img src='"+ image +"' alt='"+ show +" poster'>";
	            html += "<div class='content'>";
	            html += "<h2>"+ show +"</h2>";
	            html += "<ul class='info'>";
	            html += "<li class='date'>("+ year +")</li>";
	            html += "<li class='rating'>Rating: "+ rating +"</li>";
	            html += "<li class='genre'>"+ genre +"</li>";
	            html += "</ul>";
	            html += "<p>"+ description +"</p>"
	            html += "</div>";
	            $(title).html(html);

	            $(title).addClass("show-item");

	            var genreClass = genre.toLowerCase();
	            genreClass = genreClass.replace(/,/g, "");
	            $(title).addClass(genreClass);
	        }
	    });
	            
	}

	$(".shows li").each(function() {
	      tvData(this);
	});


	$(".genres a").on("click", function(){
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