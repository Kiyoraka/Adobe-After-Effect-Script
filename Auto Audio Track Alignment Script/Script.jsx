var comp = app.project.activeItem;
if (comp && comp instanceof CompItem) {
    // Collect all audio layers
    var audioLayers = [];
    for (var i = 1; i <= comp.numLayers; i++) {
        var layer = comp.layer(i);
        if (layer.hasAudio) {
            // Try to extract track number 
            var trackNumber = getTrackNumber(layer);
            audioLayers.push({
                layer: layer,
                trackNumber: trackNumber
            });
        }
    }
    
    // Sort layers by track number
    audioLayers.sort(function(a, b) {
        return a.trackNumber - b.trackNumber;
    });
    
    // Arrange layers sequentially
    var currentTime = 0;
    for (var i = 0; i < audioLayers.length; i++) {
        var layer = audioLayers[i].layer;
        layer.startTime = currentTime;
        var duration = layer.outPoint - layer.inPoint;
        currentTime += duration;
    }
    
    // Update composition duration if needed
    if (currentTime > comp.duration) {
        comp.duration = currentTime;
    }
    
    alert("Aligned " + audioLayers.length + " tracks sequentially.\nTotal duration: " + formatTime(currentTime));
}

// Function to determine track number from layer
function getTrackNumber(layer) {
    // Check if layer name contains a track number
    var match = layer.name.match(/^(\d+)\D|#(\d+)|[^\d](\d+)[^\d]/);
    if (match) {
        // Return the first non-undefined group
        for (var i = 1; i < match.length; i++) {
            if (match[i] !== undefined) {
                return parseInt(match[i], 10);
            }
        }
    }
    
    // Check source name if available
    if (layer.source && layer.source.name) {
        match = layer.source.name.match(/^(\d+)\D|#(\d+)|[^\d](\d+)[^\d]/);
        if (match) {
            for (var i = 1; i < match.length; i++) {
                if (match[i] !== undefined) {
                    return parseInt(match[i], 10);
                }
            }
        }
    }
    
    // If we couldn't find a track number, use the layer index as a fallback
    // This assumes layers are at least in the right general order
    return layer.index;
}

// Function to format time as minutes:seconds
function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    return minutes + ":" + (remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds);
}