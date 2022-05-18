
function show(array){
  
    const maindiv=document.createElement("div")
   
    maindiv.classList.add("grid")
    
       array.forEach(element => {
        const div=document.createElement("div")
        div.classList.add("center")
        console.log();
        div.innerHTML=`
        <img src="${element.img}" class="card-img-top wobble-hor-bottom" alt="...">
        <div class="card-body my-2">
          <p class="card-text text-shadow-pop-top">${element.title}</p>
       
      </div>`
      
      maindiv.appendChild(div)
    });
    document.querySelector(".main").appendChild(maindiv)
}

export default show