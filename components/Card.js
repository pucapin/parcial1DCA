
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
        <style>
        .card {
            width: 500px;
            background-color: aliceblue;
            border-radius: 20px;
            padding: 8px;
            margin: 30px;
        }
        #top-img {
            border-radius: 20px;
        }
        
        </style>
        <div class="card">
        <img src="${this.getAttribute('img')}" alt="" id="top-img">
        <div class="card-info">
            <h1>${this.getAttribute('destino')}</h1>
            <h4>${this.getAttribute('costo')}</h4>
            <p>${this.getAttribute('alojamiento')}</p>
            <p>${this.getAttribute('duracion')}</p>
            <p>${this.getAttribute('descripcion')}</p>
            <p>${this.getAttribute('guia_incluido')}</p>
            <p>${this.getAttribute('actividades') + ' '}</p>
            <p>${this.getAttribute('disponibilidad')}</p>

            <button class="reserva-btn">${this.getAttribute('reserva')}</button>
        </div>
        </div>`
        const reservaBtn = document.querySelector('reserva-btn')
        reservaBtn.addEventListener('click', function() {
            console.log("Botón presionado")
        });
    }
}

export {CardTurismo};