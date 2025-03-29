
class CardTurismo extends HTMLElement {
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

            <button id="reserva-btn">${this.getAttribute('reserva')}</button>
        </div>
        </div>`
        const reservaBtn = this.shadowRoot.querySelector('#reserva-btn')
        reservaBtn.addEventListener('click', () => {
            console.log("Reservado")
            

        });
    }

}

export {CardTurismo};