import {importHTML} from '../modules/importHtml.js';
import {BindMe} from '../modules/BindMe.js';
import {ForMe} from '../modules/ForMe.js';
export class Contatos extends HTMLElement{
    constructor(){
        super();
        //this.template=importHTML('./src/views/Contatos.html');
        
    }
    connectedCallback(){
       

        let template=`
            <div class="container">
            <h1>Contatos</h1>
            <ul for-me>
                <li bind-me="name"></li>
            </ul>
        
            </div>
        `

        this.innerHTML=template;
      
        //BindMe(data);
        let data=[
            {id:'1',name:'Joao'},
            {id:'2',name:'Maria'},
            {id:'3',name:'André'},
 
         ];
        ForMe(data);
    }
    show(){

    }
}

