//Menu toggle-button
$('.menu-icon').on('click', function(){
  $('nav ul').toggleClass('showing');
});

//scrolling effect
$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  }else{
    $('nav').removeClass('black');
  }
});
