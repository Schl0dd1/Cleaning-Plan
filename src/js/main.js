let taskliste= new Taskliste();
taskliste.wiederherstellen();


let eingabeformular = new Eingabeformular();
eingabeformular.show();

let fehlerbox;

eintraege_erzeugen = () => {

    for (eintrag of (taskliste.show())) {
        let task = new Eintrag(eintrag);
        task.eintrag_in_liste( task.eintrag_erzeugen());
    }
};
eintraege_erzeugen();    

neuer_task = () => {
        let fehler = eingabeformular.formulardaten_validieren();
        if (fehler.length === 0) {
            fehlerbox_entfernen();
            taskliste.neuer_task_zu_liste();
            alle_eintraege_entfernen();
            eintraege_erzeugen();
            taskliste.speichern();
        } else {
            fehlerbox_generieren(fehler);
        }
    } 

//move to class Eingabeformular?
fehlerbox_generieren = (fehler_array) => {
    fehlerbox = new Fehlerbox(fehler_array.toString());
    fehlerbox.html_generieren();
    
}

//move to class Eingabeformular?
fehlerbox_entfernen = () => {
    if (fehlerbox !== undefined) {
        fehlerbox.remove_fehler();
        fehlerbox = undefined;
    }
}

alle_eintraege_entfernen = () => {
    let c_rot = document.getElementById("rot");
    let c_gelb = document.getElementById("gelb");
    let c_gruen = document.getElementById("gruen");
    c_rot.innerHTML = '';
    c_gelb.innerHTML = '';
    c_gruen.innerHTML = '';
    
};


großes_update = () => {
taskliste.taskliste_updaten();
alle_eintraege_entfernen();
eintraege_erzeugen();
taskliste.speichern();
};




