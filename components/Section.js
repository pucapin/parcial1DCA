import { getData } from "../Data.js";

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
        console.log(section)
        const data = getData();
        data.forEach(item => {
            const newCard = document.createElement('card-turismo');
            newCard.setAttribute('destino', item.destino);
            newCard.setAttribute('costo', item.costo)
            newCard.setAttribute('alojamiento', item.alojamiento)
            newCard.setAttribute('duracion', item.duracion);
            if (item.guia_incluido === false) {
                newCard.setAttribute('guia_incluido', 'No incluye guía')
            } else {
                newCard.setAttribute('guia_incluido', 'Sí incluye guía')
            }
            
            this.shadowRoot.appendChild(newCard);
        });
    }

}

export {SectionCards};