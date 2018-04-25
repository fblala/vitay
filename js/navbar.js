$("#nav .main-nav a[href^='#']").on('click', function(e) {
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(this.hash).offset().top
  }, 600);
});

$('#back-to-top').on('click', function(){
  $('body,html').animate({
    scrollTop: 0
  }, 600);
});

///////////////////////////
// Btn nav collapse
$('#nav .nav-collapse').on('click', function() {
  $('#nav').toggleClass('open');
});

///////////////////////////
// Mobile dropdown
$('.has-dropdown a').on('click', function() {
  $(this).parent().toggleClass('open-drop');
});
