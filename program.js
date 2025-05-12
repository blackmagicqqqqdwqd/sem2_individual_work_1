

function question(idElement){

    let item = document.getElementById(idElement);
    if (item != null){
        f2(item.parentElement);
    }
    (document.getElementsByClassName('button')[0]).remove();

}
function f2(current){
    
    if (current != null && current != document.body.parentElement ){

        let newElement = document.createElement(current.firstElementChild.nodeName);
        newElement.innerHTML = "Новый элемент";
        current.appendChild(newElement);
        f2(current.parentElement);

    }
    
}

