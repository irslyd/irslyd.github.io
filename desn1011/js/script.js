var video = document.getElementById("myVideo");

$(document).ready(function(){
  $('body').css('overflow', 'hidden');
});

$('#explore').click(function(){
    $('.wrap').toggle();
      $('.wrap').fadeIn(1000);
        $('.wrap').css('overflow-y','auto');
         $('body').css('overflow-y','auto');
          $('.landing-space').slideUp(1000);
});

var audio = $('.video') [0];
$('#explore').click(function(){
  audio.play();
});

$('.btton').click(function() {
    $('.extra-page').toggle();
      $('.extra-page').fadeIn(1000);
        $('.section-paperR').removeClass('position:relative')
          $('.section-paperL').removeClass('.position:relative')
});


$('.set').click(function(){
	$('.slider').toggle();
    $('.slider').fadeIn(1000);
      $('body').css('overflow', 'hidden');
});

$('#exit').click(function(){
  $('.slider').toggle();
    $('.slider').fadeOut(1000);
      $('body').css('overflow-y','auto');
});

$('.set2').click(function(){
  $('.slider2').toggle();
    $('.slider2').fadeIn(1000);
      $('body').css('overflow', 'hidden');
});

$('#exit2').click(function(){
  $('.slider2').toggle();
    $('.slider2').fadeOut(1000);
      $('body').css('overflow-y','auto');
});



var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


