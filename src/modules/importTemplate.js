export const importTemplate=(url)=>{

    let URL=url;
    let el=document.createElement('template');


    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", (e)=>{
      
        el.innerHTML=e.target.responseText
      //  console.log(el)
    });
    oReq.open("GET", URL);
    oReq.send();
    return el;
}