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
    protected oldValue: Boolean;

    constructor() {
        this.closeNav = false;
        this.statNav = 0;
        this.lang = true;
        this.oldValue = true;
    }

    // @Output() langEvent: EventEmitter<Boolean> = new EventEmitter();

    ngOnInit(): void {
    }

    ngOnChanges(): void { 
        // if(this.oldValue !== this.lang){
        //     this.addLangEvent();
        // }
    }

    // addLangEvent(): void {
    //     console.log("nav box emit");
    //     console.log(this.lang);
    //     // this.langEvent.emit(this.lang);
    //     return;
    // }

    private statChange(): void {
        switch (this.statNav) {
            case 0:
                this.menuBar()
                break;
            case 1:
                this.menuTerminal();
                break;
            case 2:
                this.menuIcon();
                break;
            default:
                console.error("error in menuForm switch");
                break;
        }
        return;
    }

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

    private menuBar(): void {

        return;
    }

    private menuTerminal(): void {

        return;
    }

    private menuIcon(): void {

        return;
    }

    public setLangFr(langFr: Boolean): void {
        this.oldValue = this.lang;
        this.lang = langFr;
        return;
    }

    public getLangFr(): Boolean {
        return this.lang;
    }

    public setStat(stat: number): void {
        this.statNav = stat;
        this.statChange();
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
