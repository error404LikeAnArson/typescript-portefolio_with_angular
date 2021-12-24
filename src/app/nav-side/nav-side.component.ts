import { Component, Input, OnChanges, SimpleChanges, OnInit, Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()

@Component({
    selector: 'app-nav-side',
    templateUrl: './nav-side.component.html',
    styleUrls: ['./nav-side.component.sass']
})

export class NavSideComponent implements OnInit {
    protected close: Boolean;
    protected stat: number;
    protected langFr: Boolean;

    @Input() closeNav: Boolean = false;
    @Input() statNav: number = 0;

    @Output() langEvent: EventEmitter<Boolean> = new EventEmitter();

    constructor() {
        this.close = false;
        this.stat = 0;
        this.langFr = true;
    }

    ngOnInit(): void {
        let test = window.location.pathname;
        if (test.includes("-en")) {
            this.langFr = false;
        }
        this.addLangEvent();
    }

    addLangEvent(): void {
        this.langEvent.emit(this.langFr);
        return;
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.close = this.closeNav;
        this.stat = this.statNav;

        let navSide = document.getElementById("side") as HTMLElement;


        if (window.innerWidth > 700) {
            if (!this.close && this.stat === 0) {
                navSide.style.transitionTimingFunction = "ease-out";
                navSide.style.transition = "0.4s";
                navSide.style.backgroundColor = "rgb(50, 50, 50, 0.800)";
            }
            else {
                navSide.style.transitionTimingFunction = "ease-out";
                navSide.style.transition = "0.4s";
                navSide.style.backgroundColor = "rgb(0, 0, 0, 0.000)";
            }
        }
    }

    langFR(): void {
        this.langFr = true;
        this.addLangEvent();
        return;
    }

    langEN(): void {
        this.langFr = false;
        this.addLangEvent();
        return;
    }

    public getLangFr(): Boolean {
        return this.langFr;
    }
}
