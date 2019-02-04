{
    const scrollTime = 0.2;
    const scrollDistance = 50;

    window.addEventListener("wheel", event => {

      event.preventDefault();

      let delta = event.deltaY / 100 || -event.deltaFactor / 3;
      let scrollTop = window.pageYOffset;
      let finalScroll = scrollTop - parseInt(delta * scrollDistance);

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
}
