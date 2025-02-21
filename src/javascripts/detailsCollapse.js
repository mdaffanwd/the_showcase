
export function collapseDetails() {
  const details = document.querySelectorAll('details');

  details.forEach(detail => {
    detail.addEventListener('toggle', () => {
      if (detail.open) { // When this detail is opened, close others
        details.forEach(otherDetail => {
          if (otherDetail !== detail) {
            otherDetail.removeAttribute('open');
          }
        });
      }
    });
  });
}

