document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const fallbackImage = document.querySelector('.fallback-image');
    
    // Function to show fallback image if video fails
    function showFallbackImage() {
        if (fallbackImage) {
            video.style.display = 'none';
            fallbackImage.style.display = 'block';
        }
    }
    
    // Check if the video can be played
    video.addEventListener('error', function() {
        showFallbackImage();
    });
    
    // Set a timeout to check if video is playing after a few seconds
    setTimeout(function() {
        if (video.readyState === 0) {
            showFallbackImage();
        }
    }, 3000);
});
