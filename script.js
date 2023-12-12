// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "fullScreen",
    "close"
    "download"
  ],
  loop: false,
  protect: true
});

// Trigger click on the first image
$('[data-fancybox="gallery"]:first').trigger('click');

$('.download-button a').off('click');




