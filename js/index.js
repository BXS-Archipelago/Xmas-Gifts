
var names = ["name1", "name2", "name3", "name4", "name", "name6", "name7", "name8", "name9","name10","name11","name12","name13",
    "name14","name15","name16","name17","nam18","name19","name20","name21","name22","name23","name24","name25","name26","name27", ]


window.onload = function () {
        var tblFruits = document.getElementById("tblFruits");
        var chks = tblFruits.getElementsByTagName("INPUT");
        for (var i = 0; i < chks.length; i++) {
            chks[i].onclick = function () {
                for (var i = 0; i < chks.length; i++) {
                    if (chks[i] != this && this.checked) {
                        chks[i].checked = false;
                    }
                }
            };
        }
    };