$('#navicon').on('click', function() //contrôle le clic sur le navicon
{
  if($('#menu').css('display') == 'none') //si le menu n'est pas visible
  {
    $('#menu').css('position', 'fixed'); //on le fixe
    $('#menu').fadeIn(500); //transition
    $('#menu').css('display', 'flex'); //on le passe en flex
    $('#menu a').attr('class', 'slideInDown animated'); //animation du texte
  }
  else //si le menu est visible
  {
    $('#menu').css('position', 'auto'); //on enleve le fixed
    $('#menu').fadeOut(500, 'linear'); //transition
    $('#menu a').attr('class', 'slideOutDown animated'); //animation du texte
  }
})

$('.lien').on('click', function() //smooth scroll
{
  $('#menu').css('position', 'auto'); //on enleve le fixed
  $('#menu').fadeOut(500, 'linear'); //transition
  $('#menu a').attr('class', 'slideOutDown animated'); //animation du texte

  //smooth scroll
  var page = $(this).attr('href'); // Page cible
	var speed = 750; // Durée de l'animation (en ms)
	$('html, body').animate( { scrollTop: $(page).offset().top -70}, speed ); // Go

})
