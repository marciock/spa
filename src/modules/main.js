import './routes.js';

   
import {NavBar} from '../component/NavBar.js';
import {Icons} from '../component/Icons.js';
import {Contatos} from '../component/Contatos.js';
import {HomePage} from '../component/Home.js';

    //console.log(Icons)

window.suportCustomElements="customElements" in window;

window.customElements.define('nav-bar',NavBar)
window.customElements.define('icons-menu',Icons)
window.customElements.define('n-contatos',Contatos)
window.customElements.define('home-page',HomePage);



