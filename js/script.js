$(function() {
  // too lazy, just using jquery sorry

  // get width and height of "markhepburn", plug those in so CSS can
  // do the rest:
  var $me    = $('#me'),
      width  = $me.outerWidth(),
      height = $me.outerHeight();
  $me.css('margin-left', -width / 2);

  // set up hovers
});
