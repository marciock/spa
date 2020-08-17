export const importHTML=(url)=>{

    let URL=url;
    let el=document.createElement('div');


    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (e)=>{
      
        el.innerHTML=e.target.responseText
        
        
    });
    oReq.open("GET", URL);
    oReq.send();
    return el;
}