import { getData } from "../Data.js";

class SectionCards extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        .section {
        display: flex;
        gap: 40px;
        align-items: flex-start;
        flex-direction: column;
        }       
        </style>
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
            newCard.setAttribute('descripcion', item.descripcion);
            if (item.guia_incluido === false) {
                newCard.setAttribute('guia_incluido', 'No incluye guía')
            } else {
                newCard.setAttribute('guia_incluido', 'Sí incluye guía')
            }
            newCard.setAttribute('actividades', item.actividades);
            if(item.reservado === false) {
                newCard.setAttribute('disponibilidad', 'No disponible')
                newCard.setAttribute('reserva', 'No disponible')
            } else {
                newCard.setAttribute('disponibilidad', 'Disponible para reserva');
                newCard.setAttribute('reserva', 'Reservar')
            }
            newCard.setAttribute('img', 'https://picsum.photos/300/200')
            this.shadowRoot.appendChild(newCard);
        });
    }

}

export {SectionCards};