export const Router=(routes)=>{
    window.location.href="#/";
 window.addEventListener('hashchange',()=>{
    const url=window.location.hash;
     let contents=[];
     let newRoute='';
     routes.map((route)=>{
      
         newRoute=`#${route.pathName}`;
         contents[newRoute]=route.viewName;
      
     })
     
    let view=document.getElementById('viewRouter')
    
     if(url===newRoute){
         view.innerHTML='';
       
         view.appendChild(contents[url]);
       
     } 
     else if ( url==='' || url==='#/') {
        view.innerHTML='';
        
         view.appendChild(contents['#/']);
     } 
         
 
    })
 
}