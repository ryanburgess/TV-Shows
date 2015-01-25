(function($) {
    "use strict";

	var shows;

	$.ajax({
    type: 'POST',
    url: '../data/shows.json',
    dataType: 'json',
    cache: false,
    success: function(result) {
    	shows = result;
    	for (var i = 0; i < shows.length; i++){
		   	tvData(shows[i].title, shows[i].status);
			}
    }
  });
    
  function tvData(title, status){
    $.ajax({
    	url: 'http://www.imdbapi.com/?t=' + title,
        dataType: 'json',
        success: function(data){
          var year        = data.Year,
            image         = data.Poster,
            rating        = data.imdbRating,
            genre         = data.Genre,
            description   = data.Plot;

          if(image === 'N/A'){
          	image = 'default.jpg';
          }
          
          var genreClass = genre.toLowerCase();
          genreClass = genreClass.replace(/,/g, '');
          var html = '';
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

          $('.shows').append(html);
        }
    });          
	}

	$('#status').on('change', function (){
		var value = $(this).val();

		// set genres to all
		$('.genres a').removeClass('current');
		$('.genres a[href="#all"]').addClass('current');
		
		if(value != ''){
			$('.shows .show-item').hide();
			$('.shows li.show-item[data-status="'+ value +'"]').fadeIn();
		}
		
	});


	$('.genres').on('click', 'a', function(){
		var genreClick = $(this).attr("href");
		genreClick = genreClick.replace("#", "");

		$('.genres a').removeClass('current');
		$(this).addClass("current");

		// watch status
		var watchStatus = $('#status').val();

		$('.shows .show-item').hide();
		if(genreClick != "all"){
			if(watchStatus != ""){
				$('.shows li.'+ genreClick +"[data-status='"+ watchStatus +"']").fadeIn();
			}else{
				$('.shows li.'+ genreClick).fadeIn();
			}
		}
		
		
		return false;
	});
	
}(jQuery));