import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-sandbox',
    templateUrl: './sandbox.component.html',
    styleUrls: ['./sandbox.component.sass']
})
export class SandboxComponent implements OnInit {

    xBH: number;

    constructor() {
        this.xBH = 5;
    }

    ngOnInit(): void {
        this.bhAnime();
    }

    bhAnime(): void {
        let bh = document.getElementsByClassName("bonhomme") as HTMLCollectionOf<HTMLElement>;
        let interval: any = null;
        let i: number = 0, j: number = 5, k: number = 0, l: number = 0, timeout: number;
        let sens: Boolean = true;
        let xbh: number = this.xBH;

        for (i = 0; i < bh.length; i++) {
            bh[i].style.height = "25%";
            bh[i].style.width = "auto";
            bh[i].style.position = "absolute";
            bh[i].style.bottom = "5px";
            bh[i].style.cursor = "not-allowed";
        }

        bh[0].style.left = "5px";

        xbh = window.innerWidth - 312/2;

        if (navigator.userAgent.indexOf("Firefox") > -1) {
            timeout = 5;
        }
        else {
            timeout = 15;
        }
        clearInterval(interval);
        interval = setInterval(frame, timeout);
        function frame() {
            if (j >= xbh) {
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

}
