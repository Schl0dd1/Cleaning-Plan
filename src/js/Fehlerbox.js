class Fehlerbox {
    constructor(fehler) {
        this._fehler = fehler;
    }

html_generieren() {
    this.remove_fehler();
    let input = document.getElementById("new_task");
    input.setAttribute("class","fehler");

    let fehlerbox = document.createElement("div");
    fehlerbox.setAttribute("class","fehler");
    fehlerbox.setAttribute("id","fehlerbox");
    fehlerbox.innerText = this._fehler;

    let anker = document.querySelector(".eingabeformular");
    anker.insertAdjacentElement("beforeend", fehlerbox);


}

remove_fehler() {
    let input = document.getElementById("new_task");
    input.removeAttribute("class","fehler");
    let fehlerbox = document.getElementById("fehlerbox")
    if (fehlerbox !== null) {
        fehlerbox.parentNode.removeChild(fehlerbox);
    }
    

}

}