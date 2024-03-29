import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()

@Component({
    selector: 'app-langage',
    templateUrl: './langage.component.html',
    styleUrls: ['./langage.component.sass']
})

// @NgModule({
//     providers: [
//         {
//             provider: animation-page,
//             useClass: animation-page
//         }
//     ]
// })

export class LangageComponent implements OnInit {
    mobile: Boolean;
    checked: Boolean;
    previousIndex: number;


    constructor() {
        this.mobile = this.testMobile();
        this.checked = false;
        this.previousIndex = -1;
    }

    ngOnInit(): void {
        this.page();
    }

    testMobile(): Boolean {
        if ((navigator.userAgent.indexOf("Mobi") !== -1)) {
            return true;
        }
        else {
            this.checked = false;
            return false;
        }
    }

    notHover(index: number): void {

        if (this.mobile) {
            if (this.checked) {
                this.checked = false;
                this.notHoverBase();
            }
            else {
                this.checked = true;
                this.notHoverAccent(index);
            }
        }
        this.previousIndex = index;
        return;
    }

    notHoverAccent(index: number): void {
        let hello = document.getElementsByClassName("hello") as HTMLCollectionOf<HTMLElement>;

        hello[index].style.display = "block";
        return;
    }

    notHoverBase(): void {
        let hello = document.getElementsByClassName("hello") as HTMLCollectionOf<HTMLElement>;

        hello[this.previousIndex].style.display = "none";
        return;
    }

    page(): void {
        let block = document.getElementsByClassName("block") as HTMLCollectionOf<HTMLElement>;

        if (navigator.userAgent.indexOf("Firefox") > -1) {
            this.animatePageF(block[0]);
        }
        else {
            this.animatePageAll(block[0]);
        }
    }

    animatePageF(el: HTMLElement): void {
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
        ], 1500)
        return;
    }

    animatePageAll(el: HTMLElement): void {
        let interval: any = null;
        let s = 0.1;
        clearInterval(interval);
        interval = setInterval(frame, 9);
        function frame() {
            if (s >= 1) {
                clearInterval(interval);
            }
            else {
                el.style.transform = "scale(" + s + ")";
                el.style.opacity = s + "";
                s = s + 0.01;
            }
        }
        return;
    }

    // public frTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;

    //     title1.innerText = "LANGAGE";
    //     return;
    // }

    // public enTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;

    //     title1.innerText = "LANGUAGE";
    //     return;
    // }
}

