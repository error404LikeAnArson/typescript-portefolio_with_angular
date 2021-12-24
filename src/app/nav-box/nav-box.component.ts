import { Component, OnInit, Injectable, OnChanges, Output, EventEmitter } from '@angular/core';

@Injectable()

@Component({
    selector: 'app-nav-box',
    templateUrl: './nav-box.component.html',
    styleUrls: ['./nav-box.component.sass']
})



export class NavBoxComponent implements OnInit {
    protected closeNav: Boolean;
    protected statNav: number;
    protected lang: Boolean;

    constructor() {
        this.closeNav = false;
        this.statNav = 0;
        this.lang = true;
    }

    // @Output() langEvent: EventEmitter<Boolean> = new EventEmitter();

    ngOnInit(): void {
        let test = window.location.pathname;
        if (test.includes("-en")) {
            this.lang = false;
        }
    }

    ngOnChanges(): void { 
        // this.addLangEvent();
    }

    // addLangEvent(): void {
    //     this.langEvent.emit(this.lang);
    //     return;
    // }


    private closeChange(): void {
        let navBox = document.getElementsByClassName("navBox") as HTMLCollectionOf<HTMLElement>;

        if (window.innerWidth <= 700) {
            if (!this.closeNav) {
                navBox[0].style.transitionTimingFunction = "ease-out";
                navBox[0].style.transition = "0.4s";

                navBox[0].style.backgroundColor = "rgb(50, 50, 50, 0.800)";
            }
            else {
                navBox[0].style.transitionTimingFunction = "ease-out";
                navBox[0].style.transition = "0.4s";

                navBox[0].style.backgroundColor = "rgb(0, 0, 0, 0.000)";
            }
        }
        else {
            navBox[0].style.backgroundColor = "rgb(0, 0, 0, 0.000)";
        }

        return;
    }

    public setLangFr(langFr: Boolean): void {
        this.lang = langFr;
        return;
    }

    public getLangFr(): Boolean {
        return this.lang;
    }

    public setStat(stat: number): void {
        this.statNav = stat;
        return;
    }

    public getStat(): number {
        return this.statNav;
    }

    public setClose(close: Boolean): void {
        this.closeNav = close;

        this.closeChange();
        return;
    }

    public getClose(): Boolean {
        return this.closeNav;
    }
}
