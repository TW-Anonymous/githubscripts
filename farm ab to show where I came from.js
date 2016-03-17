/* function farming() {*/
function switchVillage() {
    var player = window.game_data.player.id;
    var sitter = window.location.href.match(/t\=\d+/i);
    window.location = "game.php?village=n" + window.game_data.village.id + "&screen=" + window.game_data.screen + "&t='search_for'" + player + (sitter ? ("&" + sitter) : "")
}

function send() {
    var farmRunA = document.getElementsByClassName('farm_icon_a');
    var farmRunB = document.getElementsByClassName('farm_icon_b');
    var testA = (farmRunA[index]).getAttribute('class');
    var testB = (farmRunB[index]).getAttribute('class');
    var lc = document.getElementById('light').innerHTML;
    var hc = document.getElementById('heavy').innerHTML;
    var rows = document.getElementById('plunder_list').getElementsByTagName('tr').length - 1;
    if (index >= rows && lc < 3 && hc < 7) {
        clearInterval(timer);
        switchVillage();
    };
    if (testA.indexOf('locked') !== -1 &&
        testB.indexOf('locked') !== -1) {
        clearInterval(timer);
    }
    if (lc > 2 || hc > 6) {
        if (testA.indexOf('locked') == -1) {
            farmRunA[index].click()
            index++

        } else if (testB.indexOf('locked') == -1) {
            farmRunB[index].click()
            index++
        } else if (lc < 3 && hc < 7) {
            switchVillage()
        } else if (testA.indexOf('locked') !== -1) {
            switchVillage();
        }
    }
}


var index = 1;

/*gets the lc count from page*/
var lc = document.getElementById('light').innerHTML;
var hc = document.getElementById('heavy').innerHTML;

if (lc < 3 && hc < 7) {
    switchVillage();
} else if (lc > 2 || hc > 6) {}
var timer = setInterval(send, 206);