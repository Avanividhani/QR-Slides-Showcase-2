// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "fullScreen",
    "close"
  ],
  loop: false,
  protect: true
});

// Trigger click on the first image
$('[data-fancybox="gallery"]:first').trigger('click');




