class AsideHeader extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        /*html*/`
        <style>
            .Aside-header{
                display:flex;
                justify-content:space-between;
                Align-items:center;
                width:100%;
                height:7%;
            }

            .New-chat-button{
                display:flex;
                justify-content:space-between;
                Align-items:start;
                width:75%;
                height:100%;
                padding-top:5%;
                padding-bottom:5%;
            }

            .New-chat-button svg{
                fill:white;
                height:40%;
            }

            .New-chat-button h3{
                color:white;
            }

            .Sidebar-button{
                display:flex;
                justify-content:space-between;
                Align-items:center;
                width:15%;
                height:100%;
                padding-top:5%;
                padding-bottom:5%;
            }

            .Sidebar-button svg{
                width:50%;
                fill:white;
            }

        </style>
        <div class="Aside-header">
            <div class="New-chat-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                <h3>Nueva Consulta</h3>
            </div>
            <div class="Sidebar-button">  
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
            </div>
        </div>
        `;

    }
}

customElements.define('nav-component', AsideHeader);