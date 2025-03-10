document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    if (link.href.startsWith('http')) {
      link.setAttribute('rel', 'nofollow noopener');
    }
  });
});