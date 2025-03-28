import { getData } from "../Data";

class SectionCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        //Shadow DOM: rama o arbol aparte del dom que se renderiza aparte, es como ramas separadas del DOM con codigo separado.
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <div class="section">

        </div>`
        const section = document.querySelector('section')
    }

}

export {SectionCards};