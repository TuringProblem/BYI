(() => {
  const button = document.getElementById('actionBtn');
  const input = document.getElementById('inputData');
  const dialog = document.getElementById('my-dialog');

  button.addEventListener('click', () => {
    dialog.innerHTML = `<p>${input.value}</p>
      <button commandfor="my-dialog" command="close">Cancel</button>`;
    dialog.showModal();

  });
})();
