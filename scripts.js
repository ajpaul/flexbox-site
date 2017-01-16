var panels = document.querySelectorAll('.panel');

for(var i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", panelClick);
}

//collapse all other panels to flex 1
function panelClick(e) {
    
    var parent = e.srcElement.parentElement.classList[1];
    var panel = document.querySelector(`.${parent}`);
    var node = e.srcElement.parentNode.parentElement.firstElementChild;


    while( node && node.nodeType === 1) {
        node.style.flex = 1;
        node = node.nextElementSibling;
    }

    panel.style.flex = 2; //set clicked panel to flex 2
}