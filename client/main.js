class MyElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
     <div>hello</div>
     `;
  }
}
customElements.define('my-element', MyElement);
