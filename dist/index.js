(()=>{var t={933:()=>{class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=html`
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
        `}}customElements.define("chat-component",t)},16:()=>{class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=html`
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
        `}}customElements.define("nav-component",t)},926:()=>{class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=html`
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
        `}}customElements.define("profile-component",t)},451:()=>{class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){this.shadow.innerHTML=html`
        <style>
            .Settings-button{
                height:5%;
                width:20%;
                padding-right:3%;
                position:absolute;
                bottom:1%;
                left:6%;
            }

            .Settings-button svg{
                width:100%;
                fill:rgb(179, 178, 178);
                stroke: #000;
                stroke-width: 1px;
            }

        </style>
        <div class="Settings-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>
        </div>
        `}}customElements.define("settings-component",t)}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";i(933),i(16),i(926),i(451)})()})();