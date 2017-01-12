var panels = document.querySelectorAll('.panel');


for(var i = 0; i < panels.length; i++) {
    panels[i].addEventListener("click", function(e) {
        //collapse all other panels to flex 1
        var parent = e.srcElement.parentElement.classList[1];
        var panel = document.querySelector(`.${parent}`);
        panel.style.flex = 2;
    });
}

//slide text in and out
//<p> 1 and 3 should not be visible until the panel is clicked