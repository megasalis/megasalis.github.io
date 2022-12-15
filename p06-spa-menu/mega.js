
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".menua").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var menuaID = el.id.split('_')[1];
		$('.menua#' + menuaID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.menua:visible').fadeOut('medium', function() {
		$('.menua#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});