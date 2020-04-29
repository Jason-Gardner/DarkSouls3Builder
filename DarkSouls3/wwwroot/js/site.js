var sel = document.getElementById("select");
var newClass = document.getElementById("yourClass");
var newLevel = document.getElementById("newLevel");
var newStr = document.getElementById("newStr");
var newDex = document.getElementById("newDex");
var newInt = document.getElementById("newInt");
var newVit = document.getElementById("newVit");
var newVig = document.getElementById("newVig");
var newAtt = document.getElementById("newAtt");
var newEnd = document.getElementById("newEnd");
var newLuck = document.getElementById("newLuck");
var newFth = document.getElementById("newFth");

var getWeapon = document.getElementById("weapon");
var getShield = document.getElementById("shield");
var getHelm = document.getElementById("helm");
var getGloves = document.getElementById("gloves");
var getBoots = document.getElementById("boots");
var getArmor = document.getElementById("armor");

var newWeapon = document.getElementById("newWeapon");
var newShield = document.getElementById("newShield");
var newHelm = document.getElementById("newHelm");
var newGloves = document.getElementById("newGloves");
var newBoots = document.getElementById("newBoots");
var newArmor = document.getElementById("newArmor");

var show = document.getElementById("selected");

var load = document.getElementById("load");

var stats;

var weaponStats;

function display() {
    if (sel.value == "") {
        newClass.innerHTML = " ------- ";
    } else {
        newClass.innerHTML = sel.value;

        stats = createBuild(sel.value);
        newLevel.innerHTML = stats.level;
        newStr.innerHTML = stats.str;
        newDex.innerHTML = stats.dex;
        newInt.innerHTML = stats.int;
        newVit.innerHTML = stats.vit;
        newVig.innerHTML = stats.vig;
        newAtt.innerHTML = stats.att;
        newLuck.innerHTML = stats.luck;
        newEnd.innerHTML = stats.end;
        newFth.innerHTML = stats.fth;
    }
}

function change() {
    if (stats == null) {
        alert("Please select a class.");
    } else {
        newWeapon.innerHTML = getWeapon.value;
        newArmor.innerHTML = getArmor.value;
        newBoots.innerHTML = getBoots.value;
        newShield.innerHTML = getShield.value;
        newGloves.innerHTML = getGloves.value;
        newHelm.innerHTML = getHelm.value;

        weaponStats = checkWeapon(getWeapon.value);
        armorStats = checkArmor(getBoots.value, getHelm.value, getGloves.value, getShield.value, getArmor.value);

        load.innerHTML = "Load: " + (weaponStats.load + armorStats) + " / 50";

        if (stats.str < weaponStats.wstr || stats.dex < weaponStats.wdex || stats.fth < weaponStats.wfth || stats.int < weaponStats.wint) {
            show.innerHTML = "You do not have the appropriate stats for this weapon.";
        } else {
            show.innerHTML = "";
        }
    }

}

function checkWeapon(weapon) {
    if (weapon == "") {
        weaponStats = {
            wstr: 0,
            wdex: 0,
            wfth: 0,
            wint: 0,
            load: 0
        };
    }

    if (weapon == "Longsword") {
        weaponStats = {
            wstr: 10,
            wdex: 10,
            wfth: 0,
            wint: 0,
            load: 3.0
        };
    }

    if (weapon == "Bandit's Knife") {
        weaponStats = {
            wstr: 6,
            wdex: 12,
            wfth: 0,
            wint: 0,
            load: 1.5
        };
    }

    if (weapon == "Sorcerer's Staff") {
        weaponStats = {
            wstr: 6,
            wdex: 0,
            wfth: 0,
            wint: 10,
            load: 2.0
        };
    }


    return weaponStats;
}

