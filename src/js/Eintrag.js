class Eintrag {

    constructor (eintrag) {
        this._eintrag = eintrag;
    }

    eintrag_erzeugen() {
        
        let container = document.createElement("div");
        container.setAttribute("class","eintraege");
        container.setAttribute("id",`${eintrag.name}`);

        container.innerHTML = `
        <form id="checkbox_${eintrag.name}" action="#" method="get"></form>  
        <div id="label">${eintrag.name}</div> 
        <div id="auswahl ${eintrag.name}"> 
            <input id="radio-label" type="radio" name="putzstatus_${eintrag.name}" value="sauber" form="checkbox_${eintrag.name}" >Sauber </br>
            <input id="radio-label" type="radio" name="putzstatus_${eintrag.name}" value="geht_so" form="checkbox_${eintrag.name}">Geht so..</br>
            <input id="radio-label"  type="radio" name="putzstatus_${eintrag.name}" value="dreckig" form="checkbox_${eintrag.name}">Oh no!
        </div> 
        <div>
            <button type="button" onclick="großes_update()">
            Update!
            </button>
        </div>`;
        return container;

  
    }
    //funktioniert nicht mit dem switch-case!!!
    eintrag_in_liste(container) {
        let anker;
        
        if (this._eintrag.putzstatus === "sauber") {
            container.setAttribute("style", "background-color: #059b73;");
            anker = document.querySelector("#gruen"); 
            anker.insertAdjacentElement("beforeend",container);
        } else if (this._eintrag.putzstatus === "geht_so") {
            container.setAttribute("style", "background-color: #eba608;"); 
            anker = document.querySelector("#gelb"); 
            anker.insertAdjacentElement("beforeend",container);
        } else {
            container.setAttribute("style", "background-color:#e7073c;");
            anker = document.querySelector("#rot"); 
            anker.insertAdjacentElement("beforeend",container);
        }
    }

}
