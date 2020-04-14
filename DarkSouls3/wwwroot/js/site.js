var sel = document.getElementById("select");
var newClass = document.getElementById("yourClass");
var newStr = document.getElementById("newStr");
var newDex = document.getElementById("newDex");
var newInt = document.getElementById("newInt");
var newVit = document.getElementById("newVit");
var newVig = document.getElementById("newVig");
var newAtt = document.getElementById("newAtt");

function display() {
    newClass.innerHTML = sel.value;
    var stats = createBuild(sel.value);
    newStr.innerHTML = stats.str;
    newDex.innerHTML = stats.dex;
    newInt.innerHTML = stats.int;
    newVit.innerHTML = stats.vit;
    newVig.innerHTML = stats.vig;
    newAtt.innerHTML = stats.att;
}

function createBuild(start) {
    var stats;

    if (start == "Knight") {
        stats = {
            str: 5,
            vit: 3,
            dex: 2,
            int: 3,
            att: 2,
            vig: 7
        };
    }

    if (start == "Cleric") {
        stats = {
            str: 2,
            vit: 4,
            dex: 2,
            int: 7,
            att: 4,
            vig: 3
        };
    }

    return stats;
}





