let form = document.querySelector("form","eingabeformular");

const raeume = [{
    name: "Küche",
    putzstatus: "sauber",
},

{
    name: "Flur",
    putzstatus: "sauber",
},

{
    name: "Badezimmer",
    putzstatus: "sauber",
},
{
    name: "Schlafzimmer",
    putzstatus: "sauber",
}];

//wird mit Button "Task hinzufügen" ausgeführt
function neuer_task_zu_liste() {
    let inputVal = document.querySelector("#new_task").value;
    console.log(inputVal);
    let new_object = {name: inputVal, putzstatus: "dreckig"};
    raeume.push(new_object);
    alle_elemente_entfernen();
    liste_anzeigen();
    document.getElementById('new_task').value = "";
};


//welcher Radio-button wurde gewählt? liste raeume.putzstatus wird upgedatet;
function raeume_updaten() {
    
    for (object of raeume) {
        
        let ele = document.getElementsByName(`putzstatus_${object.name}`);
        
        for(i = 0; i < ele.length; i++) {
		    if(ele[i].checked) {
                    object.putzstatus= ele[i].value;
                
            } 
	    }   
    }
    
};

//html generieren: 
function liste_anzeigen() {

    for (eintrag of raeume) {
        let container = document.createElement("div");
        container.setAttribute("class","eintraege");
        container.setAttribute("id",`${eintrag.name}`);

        container.innerHTML = `
        <form id="checkbox_${eintrag.name}" action="#" method="get"></form>  
        <div id="label">${eintrag.name}</div> 
        <div id="auswahl ${eintrag.name}"> 
            <input type="radio" name="putzstatus_${eintrag.name}" value="sauber" form="checkbox_${eintrag.name}" >Sauber </br>
            <input type="radio" name="putzstatus_${eintrag.name}" value="geht_so" form="checkbox_${eintrag.name}">Geht so..</br>
            <input type="radio" name="putzstatus_${eintrag.name}" value="dreckig" form="checkbox_${eintrag.name}">Oh no!
        </div> 
        <div>
            <button type="button" onclick="großes_update()">
            Update!
            </button>
        </div>`;

        let anker = document.querySelector("#gruen");

        switch(eintrag.putzstatus) {
            case "sauber":
                container.setAttribute("style", "background-color: #059b73;"); 
                anker.insertAdjacentElement("beforeend",container);
                continue;
            case "geht_so": 
                container.setAttribute("style", "background-color: #eba608;"); 
                anker = document.querySelector("#gelb"); 
                anker.insertAdjacentElement("beforeend",container);
                continue;
            case "dreckig":
                container.setAttribute("style", "background-color:#e7073c;"); 
                anker = document.querySelector("#rot"); 
                anker.insertAdjacentElement("beforeend",container);
                continue;

        }

    }
};

//funktioniert:))) Kürzer als Schleife:
function alle_elemente_entfernen() {
    let c_rot = document.getElementById("rot");
    let c_gelb = document.getElementById("gelb");
    let c_gruen = document.getElementById("gruen");
    c_rot.innerHTML = '';
    c_gelb.innerHTML = '';
    c_gruen.innerHTML = '';




    //  let container = document.getElementsByClassName("eintraege");

    //  for (c of container) {
    //     c.parentNode.removeChild(c);
    //  };
    
};

liste_anzeigen(); //funktioniert

function großes_update() {
raeume_updaten();
alle_elemente_entfernen();
liste_anzeigen();
};







           