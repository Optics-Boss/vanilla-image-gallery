class CustomDialog extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style>
        .image {
          height: 90vh;
        }
      </style>

      <dialog>
          <button class="close-button" type="button">Close</button>
          <img class="image" >
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
