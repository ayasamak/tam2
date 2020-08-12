$(function(){
  'use strict'
  $('.carousel').carousel({
  interval: 500
})
});
$(function(){
  'use strict'
  $('.navbar-nav .nav-item a').click(function(){
    $('html , body').animate({
      scrollTop:$($(this).data("class")).offset().top-50},1000);
  });
  $("body").niceScroll({
  cursorcolor:"green",
  cursorwidth:"8px",
  cursorborder:"1px solid green",
  cursorborderradius:10
});
 $('.offers .offer').hover(function(){
  $(this).addClass("animate__heartBeat");
} ,function(){
    $(this).removeClass(" animate__heartBeat");

  });
  $(window).scroll(function(){
   var sc= $(window).scrollTop();
  if ( sc > '350'){$('.upp').css('display','block');}
  else {$('.upp').css('display','none');}
});
    $('.upp').click(function(){
    $('body ,html ').animate({scrollTop:'0'} ,200);
  });
});
var items= document.querySelectorAll(".test ul li");
var content= document.querySelector(".test .contant ");
var btn= document.querySelector(".test button");
var prices= 0;
   items.forEach(function(item){
   item.onclick = function(){
    prices += parseInt(item.getAttribute("data-price"));
    content.innerHtml +=item.textContent + " ";
  if(content.innerHtml!= " ")
  {
    btn.style.display="block";
  }
};
});
  btn.onclick =function(){
    alert(prices);
  };
