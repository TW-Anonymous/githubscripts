function isLocked (button) {
   return button.indexOf('locked') !== -1;
}

function switchVillage() {
    var player = window.game_data.player.id;
    var sitter = window.location.href.match(/t\=\d+/i);
    window.location = "game.php?village=n" + window.game_data.village.id + "&screen=" + window.game_data.screen + "&t='search_for'" + player + (sitter ? ("&" + sitter) : "")
}

function send() {
    var farmRunA = document.getElementsByClassName('farm_icon_a');
    var farmRunB = document.getElementsByClassName('farm_icon_b');
    var testA = farmRunA[index].getAttribute('class');
    var testB = farmRunB[index].getAttribute('class');
    var lc = document.getElementById('light').innerHTML;
    var hc = document.getElementById('heavy').innerHTML;
    var rows = document.getElementById('plunder_list').getElementsByTagName('tr').length - 1;

    // if we're at the bottom of the page AND either of the buttons are locked
    if (index >= rows && (isLocked(testA) || isLocked(testB))){
        clearInterval(timer);
        window.location.href = $('strong.paged-nav-item').next().attr('href')
    // if we're at the bottom of the page OR both of the buttons are locked
    } else if ( index >= rows || (isLocked(testA) && isLocked(testB))){
        clearInterval(timer);
        switchVillage();
    }

    if (!isLocked(testA) &&
	!isLocked(testB)) {
        clearInterval(timer);
		switchVillage();
    }

    if (!isLocked(testA)) {
        farmRunA[index].click();
        index++;
    } else if (!isLocked(testB)) {
        farmRunB[index].click();
        index++;
    } else window.location.href = $('strong.paged-nav-item').next().attr('href')
}


var index = 1;

//gets the lc count from page

/* if (isLocked(testA) &&
	isLocked(testB)) {
    switchVillage(); */
/* } else if (!isLocked(testA) ||
	!isLocked(testB)) { */
   var timer = setInterval (send, 206);
/*}*/


//window.location.href = $('strong.paged-nav-item').next().attr('href')