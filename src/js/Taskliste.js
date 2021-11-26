class Taskliste {
    constructor() {
        this._taskliste = [];
    }


    wiederherstellen() {
        let gespeicherte_eintraege = JSON.parse(localStorage.getItem("eintraege"));
        if(gespeicherte_eintraege !== null) {
            gespeicherte_eintraege.forEach( eintrag => {
                let new_object = {name: eintrag.name, putzstatus: eintrag.putzstatus};
                this._taskliste.push(new_object);
            });   
        }
        
    }


speichern(){
    let eintraege_string = JSON.stringify(this._taskliste);
    localStorage.setItem("eintraege",eintraege_string);
}
        

show() {
    return this._taskliste;
}

neuer_task_zu_liste() {
    let inputVal = document.querySelector("#new_task").value;
    let new_object = {name: inputVal, putzstatus: "geht_so"};
    this._taskliste.push(new_object);
    document.getElementById('new_task').value = ""; 
    

    }

taskliste_updaten() {
    for (let object of this._taskliste) {
        
        let ele = document.getElementsByName(`putzstatus_${object.name}`);
        
        for(let i = 0; i < ele.length; i++) {
		    if(ele[i].checked) {
                    object.putzstatus= ele[i].value;
                
            } 
	    }   
    }         
}

}