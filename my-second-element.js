class MySecondElement extends HTMLElement {
    
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    // Called when your element is inserted in the DOM or
    // immediately after the constructor if it’s already in the DOM
    connectedCallback() {
      if (!this.hasAttribute('msg')) {
        this.setAttribute('msg', 'no attributes given');
      }
      this.shadowRoot.innerHTML = `<h3>${this.msg}</h3>`;
    }

    get msg() {
      return this.getAttribute('msg');
    }

    set msg(newValue) {
      this.setAttribute('msg', newValue);
    }
  }
  
  customElements.define('my-second-element', MySecondElement);