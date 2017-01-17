var panels = document.querySelectorAll('.panel');
panels.forEach(panel => panel.addEventListener("click", panelClick));

//collapse all other panels to flex 1
function panelClick(e) {

    this.classList.add("open");
    panels.forEach(panel => { if(panel !== this) panel.classList.remove("open") })
}