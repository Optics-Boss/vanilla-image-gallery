class CustomImage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style> 
        .image {
          flex-grow: 1;
          width: 100%;
        }

        .image:hover {
          opacity: 0.80;
          cursor: pointer;
        }
      </style>

      <img class="image" >
      <custom-dialog value="images/Indies.jpg" />
    `;

    shadow.querySelector(".image").src="images/Indies.jpg"
    shadow.querySelector(".image").alt="Indies"

    const button = shadow.querySelector(".image");
    button.addEventListener("click", function() {
      const dialog = shadow.querySelector("custom-dialog");
      dialog.open();
    });
  }
}

customElements.define("custom-image", CustomImage);
