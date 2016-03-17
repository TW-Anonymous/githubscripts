(function () {

    var index, timer;

    function isLocked (button) {
       return button.getAttribute('class').indexOf('locked') !== -1;
    }

    function gotoNextPage() {
        var nextPage = $('strong.paged-nav-item').next().attr('href');
        clearInterval(timer);
        if (nextPage != undefined) {
            window.location.href = nextPage;
        }
    }

    function switchVillage() {
        var player = window.game_data.player.id;
        var sitter = window.location.href.match(/t\=\d+/i);
        clearInterval(timer);
        window.location = "game.php?village=n" + window.game_data.village.id + "&screen=" + window.game_data.screen + "&t='search_for'" + player + (sitter ? ("&" + sitter) : "") + "&Farm_page=0"

    }

    function send() {
        var farmRunA = document.getElementsByClassName('farm_icon_a'),
            farmRunB = document.getElementsByClassName('farm_icon_b');
        var buttonA = farmRunA[index],
            buttonB = farmRunB[index];
        var rows = document.getElementById('plunder_list').getElementsByTagName('tr').length - 1;

        if (isLocked(buttonA) && isLocked(buttonB)) {
            switchVillage();
        } else if (index >= rows && (!isLocked(buttonA) || !isLocked(buttonB))){
            gotoNextPage();
        } else {
            if (!isLocked(buttonA)) {
                buttonA.click();
            } else if (!isLocked(buttonB)) {
                buttonB.click();
            }
            index++;
        }
    }


    index = 1;
    timer = setInterval (send, 210);
})();//to make it update