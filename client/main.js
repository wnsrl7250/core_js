// console.log(temp.content.cloneNode(true));

class MyElement extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
   
      <style>
       @import url('./style.css'); 
      </style>

      
      <div class="card">
        <slot name="title">Default Title</slot>
        <slot name="content">Default Contents</slot>
        <slot></slot>
      </div>
      
    
    `;
  }
}

customElements.define('my-element', MyElement);
