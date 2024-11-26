// console.log(temp.content.cloneNode(true));

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.count = 0;
  }

  connectedCallback() {
    this.랜더링();
    this.card = this.shadowRoot.querySelector('.card');
    this.card.addEventListener('click', () => {
      this.이벤트();
    });
    this.card.addEventListener('click', this.이벤트.bind(this));
  }

  이벤트() {
    console.log(++this.count);
  }

  랜더링() {
    this.shadowRoot.innerHTML = `
      <style>
         .card{
          background-color:orange;
        }
      </style>
      <div class="card">
        <h2>Card Title</h2>
        <slot name="me"></slot>
        <p> description..</p>
      </div>
    `;
  }

  static get observedAttributes() {
    return ['data-name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'data-name') {
      this.랜더링();
      console.log('리랜더링');
    }
  }
}

customElements.define('my-element', MyElement);
