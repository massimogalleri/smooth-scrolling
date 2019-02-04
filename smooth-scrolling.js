var scrollTime = 0.2,
  scrollDistance = 50;

window.addEventListener("wheel", event => {

  event.preventDefault();

  var delta = event.deltaY / 100 || -event.deltaFactor / 3,
    scrollTop = window.pageYOffset,
    finalScroll = scrollTop - parseInt(delta * scrollDistance);

  TweenMax.to(window, scrollTime, {
    scrollTo: {
      y: finalScroll,
      autoKill: true
    },
    ease: Power2.easeOut,
    autoKill: true,
    overwrite: 5
  });

});