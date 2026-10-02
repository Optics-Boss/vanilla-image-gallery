class CustomImage extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <style> 
        .image{
          height: 33%;
          width: 33%;
        }
      </style>

      <img class="image" >
    `;

    shadow.querySelector(".image").src="images/Indies.jpg"
    shadow.querySelector(".image").alt="Indies"
  }
}

customElements.define("custom-image", CustomImage);
