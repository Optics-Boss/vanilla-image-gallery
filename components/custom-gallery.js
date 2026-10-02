class CustomGallery extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      .gallery {
        display: flex;
        align-items: center;
      }
    `;

    shadow.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("gallery");

    [1, 2, 3].forEach(() => {
      const image = document.createElement("custom-image");
      container.appendChild(image);
    });

    shadow.appendChild(container);
  }
}

customElements.define("custom-gallery", CustomGallery);
