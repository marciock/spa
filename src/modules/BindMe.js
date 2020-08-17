export const BindMe=(data)=>{
    
    const bindMe=document.querySelectorAll('[bind-me]');
    const db=data;
    
    bindMe.forEach((b)=>{
        //console.log(b)
        db.forEach((d)=>{
            console.log(d['name'])
            b.innerText=d[b.getAttribute('bind-me')]
        })
    })
}
