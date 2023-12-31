$(document).ready(function () {
  // Fancybox Configuration
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [ 
      "fullScreen",
      "close"
    ],
    loop: false,
    protect: true,
    afterShow: function (instance, current) {
      // Remove any existing download button
      instance.$refs.toolbar.find('[data-fancybox-download]').remove();

      // Add a new download button with PDF link
      var downloadButton = $('<button data-fancybox-download class="fancybox-button fancybox-button--download" title="Download PDF"><img src="https://i.ibb.co/L6Rpzbt/white-download.png" alt="Download PDF"></button>');
      downloadButton.on('click', function () {
        // Replace "https://your-pdf-link.pdf" with your actual PDF link
        var pdfLink = "https://drive.google.com/u/0/uc?id=1itH773OyJm35jsVjRqOpCfSFZOLRDZKZ&export=download";
        
        // Create a hidden link and trigger the click event
        var hiddenLink = document.createElement('a');
        hiddenLink.href = pdfLink;
        hiddenLink.download = 'downloaded-file.pdf';
        hiddenLink.target = '_blank';
        hiddenLink.click();
      });

      // Append download button to the toolbar
      instance.$refs.toolbar.append(downloadButton);
    }
  });

  // Trigger click on the first image
  $('[data-fancybox="gallery"]:first').trigger('click');
});


function openModal() {
  document.getElementById('imageModal').style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// Attach event listener to the button
document.getElementById('openModalBtn').addEventListener('click', openModal);




document.addEventListener("DOMContentLoaded", function() {
  openVideo();
});

function openVideo() {
  var videoModal = document.getElementById('videoModal');
  var video = videoModal.querySelector('video');

  // Autoplay the video
  video.muted = true;
  video.autoplay = true;
  video.load();

  videoModal.style.display = 'flex';
}

function closeVideo() {
  var videoModal = document.getElementById('videoModal');
  videoModal.style.display = 'none';

  // Pause the video when the modal is closed
  var video = videoModal.querySelector('video');
  video.pause();
}








