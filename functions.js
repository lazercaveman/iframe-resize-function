
//////
// resize function

  if ( document.querySelector("iframe") !== null ) {

    // ThisFunction will resize iframe height value related to the iframes width
    function setIframeSize () {

      var iframeWidth = document.querySelector('iframe').offsetWidth;

      var iframeAdjustment = iframeWidth / 1.778;

      document.querySelector('iframe').style.height = iframeAdjustment + "px";

    };

    // Execute function on load
    setIframeSize();

    // Execute function on window resize
    window.addEventListener("resize", setIframeSize);

  };
