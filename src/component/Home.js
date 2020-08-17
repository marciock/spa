import {ForMe} from '../modules/ForMe.js';

export class HomePage extends HTMLElement{
    constructor(){
        super();
        
    }
    connectedCallback(){
        

        let template=`
        <div class="container" >
            <h3 >Home</h3>
            <div class="row">
           
            ${this.data()}
               
            </div>
        </div>
        `;

           
        this.innerHTML=template;

        console.log(this.data())

    }
    data(){
      const data=[
            {
                img:'./assets/img/imagens.svg',
                text:'Usuários',
                link:'#/usuarios'
            },
            {
                img:'./assets/img/produtos.svg',
                text:'Produtos',
                link:'#/produtos'
            },
            {
                img:'./assets/img/marca.svg',
                text:'Marcas',
                link:'#/marcas'
            }
        ];

        let icon ='';
        data.map((f)=>{
            icon +=     
            ` <div class="col-sm- ml-2" > 
                     <icons-menu img="${f.img}" text="${f.text}" link="${f.link}" ></icons-menu>
            </div>`;

        }).join('');
        console.log(icon)
        return icon;
       
    }
}