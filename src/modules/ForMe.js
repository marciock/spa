export const ForMe=(data)=>{
    
    
        const forMe=document.querySelector('[for-me]');
        const bindMe=document.querySelector('[bind-me]');
       // const father=bindMe.parent;
        console.log(forMe)
        const db=data;
        let content='';
        forMe.innerHTML='';
        
            //console.log(b)
            
            db.forEach((d)=>{
               // console.log(d['name'])

               bindMe.innerHTML=d[bindMe.getAttribute('bind-me')]
                 forMe.innerHTML +=bindMe.outerHTML;
               
                 
            })
            
       
       
        //db=[];
}
    
    
    
