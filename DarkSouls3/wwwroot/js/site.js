var newClass = {
    start: "Knight",
    level: 1,
    strength: 1,
    dexterity: 1,
    vigor: 1,
    intelligence: 1,
    endurance: 1,
    vitality: 1,
    luck: 1,
    faith: 1,
    attunement: 1
};

//function generateTableHead(table, data) {
//    let thead = table.createTHead();
//    let row = thead.insertRow();
//    for (let key of data) {
//        let th = document.createElement("th");
//        let text = document.createTextNode(key);
//        th.appendChild(text);
//        row.appendChild(th);
//    }
//}

let table = document.querySelector("table");

table.addEventListener('load', newCharacter(table, newClass));

function newCharacter(table, data) {
    for (key in data)
    {
        let row = table.insertRow();
        let cellTitle = row.insertCell(0);
        let cellValue = row.insertCell(1);
        let textTitle = document.createTextNode([key]);
        let textValue = document.createTextNode(data[key]);
        cellTitle.appendChild(textTitle);
        cellValue.appendChild(textValue);
    }
}

document.getElementById("btn").addEventListener('click', updateCharacter());

function updateCharacter(table, data) {
    
}






