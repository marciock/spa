import {ForMe} from '../modules/ForMe.js';

export class HomePage extends HTMLElement{
    constructor(){
        super();
        
    }
    connectedCallback(){
        let template=`
        <div class="container" >
            <h3 >Home</h3>
            <icons-menu ></icons-menu>
         </div>
        `

        this.innerHTML=template;



    }
    data(){
        data=[
            {
                img:'./assets/img/imagens.svg',
                text:'Usuários',
                link:'/usuarios'
            },
            {
                img:'./assets/img/produtos.svg',
                text:'Produtos',
                link:'/produtos'
            },
            {
                img:'./assets/img/marcas.svg',
                text:'Marcas',
                link:'/marcas'
            }
        ];

        ForMe(data)
    }
}