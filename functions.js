//////
// resize functions

if ( document.querySelector("iframe") !== null ) {

    // Iframe resizing Iframes to youtube standard size
        function setIframeSize () {

            // Select each iframe on document
            let eachIrame = document.querySelectorAll('iframe');

            // Set counter
            let i = 0;

            // Loop through each iframe
            eachIrame.forEach( function() {

                // Get iframe-width
                let iframeWidth = eachIrame[i].offsetWidth;

                // Calculate related iframe-height
                let iframeAdjustment = iframeWidth / 1.778;

                // Set related iframe-height
                eachIrame[i].style.height = iframeAdjustment + "px";

                // Count up counter
                ++i;

            });

        };

        // Execute function on load
        setIframeSize();

        // Execute function on resize
        window.addEventListener("resize", setIframeSize);

};
