function removeYouTubeShorts() {
  const shortsElements = document.querySelectorAll('[is-shorts]');
  
  shortsElements.forEach((element) => {
    element.style.display = 'none';
  });

  // checking for dynamically loaded Shorts
  setTimeout(removeYouTubeShorts, 1000);
}

removeYouTubeShorts();
