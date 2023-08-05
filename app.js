let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText=inp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="Delete task";
    delbtn.classList.add("delete");
    li.appendChild(delbtn);
    ul.appendChild(li);
    inp.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});


