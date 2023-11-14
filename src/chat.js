class Chat extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {

        this.shadow.innerHTML = 
        html`
        <style>
            .Chat{
                width:74%;
                height:100%;
                background-color:rgb(94, 25, 20);
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                border-radius:10px;
                
            }
            .Chat-box{
                height:90%;
                width:100%;
                background-color:hsl(6, 93%, 71%);
                display:flex;
                justify-content: space-between;
                border-radius:10px;
                border: 2px solid #000;
            }

            .Chat-menu{
                height:10%;
                width:100%;
                background-color:rgb(178, 34, 34);
                display:flex;
                justify-content: space-between;
                border-radius:10px;
                padding-top:3%;
                border: 2px solid #000;
            }

            .Image-button{
                height:75%;
                width:11%;
                padding-left:3%;
            }

            .Image-button button{
                height:100%;
                width:100%;
                border-radius:10px;
                border:2px solid black;
                background-color: rgb(235, 82, 102);
            }

            .Image-button button svg{
                fill:white;
            }

            .Text-bar{
                width:68%;
                padding-top:0.1em;
            }

            .Text-bar input{
                width:100%;
                border-radius:5px;
                height:1.2rem;
            }

            .Send-button{
                height:45%;
                width:10%;
                padding-right:3%;
            }

            .Send-button button{
                height:100%;
                width:100%;
                border-radius:10px;
                border:2px solid black;
                background-color: rgb(235, 82, 102);
            }

            .Send-button button svg{
                width:80%;
                fill:white;
            }

        </style>
        <div class="Chat">
            <div class="Chat-box"></div>
            <div class="Chat-menu">
                <div class="Image-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>image-plus-outline</title><path d="M13 19C13 19.7 13.13 20.37 13.35 21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H19C20.11 3 21 3.9 21 5V13.35C20.37 13.13 19.7 13 19 13V5H5V19H13M13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H13.35C13.75 15.88 14.47 14.91 15.4 14.21L13.96 12.29M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z" /></svg>
                    </button>
                </div>
                <div class="Text-bar">
                    <input></input>
                </div>
                <div class="Send-button">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>send-variant</title><path d="M3 20V14L11 12L3 10V4L22 12Z" /></svg>
                    </button>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('chat-component', Chat);