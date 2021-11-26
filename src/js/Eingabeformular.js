class Eingabeformular {

    constructor() {
        this._formular = document.createElement("div");
    
    }

    show() {
        this._formular.setAttribute("class","flex-container");
        this._formular.innerHTML = `
        <form id="new_task_form" action="#">
            <h2>Füge einen neuen Task hinzu:</h2>
            <input type="text" value="...z.B. Fenster" onfocus=" this.value=''" id="new_task">
            <button id="button_form" type="submit" form = "new_task_form" onclick="neuer_task();">Task hinzufügen</button>
        </form> `;
        let anker = document.querySelector(".eingabeformular");

        anker.insertAdjacentElement("afterbegin", this._formular);

   

    }

    //under construction
    formulardaten_validieren() {
        let fehlerarray = [];
        let input = document.querySelector("#new_task").value; 
        if ((taskliste.show())!== null) {
             for (let eintrag of taskliste.show()) {
                if (input === eintrag.name ) {
                    fehlerarray.push("Task bereits vorhanden");
                } else if (input === "") {
                    fehlerarray.push("Trage einen Namen ein");
                }
            }
        }
        return fehlerarray;
        
    }  


}