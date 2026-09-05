const button = document.getElementById('actionBtn');
const input = document.getElementById('inputData');
const dialog = document.getElementById('my-dialog');

button.addEventListener('click', () => {
  dialog.innerHTML = `
    <div class="flex flex-col gap-4 items-center fadder">
      <p>${input.value}</p>
      <button commandfor="my-dialog" command="close" class="bg-[#aaaaaa] gray text-white p-2 rounded-md cursor-pointer">Cancel</button>
    </div>
  `;
  dialog.showModal();
});

// this is an example of how to create a custom card
class SpecialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() { this.render(); }

  render() {
    const text = this.getAttribute('text');

    this.shadowRoot.innerHTML = `
      <div class="bg-blue-600 text-white p-4 rounded-xl shadow-md">
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Special Card</h1>
        <p class="text-gray-600 mb-6">${text}.</p>
      </div>
    `;
  }
}



customElements.define('special-card', SpecialCard);

