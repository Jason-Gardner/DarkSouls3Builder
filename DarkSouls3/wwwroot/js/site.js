// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function updateWeapon(item) {

}

function updateArmor(item) {

}

function updateRing(item) {

}

function newClass(myClass) {
    var x = document.getElementById("class").value;

    $.ajax({
        url: '/Home/Character',
        data: { class: x },
        success: function (data) {}
        }); 
}
