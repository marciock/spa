export class Icons extends HTMLElement{
    constructor(){
        super();
       

    }
    connectedCallback(){
        const row=document.createElement('div');
        row.classList.add('row');

            let template=`

                <div class="col-sm-"  for-me>
                 <img  id="image-icon"  bind-me="img"/>
                 <h4 id="text-icon" class="text-center" bind-me="text"></h4>
                </div>

            
            `
            row.innerHTML=template;
            

            

            this.appendChild(row);
    }
}

// https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png