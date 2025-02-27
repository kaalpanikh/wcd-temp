document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const fallbackImage = document.querySelector('.fallback-image');
    
    // Function to show fallback image if video fails
    function showFallbackImage() {
        if (fallbackImage && video) {
            console.log('Video failed to load, showing fallback image');
            video.style.display = 'none';
            fallbackImage.style.display = 'block';
        }
    }
    
    // Function to check video status
    function checkVideoStatus() {
        if (video) {
            // Check if video is in a failed state or hasn't loaded
            if (video.error || video.readyState === 0 || video.networkState === 3) {
                showFallbackImage();
                return;
            }
            
            // Check if video dimensions are valid
            if (video.videoWidth === 0 || video.videoHeight === 0) {
                showFallbackImage();
                return;
            }
            
            console.log('Video appears to be working');
        }
    }
    
    // Events to catch video failures
    if (video) {
        // Error event
        video.addEventListener('error', showFallbackImage);
        
        // Stalled event
        video.addEventListener('stalled', showFallbackImage);
        
        // Failed to load metadata
        video.addEventListener('loadedmetadata', function() {
            if (video.videoWidth === 0) {
                showFallbackImage();
            }
        });
        
        // Check video status after loading
        video.addEventListener('canplay', checkVideoStatus);
        
        // Set timeouts to check video status
        setTimeout(checkVideoStatus, 1000);
        setTimeout(checkVideoStatus, 3000);
    } else {
        console.error('Video element not found');
        if (fallbackImage) {
            fallbackImage.style.display = 'block';
        }
    }
});
