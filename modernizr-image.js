;(function ( $, window, document, undefined ) {
	var img = $('<img>');
	img.error(function() {
		$('html').removeClass('image').addClass('no-image');
		(Modernizr) && (Modernizr.image = false);
	});
	img.attr('src', 'image-test.gif');

	$('html').addClass('image');
	(Modernizr) && (Modernizr.image = true);

})(jQuery, window, document );
