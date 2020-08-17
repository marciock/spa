import {Router} from './router.js';



let Home=document.createElement('home-page');
let Contatos=document.createElement('n-contatos');



let routes=[
    {
        pathName:'/',
        viewName: Home
    },
    {
        pathName:'/contatos',
        viewName: Contatos
    }
]
//console.log(Contatos)
export default Router(routes);