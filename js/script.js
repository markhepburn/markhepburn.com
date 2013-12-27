$(function() {
  // too lazy, just using jquery sorry

  // get width and height of "markhepburn", plug those in so CSS can
  // do the rest:
  var $me    = $('#me'),
      width  = $me.outerWidth(),
      height = $me.outerHeight();
  $me.css('margin-left', -width / 2);
  // The float-element hacks:
  $('.holder').css({
    width: width / 2,
    height: height
  });

  // set up hovers:
  $('#urls li')
    .mouseenter(function() {
      var cls = findLinkType($(this));
      $('.decorators').toggleClass(cls, true);
    })
    .mouseleave(function() {
      var cls = findLinkType($(this));
      $('.decorators').toggleClass(cls, false);
    });
});

function findLinkType($el) {
  var clss = $el.find('a').attr('class').split(/\s+/);
  for (var i = 0, len = clss.length; i < len; i++) {
    var cls = clss[i];
    if (cls === 'url') continue;
    return cls;
  }
}
