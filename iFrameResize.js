//////
// resize functions

if ( document.querySelector("iframe") !== null ) {

    // Iframe resizing Iframes to youtube standard size
        function setIframeSize () {

            // Select each iframe on document
            let eachIframe = document.querySelectorAll('iframe');

            for ( let iframe of eachIframe ) {

                // iframe.style.width = 100 + "%";

                // Get iframe-width
                let iframeWidth = iframe.offsetWidth;

                // Calculate related iframe-height
                let iframeAdjustment = iframeWidth / 1.778;

                // Set related iframe-height
                iframe.style.height = iframeAdjustment + "px";
            }

        };

        // Execute function on load
        setIframeSize();

        // Execute function on resize
        window.addEventListener("resize", setIframeSize);

};