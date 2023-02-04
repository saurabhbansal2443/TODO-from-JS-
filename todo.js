let inputTag=document.querySelector("input");
let ulTag=document.querySelector("ul");
inputTag.addEventListener("keydown",function(e){
    console.log(e);
    let key =e.key;
    if(key=='Enter' && inputTag.value.length!=0 ){
        let value=inputTag.value;
        inputTag.value="";
        let liTag=document.createElement('li');
        liTag.innerHTML=`<div> ${value} </div>
                         <div class="delete"><i class="fa fa-trash"></i></div>`
        handleRemoval(liTag);
        ulTag.appendChild(liTag);
    }
})

function handleRemoval(liTag){
    let deleteDiv=liTag.querySelector(".delete");
    deleteDiv.addEventListener("click",function(){
        liTag.remove();
    })
}