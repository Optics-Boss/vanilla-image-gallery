class CustomDialog extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .dialog_container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
        }
        
        .close-button {
          background: none;
          color: inherit;
          border: none;
          padding: 0 10px;
          font: inherit;
          cursor: pointer;
          outline: inherit;
        }
        
        .close-button:hover {
          opacity: 0.6;
          transition: opacity 0.2s ease;
          background: linear-gradient(135deg, #ffffff, #dfe3e8);
          box-shadow: -2px 3px 15px 5px rgba(0, 0, 0, 0.15);
        }

        .image {
          height: 90vh;
        }

        dialog::backdrop {
          background-color: rgba(128, 128, 128, 0.8);
        }
      </style>

      <dialog>
          <div class="dialog_container">
            <img class="image">
            <button class="close-button" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </button>
          </div>
      </dialog>
    `;

    this.dialog = shadow.querySelector("dialog");
    this.valueElement = shadow.querySelector("#value");
    this.closeButton = shadow.querySelector(".close-button");

    shadow.querySelector(".image").src=this.getAttribute("value");
    shadow.querySelector(".image").alt="Indies"

    this.closeButton.addEventListener("click", () => {
        this.dialog.close();
    });

    this.dialog.addEventListener("click", (event) => {
      const rect = this.dialog.getBoundingClientRect();

      const outside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

      if (outside) {
        this.dialog.close();
      }
    });

  }

  connectedCallback() {
    this.valueElement.textContent = this.getAttribute("value") ?? "";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && oldValue !== newValue) {
      this.valueElement.textContent = newValue ?? "";
    }
  }

  set value(val) {
    this.setAttribute('value', val);
  }

  get value() {
    return this.getAttribute('value');
  }

  open() {
    this.dialog.showModal();
  }

}

customElements.define("custom-dialog", CustomDialog);
