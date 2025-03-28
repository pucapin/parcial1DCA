
class CardTurismo extends HTMLElement {
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
        <div class="card">
        <img src="" alt="">
        <div class="card-info">
            <h1>${this.getAttribute('destino')}</h1>
            <h4>${this.getAttribute('costo')}</h4>
            <p>${this.getAttribute('alojamiento')}</p>
            <p>${this.getAttribute('duracion')}</p>
            <p>${this.getAttribute('descripcion')}</p>
            <p>${this.getAttribute('guia_incluido')}</p>
            <ul>
                <li>${this.getAttribute('actividades')}</li>
            </ul>
            <p>${this.getAttribute('disponibilidad')}/p>
            <button>Reservar</button>
        </div>
        </div>`
    }
}

export {CardTurismo};