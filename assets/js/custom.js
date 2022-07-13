$(document).ready( function() {

  let device = false;
  if(window.matchMedia("(max-width: 767px)").matches){
    device = true;
  }
  console.log(device);

  $('#menu_close').click(function(){
    $("#menu_system").animate({left:'-100%'}, 500);
    $('html, body').css({
      overflow: 'auto',
      height: 'auto'
    });
  });

  $('#menu_open').click(function(){
    $("#menu_system").animate({left:'0'}, 500);
    $('html, body').css({
      overflow: 'hidden',
      height: '100%'
    });
  });



  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      console.log("Reached top");
      return;
    }

    if (currentScroll > lastScroll) {
      // down
      // body.classList.remove(scrollUp);
      // body.classList.add(scrollDown);
      // lottiePlayer.play();
      console.log("scrolled up");
    } else if (currentScroll < lastScroll) {
      // up
      // body.classList.remove(scrollDown);
      // body.classList.add(scrollUp);
      // lottiePlayer.stop();
      console.log("scrolled Down");
    }
    lastScroll = currentScroll;
  });
});
