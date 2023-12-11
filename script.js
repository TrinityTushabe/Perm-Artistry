document.addEventListener("DOMContentLoaded", function () {
    // Initialize Glide.js for the carousel in each section
    const glides = document.querySelectorAll('.glide');

    glides.forEach((glide, index) => {
        // Initialize each Glide instance
        const currentGlide = new Glide(glide, {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 3000, // Set to false if you don't want automatic sliding
        });

        // Update the active section separator on slide change
        currentGlide.on('run', function () {
            // Remove active class from all section separators
            document.querySelectorAll('.section-separator').forEach((s, i) => {
                s.classList.remove('active');
                if (i === currentGlide.index) {
                    s.classList.add('active');
                }
            });
        });

        // Mount the Glide instance
        currentGlide.mount();

        // Add click event listener to each section separator
        const sectionSeparators = document.querySelectorAll('.section-separator');
        sectionSeparators.forEach(separator => {
            separator.addEventListener('click', function () {
                // Remove active class from all section separators
                sectionSeparators.forEach(s => s.classList.remove('active'));

                // Add active class to the clicked section separator
                this.classList.add('active');

                // Move to the corresponding slide when a section separator is clicked
                const index = Array.from(sectionSeparators).indexOf(this);
                currentGlide.go(`=${index}`);
            });
        });
    });

    // Example: Change background color on click for the "Home" section
    document.getElementById("home").addEventListener("click", function () {
        document.body.style.backgroundColor = "#FFE382";
    });

    // Example: Change background color on click for the "Contact" section
    document.getElementById("contactSeparator").addEventListener("click", function () {
        document.body.style.background = "linear-gradient(to right, #ffd700, #333)";
    });
    
});
