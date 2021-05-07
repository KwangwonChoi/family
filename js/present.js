



// aos animation
$(document).ready(function(){
  AOS.init();
});


// picture slide
$(document).ready(function(){
  $('.picture_list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1200,
      centerMode: true,
      variableWidth: true
    });
});


// picture box image click event
$(document).ready(function(){
var img = document.getElementsByClassName('click_img'); 
for (var x = 0; x < img.length; x++) { 
    img.item(x).onclick=function() {window.open(this.src)};
  } 
});

$(document).ready(function(){
  $('.picture_btn').click(function(){
      $('.box_list_hide').toggle();
  })
})
