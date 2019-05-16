class MyElement extends HTMLElement {
    
    constructor() {
      super(); 
      this.msg = 'Hello, Soat from WebComponent!';
    }
    // Called when your element is inserted in the DOM or
    // immediately after the constructor if it’s already in the DOM
    connectedCallback() {
      this.innerHTML = `<h4>${this.msg}</h4>`;
    }
  }
  
  customElements.define('my-element', MyElement);