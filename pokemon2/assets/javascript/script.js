$(document).ready(function() {

  // var mouseIn = function() {
  //   console.log('mouse in');
  //   $('.subnav').removeClass('hidden');
  // };
  //
  // var mouseOut = function() {
  //   console.log('mouse out');
  //   $('.subnav').addClass('hidden');
  // }
  //
  // $('.nav li').hover(mouseIn, mouseOut);

   $('.nav li').hover(function() {
     $(this).find('.subnav').removeClass('hidden');
   }, function() {
     $(this).find('.subnav').addClass('hidden');
   });

   // Crazy stuff for Andy:

  //  function setUpHover(hoverSelector, toShowSelector) {
  //    $(hoverSelector).hover(function() {
  //      $(this).find(toShowSelector).removeClass('hidden');
  //    }, function() {
  //      $(this).find(toShowSelector).addClass('hidden');
  //    });
  //  }
   //
  //  setUpHover('.nav li', '.subnav')

});
