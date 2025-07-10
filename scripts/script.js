document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const output = document.getElementById('output');
  output.innerHTML = '<h3>Dados Inseridos:</h3><ul>' +
    Array.from(formData.entries()).map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`).join('') +
    '</ul>';
  if (output) output.style.display = 'block';
});

document.getElementById('userForm').addEventListener('reset', function () {
  const output = document.getElementById('output');
  output.style.display = 'none';
});