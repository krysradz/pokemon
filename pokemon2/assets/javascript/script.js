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

var myImage= new Array(); 
myImage[0]="misty.png";       
myImage[1]="brock.png";
myImage[2]="testimonial2.png";
myImage[3]="testimonial3.png"; 

var ImageCnt = 0;

function next(){
    ImageCnt++;
    document.getElementById("whiteBox").style.background = 'url(' + myImage[ImageCnt] + ')';
  }

