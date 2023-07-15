document.addEventListener('DOMContentLoaded', function() {
    var improveButton = document.getElementById('improveButton');
    var musicPlayer = document.getElementById('musicPlayer');
    
    improveButton.addEventListener('click', function() {
      musicPlayer.play();
    });
  });