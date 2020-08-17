export class Icons extends HTMLElement{
    constructor(){
        super();
       

    }
    connectedCallback(){
        const div=document.createElement('div');
            const img=this.getAttribute('img');
            const text=this.getAttribute('text');
            const link=this.getAttribute('link')

            let template=`
                <a href="${link}" class="text-center">
                     <img src="${img}" style="width:10em; height:10em"/>
                     <h4  >${text}</h4>
                </a>
                     
            `
            div.innerHTML=template;
            

            

            this.appendChild(div);
    }
}

// https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png