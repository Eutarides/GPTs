class Profile extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        html`
        <style>
            .Profile{
                height:18%;
                background-color: rgb(210, 31, 60);
                display:flex;
                justify-content: space-between;
                flex-direction: column;
                align-items: center;
                margin-top:10%;
            }

            .Profile-picture{
                width:5rem;
                height:5rem;
                border-radius:40px;
                background-color: hsl(6, 94%, 79%);
                display:flex;
                justify-content:space-around;
                align-items: center;

            }

            .Profile-picture svg{
                width:100%;
                fill:black;
            }

            .Profile-username h3{
                color:white;
            }

        </style>
        <div class="Profile">
            <div class="Profile-picture">
                <img>
                    <picture>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account-outline</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z" /></svg>
                    </picture>
                </img>
            </div>
            <div class="Profile-username">
                <h3>Usuario</h3>
            </div>
        </div>
        `;

    }
}

customElements.define('profile-component', Profile);