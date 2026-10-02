class CustomImage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style> 
        .image{
          flex-grow: 1;
          width: 100%;
          padding: 10px;
          border: 1px solid black;
        }
      </style>

      <img class="image" >
    `;

    shadow.querySelector(".image").src="images/Indies.jpg"
    shadow.querySelector(".image").alt="Indies"
  }
}

customElements.define("custom-image", CustomImage);
