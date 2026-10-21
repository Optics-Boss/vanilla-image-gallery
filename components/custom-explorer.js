class CustomExplorer extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
      <h1>Explorer</h1>
    `;

    const container = document.createElement("div");
    container.classList.add("explorer_container");

    fetch("./folders.json")
      .then(response => response.json())
      .then(data => {
        data.folders.forEach(folder => {
          const element = document.createElement("div");
          element.textContent = folder;

          container.appendChild(element);
        });
      });

    shadow.appendChild(container);
  }
}

customElements.define("custom-explorer", CustomExplorer);
