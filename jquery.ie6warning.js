/* Copyright (c) 2009 Mark Gandolfo http://www.markgandolfo.com.au
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * Copyright notice and license must remain intact for legal use
 *
 * ie6Warning will show a div is the browser is ie6.
 * If the user clicks on the div, it will hide it, setting a cookie so
 * It won't be shown again for 20 days or so.
 *
 * ie6Warning
 * Requires: jQuery 1.2.6+
 *           jCookie
 *
 */
jQuery.fn.ie6warning = function (options) {
  return this.each(function () {
		var	element = jQuery(this);
		var cookie_name = 'ie6WarningMessage';
		var options = { path '/', expires: 20 };


		if(( $.browser.msie ) && ( $.browser.version < 7 )) {
			if($.cookie(cookie_name) != 1) {
				element.show();
				$.cookie(cookie_name, 0, options);
			}
		}

		element.bind("click",
			function(e) {
				$.cookie(cookie_name, 1, options);
				element.slideUp('slow');
		});

  });
};
