'use strict';
(function() {

  window.addEventListener('load', init);

  /**
   * Add initial event listeners.
   */
  function init() {
    showLinkEmojiOnHover();
  }

  /**
   * Add event listeners to headers such that the link emoji will be shown iff
   * the user is hovering over a header.
   */
  function showLinkEmojiOnHover() {
    let sections = document.querySelectorAll('.main-content h1, .main-content h2');
    for (let i = 0; i < sections.length; i++) {
      sections[i].addEventListener('mouseover', function() {
        this.querySelector('span').classList.remove('hidden');
      });
      sections[i].addEventListener('mouseout', function() {
        this.querySelector('span').classList.add('hidden');
      });
    }
  }
})();
