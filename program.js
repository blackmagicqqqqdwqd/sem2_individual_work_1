

function question(idElement){
    
    //(document.getElementsByClassName('button')).hidden = true;
    let item = document.getElementById(idElement);
    if (item != null){
        f2(item.parentElement);
        
    }
 
    (document.getElementsByClassName('button')[0]).remove();
    console.log(document.children[0].innerHTML);
}
function f2(current){
    
    if (current != null && current != document.body.parentElement ){
        
        let newElement = document.createElement(current.firstElementChild.nodeName);
        newElement.innerHTML = "Новый элемент";
        current.appendChild(newElement);
        f2(current.parentElement);
    }
    
    
}

