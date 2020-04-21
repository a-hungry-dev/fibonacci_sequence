const button = document.querySelector('button[type="submit"]');
const input = document.querySelector('input[type="number"]');
const result = document.querySelector('.result');
const error = document.querySelector('.error');
button.addEventListener('click', () => {
  // reset the error message when resubmitting request
  error.innerHTML = ""

  // use value from input to get nth number
  fetch('/fibonacci?number=' + input.value)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        error.innerHTML = data.error
        return
      }
      result.innerHTML = data.result
    });
});
