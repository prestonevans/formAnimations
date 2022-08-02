const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('change', (e) => {
    const label = e.target.nextElementSibling;
    if (e.target.value.length > 0) {
      label.classList.add('transform');
      return;
    }
    label.classList.remove('transform');
  });
});
