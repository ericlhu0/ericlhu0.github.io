document.querySelectorAll('.pub.clickable').forEach(pub => {
  pub.style.cursor = 'pointer';
  pub.addEventListener('click', (e) => {
    if (e.target.tagName !== 'A' && !e.target.closest('a')) {
      const selection = window.getSelection();
      if (selection.toString().length === 0) {
        window.location.href = pub.dataset.url;
      }
    }
  });
});