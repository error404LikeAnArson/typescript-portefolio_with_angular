
var closeNav: Boolean

function exportClose(close: Boolean) {
    closeNav = close;
    console.log("data");
    console.log(closeNav);
    return;
}

function importClose(): Boolean { 
    return closeNav;
}