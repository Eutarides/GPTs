class Nav extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        html`
        <style>
            .Nav{
                justify-content:space-between;
                align-items:center;
                gap:1rem;
                padding-top:10%;
                display:flex;
                flex-direction:column;
            }

            .Nav-line{
                border-radius:10px;
                height:2.5vh;
                align-items: center;
                width:80%;
            }

            .Nav-line h3{
                background-color: hsl(0, 73%, 93%);
                border-radius:10px;
                height:100%;
                text-align: center;
            }

        </style>
        <div class="Nav">
            <div class="Nav-line">
                <h3>Contrato</h3>
            </div>
            <div class="Nav-line">
                <h3>Convenio</h3>
            </div>
            <div class="Nav-line">
                <h3>Estadísticas</h3>
            </div>
        </div>
        `;

    }
}

customElements.define('nav-component', Nav);