
function bhAnime(bh, xBH) {

    for (i = 0; i < bh.length; i++) {
        bh[i].style.height = "25%";
        bh[i].style.width = "auto";
        bh[i].style.position = "absolute";
        bh[i].style.bottom = "5px";
        bh[i].style.cursor = "not-allowed";
    }

    bh[0].style.left = "5px";

    let interval = null;
    let i = 0, j = 5, k = 0, l = 0, timeout;
    let sens = new Boolean(true);

    if (navigator.userAgent.indexOf("Firefox") > -1) {
        timeout = 5;
    }
    else {
        timeout = 10;
    }


    // if (screen.matches) {
    //     xBH = 0.8 * xScreen;
    // }
    // else {
    //     if (screen3.matches) {
    //         xBH = 0.5 * xScreen;
    //     }
    //     else {
    //         xBH = 0.64 * xScreen;
    //     }
    // }

    clearInterval(interval);
    interval = setInterval(frame, timeout);
    function frame() {
        if (j >= xBH) {
            for (i = 0; i < bh.length; i++) {
                bh[i].style.transform = "rotateY(180deg)";
            }
            clearInterval(interval);
            interval = setInterval(frame2, timeout);
            function frame2() {
                if (j <= 0) {
                    for (i = 0; i < bh.length; i++) {
                        bh[i].style.transform = "rotateY(360deg)";
                    }
                    clearInterval(interval);
                    interval = setInterval(frame, timeout);
                }
                else {
                    j = j - 2;
                    if (!(l % 4)) {
                        bh[k].style.display = "none";
                        if (k === 6) {
                            sens = false;
                        }
                        if (k === 0) {
                            sens = true;
                        }
                        if (sens) {
                            k++;
                        }
                        else {
                            k--;
                        }
                        bh[k].style.display = "block";
                    }
                    bh[k].style.left = j + "px";
                    l++;
                }
            }
        }
        else {
            j = j + 2;
            if (!(l % 4)) {
                bh[k].style.display = "none";
                if (k === 6) {
                    sens = false;
                }
                if (k === 0) {
                    sens = true;
                }
                if (sens) {
                    k++;
                }
                else {
                    k--;
                }
                bh[k].style.display = "block";
            }
            bh[k].style.left = j + "px";
            l++;
        }

    }
    return;
}

function animePage(el) {
    let interval = null;
    let s = 0.1;
    clearInterval(interval);
    interval = setInterval(frame, 9);
    function frame() {
        if (s >= 1) {
            clearInterval(interval);
        }
        else {
            el.style.transform = "scale(" + s + ")";
            el.style.opacity = s;
            s = s + 0.01;
        }
    }
    return;
}

function animationClick(el) {
    el.animate([
        {
            opacity: 0,
            scale: 0.1
        },
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 1,
            scale: 1
        },
        {
            opacity: 1,
            scale: 1
        }
    ], 2000)

    return;
}