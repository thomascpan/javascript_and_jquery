$( document ).ready(function() {
	$('#doc-content').append('<header><div class="container"><div class="logo"><a href="#"><img src="assets/images/paw.png" class="logo-img"><div class="logo-text">Pusheen Caf&eacute;</div><br class="clear"></a></div><nav><ul><li><a href="#" id="about-link">About</a></li><li>&middot;</li><li><a href="#" id="menu-link">Menu</a></li><li>&middot;</li><li><a href="#" id="contact-link">Contact</a></li><br class="clear"></ul></nav></div></header>');
	$('#doc-content').append('<div class="container"></div>');

	var myDefault = '<div id="default"><h1>Welcome!</h1></div>';
	var myContent = '<div id="content"></div>';

	var myAbout = '<div id="about"><div class="col-md-8"><h1>Pusheen\'s Story</h1><div class="about-text"><p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>S</strong>ince only a kitten, Pusheen The Cat has always had a fond love for delicious food. For much of his kitten years, he was happy just munching and nibbling away on tasty morsels all day long. But Pusheen\'s passion for food would grow, and he would find himself hungry for more! In 2010, Pusheen would make one of the greatest leap in feline history. He would try his paw at making his own food. It was slow work at first. Pusheen had no idea what he was doing and would oftentimes lose focus while cooking. But after much hard work, Pusheen is now the finest feline chef in all the world. Come and taste the delicious delicacies at Pusheen Caf&eacute;!</p></div></div><div class="col-md-4"><div class="about-img"></div></div><br class="clear"></div>';
	var myMenu = '<div id="menu"><h1>Menu</h1><div class="col-md-4"><h2>Appitizers</h2><ul><li>Meow Meow Bread<span>8</span></li><li>Fried Cat-amari<span>8</span></li><li>Furry Delicious Sampler<span>13</span></li></ul></div><div class="col-md-4"><h2>Entr&eacute;e</h2><ul><li>Cat-ch of the Day<span>Market Price</span></li><li>Roasted Birdy<span>24</span></li><li>Paw-strami Sandwich<span>16</span></li><li>Ball O\' Yarn Pasta<span>18</span></li><li>Catnip Pie<span>16</span></li><li>Cat-fish Stew<span>19</span></li></ul></div><div class="col-md-4"><div class="top"><h2>Dessert</h2><ul><li>Purr-fect Pudding<span>8</span></li><li>Paw-some Cake<span>10</span></li></ul></div><div class="bottom"><h2>Drinks</h2><ul><li>Pusheen\'s Milkshake<span>6</span></li><li></li><li>Fountain Drinks<span>3</span></li></ul></div></div><br class="clear"></div>';
	var myContact = '<div id="contact"><div class="col-md-5"><h1>Find Us</h1><section><h2>Address</h2><p>Pusheen\'s Caf&eacute;</p><p>670 Spectrum Center Drive</p><p>Irvine, CA 92618</p></section><section><h2>Phone Number</h2><p>(714)-000-0000</p></section><section><h2>Email</h2><p><a href="mailto:pusheen@pusheencafe.com">pusheen@pusheencafe.com</a></p></section></div><div class="col-md-7"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.2719275181653!2d-117.7439009!3d33.65011530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dce7f95c60e595%3A0x1d4a6f64052519d6!2sIrvine+Spectrum+Center!5e0!3m2!1sen!2sus!4v1440303937783" width="600" height="300" frameborder="0" style="border:0" allowfullscreen></iframe></div><br class="clear"></div>';

	$('.container:eq(1)').append(myDefault);

	$('.logo').click(function() {
		if ( !$('#default').length) {
			$('.container:eq(1)').append(myDefault);
		}
		if ($('#content').length) {
			$('#content').remove();
		}
	});

	$('#about-link').click(function() {
		if ( $('#default').length) {
			$('#default').remove();
		}
		if (!$('#content').length) {
			$('.container:eq(1)').append(myContent);
		}
		$('#content').empty();
		$('#content').append(myAbout);
	});

	$('#menu-link').click(function() {
		if ( $('#default').length) {
			$('#default').remove();
		}
		if (!$('#content').length) {
			$('.container:eq(1)').append(myMenu);
		}
		$('#content').empty();
		$('#content').append(myMenu);
	});

	$('#contact-link').click(function() {
		if ( $('#default').length) {
			$('#default').remove();
		}
		if (!$('#content').length) {
			$('.container:eq(1)').append(myContact);
		}
		$('#content').empty();
		$('#content').append(myContact);
	});

	$( "header li a" ).hover(
	  function() {
	    $( this ).parent().addClass( "pulse" );
	  }, function() {
	    $( this ).parent().removeClass( "pulse" );
	  }
	);

	// $('.logo').click(function() {
	// 	$('header li').removeClass("floating");
	// 	if ( !$('#default').length) {
	// 		$('.container:eq(1)').append(myDefault);
	// 	}
	// 	if ($('#content').length) {
	// 		$('#content').remove();
	// 	}
	// });

	// $('#about-link').click(function() {
	// 	$('header li').removeClass("floating");
	// 	if ( $('#default').length) {
	// 		$('#default').remove();
	// 	}
	// 	if (!$('#content').length) {
	// 		$('.container:eq(1)').append(myContent);
	// 	}
	// 	$('#content').empty();
	// 	$('#content').append(myAbout);
	// 	$('#about-link').parent().addClass('floating');
	// });

	// $('#menu-link').click(function() {
	// 	$('header li').removeClass("floating");
	// 	if ( $('#default').length) {
	// 		$('#default').remove();
	// 	}
	// 	if (!$('#content').length) {
	// 		$('.container:eq(1)').append(myMenu);
	// 	}
	// 	$('#content').empty();
	// 	$('#content').append(myMenu);
	// });

	// $('#contact-link').click(function() {
	// 	$('header li').removeClass("floating");
	// 	if ( $('#default').length) {
	// 		$('#default').remove();
	// 	}
	// 	if (!$('#content').length) {
	// 		$('.container:eq(1)').append(myContact);
	// 	}
	// 	$('#content').empty();
	// 	$('#content').append(myContact);
	// });

});