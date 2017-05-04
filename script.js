$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();  

	$('navbar a[href^="#"], .more').on('click', function(e) {
	    e.preventDefault();
	    const scrollTop = $($(this).attr('href')).position().top + 200;
	    $('html, body').animate({ scrollTop });
	}); 
});
