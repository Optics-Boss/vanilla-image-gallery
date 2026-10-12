class CustomGallery extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");

    style.textContent = `
      .gallery {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }

      .gallery > * {
        margin: 1em;
        width: calc(32% - 1em);
      }
    `;

    shadow.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("gallery");

    [1, 2, 3, 4, 5, 6].forEach(() => {
      const image = document.createElement("custom-image");
      container.appendChild(image);
    });

    shadow.appendChild(container);
  }
}

customElements.define("custom-gallery", CustomGallery);
