$(document).ready(function() {
	$('form').validate({

		// Handlers
		
			// Success
		submitHandler: function( form ) {
			var $message = 
			$("<div class='message'>" + 
					"<p>Congratulations on successfully filling the form.</p>" +
					"<p>Submitting your input...</p>" + 
				"</div>");
			$('body').prepend($message);
			setTimeout(function() {
				$('form').get(0).reset();
				location.reload();
			}, 3000);
		},
    invalidHandler: function( event, validator ) {
      var errors = validator.numberOfInvalids();
      if( errors ) {
        var message = ( errors === 1 ) ? 'highlighted field'
                                       : errors + ' highlighted fields';
        $( '.submit-error' ).show().find( 'span' ).html( message );
      }
    },
			// Failure
		rules: {
			email: {
				required: true,
				email: true
			},
			email_confirm: {
				required: true,
				equalTo: "#email"
			},
			country: "required",
			zip_code: {
				required: true,
				minlength: 5
			},
			password: {
				required: true,
				minlength: 6,
			},
			password_confirm: {
				required: true,
				equalTo: "#password"
			},
			terms_of_use: "required"
		},
		messages: {
			email: {
				required: "Please enter your email address.",
				email: "Please use a valid email address."
			},
			email_confirm: {
				required: "This does not match the email entered above.",
				equalTo: "This does not match the email entered above."
			},
			zip_code: {
				required: "Please enter your Zip Code.",
				minlength: "Please use a valid Postal/Zip code."
			},
			password: {
				required: "Please enter your password.",
				minlength: "Your password must be between 6-32 characters long."
			},
			password_confirm: {
				required: "This does not match the password entered above.",
				equalTo: "This does not match the password entered above."
			},
			terms_of_use: "Terms of use must be checked."
		}
	});


// Add setInterval to "listen" to class changes. 
	// setInterval( function() {
	// 	if ($('input').hasClass('error')) {
	// 		$('input.error').parent().addClass('error');
	// 	}

	// 	if (!$('input').hasClass('error')) {
	// 		$('input').parent().removeClass('error');
	// 	}

	// 	if ($('input').hasClass('valid')) {
	// 		$('input.valid').parent().addClass('good');
	// 	}

	// 	if (!$('input').hasClass('valid')) {
	// 		$('input').parent().removeClass('good');
	// 	}			
	// }, 1);
});