function checkArmor(boots, helm, gloves, shield, armor) {
    var weight = 0;

    if (boots == "Black Leather Boots") {
        weight += 3.6;
    } else if (boots == "Conjurator Boots") {
        weight += 2.6;
    } else if (boots == "Deacon Skirt") {
        weight += 2.3;
    }

    if (helm == "Black Knight Helm") {
        weight += 5.4;
    } else if (helm == "Hood of Prayer") {
        weight += 1.3;
    } else if (helm == "Iron Helm") {
        weight += 5.8;
    }

    if (gloves == "Black Knight Gauntlets") {
        weight += 3.9;
    } else if (gloves == "Herald Gloves") {
        weight += 2.9;
    } else if (gloves == "Shadow Gauntlets") {
        weight += 1.3;
    }

    if (armor == "Havel's Armor") {
        weight += 21.6;
    } else if (armor == "Pontiff Knight Armor") {
        weight += 7.3;
    } else if (armor == "Deacon Robe") {
        weight += 3.5;
    }

    if (shield == "Grass Crest Shield") {
        weight += 4.5;
    } else if (shield == "Twin Dragon Greatshield") {
        weight += 7.0;
    } else if (shield == "Shield of Want") {
        weight += 5.5;
    }

    

    return weight;
}

function createBuild(start) {
    if (start == "") {
        stats = {
            level: 0,
            str: 0,
            vit: 0,
            dex: 0,
            int: 0,
            fth: 0,
            luck: 0,
            att: 0,
            vig: 0,
            end: 0
        };
    }

    if (start == "Knight") {
        stats = {
            level: 9,
            str: 13,
            vit: 15,
            dex: 12,
            int: 9,
            fth: 9,
            luck: 7,
            att: 10,
            vig: 12,
            end: 11
        };
    }

    if (start == "Cleric") {
        stats = {
            level: 7,
            str: 12,
            vit: 7,
            dex: 8,
            int: 7,
            fth: 16,
            luck: 13,
            att: 14,
            vig: 7,
            end: 9
        };
    }
    if (start == "Mercenary") {
        stats = {
            level: 8,
            str: 10,
            vit: 10,
            dex: 16,
            int: 10,
            fth: 8,
            luck: 9,
            att: 12,
            vig: 11,
            end: 11
        };
    }
    if (start == "Sorcerer") {
        stats = {
            level: 6,
            str: 7,
            vit: 7,
            dex: 12,
            int: 16,
            fth: 7,
            luck: 12,
            att: 16,
            vig: 9,
            end: 9
        };
    }
    if (start == "Pyromancer") {
        stats = {
            level: 8,
            str: 12,
            vit: 8,
            dex: 9,
            int: 14,
            fth: 14,
            luck: 7,
            att: 12,
            vig: 11,
            end: 10
        };
    }
    if (start == "Herald") {
        stats = {
            level: 9,
            str: 12,
            vit: 12,
            dex: 11,
            int: 8,
            fth: 13,
            luck: 11,
            att: 10,
            vig: 12,
            end: 9
        };
    }
    if (start == "Warrior") {
        stats = {
            level: 7,
            str: 16,
            vit: 11,
            dex: 9,
            int: 8,
            fth: 9,
            luck: 7,
            att: 6,
            vig: 14,
            end: 12
        };
    }
    if (start == "Thief") {
        stats = {
            level: 5,
            str: 9,
            vit: 9,
            dex: 13,
            int: 10,
            fth: 8,
            luck: 14,
            att: 11,
            vig: 10,
            end: 10
        };
    }
    if (start == "Assassin") {
        stats = {
            level: 10,
            str: 10,
            vit: 14,
            dex: 12,
            int: 11,
            fth: 9,
            luck: 10,
            att: 14,
            vig: 10,
            end: 11
        };
    }

    if (start == "Deprived") {
        stats = {
            level: 1,
            str: 10,
            vit: 10,
            dex: 10,
            int: 10,
            fth: 10,
            luck: 10,
            att: 10,
            vig: 10,
            end: 10
        };
    }

    return stats;
}





