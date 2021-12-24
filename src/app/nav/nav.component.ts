import { Component, OnInit, Output, OnChanges, SimpleChanges, EventEmitter, Injectable, Input } from '@angular/core';

@Injectable()

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
    protected navIndex: number;
    protected initialPathname: string;
    protected initialLocation: string;
    protected close: boolean;
    protected stat: number;
    protected lang: Boolean;

    constructor() {
        this.navIndex = 2;
        this.close = false;
        this.stat = 0;
        this.lang = true;
        this.initialPathname = window.location.pathname;
        this.initialLocation = this.setLocation();
    }

    ngOnInit(): void {
        let test = this.initialPathname;
        if (test.includes("en")) {
            this.lang = false;
            this.langFr = false;
            this.enTranslate();
        }

    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setLangFr();

        if (this.lang) {
            this.frTranslate();
        }
        else {
            this.enTranslate();
        }

    }

    @Input() langFr: Boolean = true;

    @Output() closeEvent: EventEmitter<Boolean> = new EventEmitter();
    @Output() statEvent: EventEmitter<number> = new EventEmitter();

    addStatEvent(): void {
        this.statEvent.emit(this.stat);
        return;
    }

    addCloseEvent(): void {
        this.closeEvent.emit(this.close);
        return;
    }

    private setLocation(): string {
        let tempo = window.location.protocol + "//" + window.location.host + this.initialPathname;

        if (tempo.endsWith('/Langage')) {
            tempo = tempo.substring(0, tempo.length - 8);
        }

        if (tempo.endsWith('/Langage-en')) {
            tempo = tempo.substring(0, tempo.length - 11);
        }

        if (tempo.endsWith('/Framework')) {
            tempo = tempo.substring(0, tempo.length - 10);
        }

        if (tempo.endsWith('/Framework-en')) {
            tempo = tempo.substring(0, tempo.length - 13);
        }

        if (tempo.endsWith('/Projects')) {
            tempo = tempo.substring(0, tempo.length - 9);
        }

        if (tempo.endsWith('/Projects-en')) {
            tempo = tempo.substring(0, tempo.length - 12);
        }

        if (tempo.endsWith('/Pathway')) {
            tempo = tempo.substring(0, tempo.length - 8);
        }

        if (tempo.endsWith('/Pathway-en')) {
            tempo = tempo.substring(0, tempo.length - 11);
        }

        if (tempo.endsWith('/Profile')) {
            tempo = tempo.substring(0, tempo.length - 8);
        }

        if (tempo.endsWith('/Profile-en')) {
            tempo = tempo.substring(0, tempo.length - 11);
        }

        if (tempo.endsWith('/Skills')) {
            tempo = tempo.substring(0, tempo.length - 7);
        }

        if (tempo.endsWith('/Skills-en')) {
            tempo = tempo.substring(0, tempo.length - 10);
        }

        if (tempo.endsWith('/Sandbox')) {
            tempo = tempo.substring(0, tempo.length - 9);
        }

        if (tempo.endsWith('/Sandbox-en')) {
            tempo = tempo.substring(0, tempo.length - 12);
        }

        if (tempo.endsWith('/-en')) {
            tempo = tempo.substring(0, tempo.length - 5);
        }

        return tempo;
    }

    public navSwitch(): void {
        switch (this.navIndex) {
            case 0:
                this.openAndClose();
                break;

            case 1:
                this.menuForm();
                break;

            case 2:
                if (this.lang) {
                    window.location.replace(this.initialLocation);
                }
                else {
                    window.location.replace(this.initialLocation + "/-en");
                }
                break;

            case 3:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Langage");
                }
                else {
                    window.location.replace(this.initialLocation + "/Langage-en");
                }
                break;

            case 4:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Framework");
                }
                else {
                    window.location.replace(this.initialLocation + "/Framework-en");
                }
                break;

            case 5:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Projects");
                }
                else {
                    window.location.replace(this.initialLocation + "/Projects-en");
                }
                break;

            case 6:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Pathway");
                }
                else {
                    window.location.replace(this.initialLocation + "/Pathway-en");
                }
                break;

            case 7:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Profile");
                }
                else {
                    window.location.replace(this.initialLocation + "/Profile-en");
                }
                break;

            case 8:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Skills");
                }
                else {
                    window.location.replace(this.initialLocation + "/Skills-en");
                }
                break;

            case 9:
                if (this.lang) {
                    window.location.replace(this.initialLocation + "/Sandbox");
                }
                else {
                    window.location.replace(this.initialLocation + "/Sandbox-en");
                }
                break;

            default:
                console.error("nav switch error");
                break;
        }
        return;
    }

    public navClick(index: number): void {
        this.navIndex = index;
        this.navSwitch();
        return;
    }

    public setLangFr(): void {
        this.lang = this.langFr;
        return;
    }

    public getClose(): boolean {
        return this.close;
    }

    public getNavIndex(): number {
        return this.navIndex;
    }

    private checkLangFr(): void {
        let tempo = window.location.protocol + "//" + window.location.host + this.initialPathname;
        let test = this.initialPathname;

        if (test.includes("en")) {
            tempo = tempo.substring(0, tempo.length - 3);
            window.location.replace(tempo);
        }
        return;
    }

    private checkLangEn(): void {
        let tempo = window.location.protocol + "//" + window.location.host + this.initialPathname;
        let test = this.initialPathname;

        if (!test.includes("en")) {
            tempo = tempo + "-en";
            window.location.replace(tempo);
        }
        return;
    }

    private frTranslate(): void {
        let langageItem = document.getElementById("langageP") as HTMLElement;
        let projectsItem = document.getElementById("projectsP") as HTMLElement;
        let pathwayItem = document.getElementById("pathwayP") as HTMLElement;
        let profileItem = document.getElementById("profileP") as HTMLElement;
        let skillsItem = document.getElementById("skillsP") as HTMLElement;

        langageItem.innerText = "Langage";
        projectsItem.innerText = "Projets";
        pathwayItem.innerText = "Parcours";
        profileItem.innerText = "Profil";
        skillsItem.innerText = "Qualités";

        this.checkLangFr();
        return;
    }

    private enTranslate(): void {
        let langageItem = document.getElementById("langageP") as HTMLElement;
        let projectsItem = document.getElementById("projectsP") as HTMLElement;
        let pathwayItem = document.getElementById("pathwayP") as HTMLElement;
        let profileItem = document.getElementById("profileP") as HTMLElement;
        let skillsItem = document.getElementById("skillsP") as HTMLElement;

        langageItem.innerText = "Language";
        projectsItem.innerText = "Projects";
        pathwayItem.innerText = "Pathway";
        profileItem.innerText = "Profile";
        skillsItem.innerText = "Qualities";

        this.checkLangEn();
        return;
    }

    private menuForm(): void {
        this.stat = (this.stat + 1) % 3;

        switch (this.stat) {
            case 0:
                this.menuClassic()
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

        this.addStatEvent();
        return;
    }

    private openAndClose(): void {
        let navItems = document.getElementsByClassName("navItems") as HTMLCollectionOf<HTMLElement>;
        let nav = document.getElementById("nav") as HTMLElement;
        let closeItem = document.getElementById("closeItem") as HTMLElement;
        let menuChangeT = document.getElementById("menuChangeT") as HTMLElement;
        let topNav = document.getElementById("topNav") as HTMLElement;


        if (!this.close) {
            this.close = true;

            nav.style.transitionTimingFunction = "ease-out";
            nav.style.transition = "0.4s";

            closeItem.style.backgroundColor = "rgb(50, 50, 50, 0.800)";
            closeItem.style.borderRadius = "40px";

            for (let i = 0; i < navItems.length; i++) {
                navItems[i].style.display = "none";
            }

            if (window.innerWidth > 700) {
                nav.style.backgroundColor = "rgb(0, 0, 0, 0.000)";
            }
            menuChangeT.style.display = "none";
            nav.style.border = "none";
            topNav.style.backgroundColor = "rgb(0, 0, 0, 0)";
            topNav.style.border = "none";
            closeItem.style.minWidth = "90px";

            let supItems = document.getElementsByClassName("supItem") as HTMLCollectionOf<HTMLElement>;
            let infItems = document.getElementsByClassName("infItem") as HTMLCollectionOf<HTMLElement>;

            for (let i = 0; i < supItems.length; i++) {
                supItems[i].style.cursor = "url('assets/images/cursor2.png'), auto";
            }
            for (let i = 0; i < infItems.length; i++) {
                infItems[i].style.cursor = "url('assets/images/cursor2.png'), auto";
            }

            let navImg = document.getElementById("navCloseImg") as HTMLElement;

            navImg.style.marginRight = "10px";
            navImg.style.marginLeft = "10px";

        }
        else {
            nav.style.transitionTimingFunction = "ease-out";
            nav.style.transition = "0.4s";

            this.close = false;
            closeItem.style.backgroundColor = "rgb(0, 0, 0, 0.000)";

            for (let i = 0; i < navItems.length; i++) {
                navItems[i].style.display = "block";
            }

            if (window.innerWidth > 700) {
                nav.style.backgroundColor = "rgb(50, 50, 50, 0.800)";
            }

            switch (this.stat) {
                case 0:
                    this.menuClassic()
                    break;
                case 1:
                    this.menuTerminal();
                    break;
                case 2:
                    this.menuIcon();
                    break;
                default:
                    console.error("error in openClose switch");
                    break;
            }
        }

        this.addCloseEvent();
        return;
    }

    private menuClassic(): void {
        let heightNav = "60px";

        let nav = document.getElementById("nav") as HTMLElement;
        let changeItem = document.getElementById("changeItem") as HTMLElement;
        let menuChangeT = document.getElementById("menuChangeT") as HTMLElement;
        let menuChangeBis = document.getElementById("menuChangeBis") as HTMLElement;
        let topNav = document.getElementById("topNav") as HTMLElement;

        nav.style.position = "relative";
        changeItem.style.display = "block";
        menuChangeT.style.display = "none";
        menuChangeBis.style.display = "none";
        topNav.style.display = "block";


        let supItemDiv = document.getElementById("supItemDiv") as HTMLElement;
        let infItemDiv = document.getElementById("infItemDiv") as HTMLElement;

        if (window.innerWidth > 700) {
            nav.style.gridTemplateColumns = "3fr 7fr";
            nav.style.gridTemplateRows = heightNav + "";
            supItemDiv.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
        else {
            nav.style.gridTemplateColumns = "1fr";
            nav.style.gridTemplateRows = heightNav + " " + heightNav;
            supItemDiv.style.gridTemplateColumns = "20vw 20vw 20vw 1fr";
        }
        infItemDiv.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr 1fr 1fr";

        let icon = document.getElementsByClassName("itemIcon") as HTMLCollectionOf<HTMLElement>;
        let text = document.getElementsByClassName("itemText") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.display = "none";
        }
        for (let i = 0; i < text.length; i++) {
            text[i].style.display = "block";
        }

        nav.style.width = "auto";
        nav.style.borderRadius = "0";

        nav.style.backgroundColor = "rbg(0, 0, 0, 0)";
        nav.style.color = "white";
        nav.style.border = "none";
        nav.style.textAlign = "center";

        if (window.innerWidth > 700) {
            nav.style.backgroundColor = "rgb(50, 50, 50, 0.800)";
        }

        topNav.style.backgroundColor = "rgb(0, 0, 0, 0)";
        topNav.style.border = "none";


        let supItems = document.getElementsByClassName("supItem") as HTMLCollectionOf<HTMLElement>;
        let infItems = document.getElementsByClassName("infItem") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < supItems.length; i++) {
            supItems[i].style.cursor = "url('../../assets/images/pointer.cur'), pointer";
        }
        for (let i = 0; i < infItems.length; i++) {
            infItems[i].style.cursor = "url('../../assets/images/pointer.cur'), pointer";
        }

        return;
    }

    private menuTerminal(): void {
        let heightNav = "60px";

        let nav = document.getElementById("nav") as HTMLElement;
        let changeItem = document.getElementById("changeItem") as HTMLElement;
        let menuChangeT = document.getElementById("menuChangeT") as HTMLElement;
        let menuChangeBis = document.getElementById("menuChangeBis") as HTMLElement;
        let topNav = document.getElementById("topNav") as HTMLElement;

        nav.style.position = "absolute";
        changeItem.style.display = "none";
        if (!this.close) {
            menuChangeT.style.display = "block";
            menuChangeBis.style.display = "block";
        }
        else {
            menuChangeT.style.display = "none";
            menuChangeBis.style.display = "none";
        }
        topNav.style.display = "grid";
        topNav.style.gridTemplateColumns = "auto auto";


        let supItemDiv = document.getElementById("supItemDiv") as HTMLElement;
        let infItemDiv = document.getElementById("infItemDiv") as HTMLElement;

        nav.style.gridTemplateColumns = "1fr";
        nav.style.gridTemplateRows = "2fr 7fr";
        supItemDiv.style.gridTemplateColumns = "1fr";
        infItemDiv.style.gridTemplateColumns = "1fr";

        let icon = document.getElementsByClassName("itemIcon") as HTMLCollectionOf<HTMLElement>;
        let text = document.getElementsByClassName("itemText") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.display = "none";
        }
        for (let i = 0; i < text.length; i++) {
            text[i].style.display = "block";
        }

        nav.style.width = "auto";
        nav.style.borderRadius = "0";

        nav.style.backgroundColor = "#000";
        nav.style.color = "#4DCB4E";
        nav.style.border = "2px solid #F9F9F9";
        nav.style.textAlign = "left";

        topNav.style.backgroundColor = "#4F81B4";
        topNav.style.border = "2px solid #F9F9F9";

        let supItems = document.getElementsByClassName("supItem") as HTMLCollectionOf<HTMLElement>;
        let infItems = document.getElementsByClassName("infItem") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < supItems.length; i++) {
            supItems[i].style.cursor = "url('../../assets/images/retroCursor.png'), pointer";
        }
        for (let i = 0; i < infItems.length; i++) {
            infItems[i].style.cursor = "url('../../assets/images/retroCursor.png'), pointer";
        }

        let navImg = document.getElementById("navCloseImg") as HTMLElement;
        if (this.close) {
            navImg.style.marginRight = "10px";
            navImg.style.marginLeft = "10px";
        }
        return;
    }

    private menuIcon(): void {
        let heightNav = "60px";

        let nav = document.getElementById("nav") as HTMLElement;
        let changeItem = document.getElementById("changeItem") as HTMLElement;
        let menuChangeT = document.getElementById("menuChangeT") as HTMLElement;
        let menuChangeBis = document.getElementById("menuChangeBis") as HTMLElement;
        let topNav = document.getElementById("topNav") as HTMLElement;

        nav.style.position = "absolute";
        changeItem.style.display = "block";
        menuChangeT.style.display = "none";
        menuChangeBis.style.display = "none";
        topNav.style.display = "block";


        let supItemDiv = document.getElementById("supItemDiv") as HTMLElement;
        let infItemDiv = document.getElementById("infItemDiv") as HTMLElement;

        nav.style.gridTemplateColumns = "1fr";
        nav.style.gridTemplateRows = "3fr 7fr";
        supItemDiv.style.gridTemplateColumns = "1fr";
        infItemDiv.style.gridTemplateColumns = "1fr";

        let icon = document.getElementsByClassName("itemIcon") as HTMLCollectionOf<HTMLElement>;
        let text = document.getElementsByClassName("itemText") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < icon.length; i++) {
            icon[i].style.display = "block";
        }
        for (let i = 0; i < text.length; i++) {
            text[i].style.display = "none";
        }

        nav.style.width = "90px";
        nav.style.borderRadius = "40px";

        nav.style.backgroundColor = "rbg(0, 0, 0, 0)";
        nav.style.color = "white";
        nav.style.border = "none";
        nav.style.textAlign = "center";

        if (window.innerWidth > 700) {
            nav.style.backgroundColor = "rgb(50, 50, 50, 0.800)";
        }

        topNav.style.backgroundColor = "rgb(0, 0, 0, 0)";
        topNav.style.border = "none";


        let supItems = document.getElementsByClassName("supItem") as HTMLCollectionOf<HTMLElement>;
        let infItems = document.getElementsByClassName("infItem") as HTMLCollectionOf<HTMLElement>;

        for (let i = 0; i < supItems.length; i++) {
            supItems[i].style.cursor = "url('../../assets/images/pointer.cur'), pointer";
        }
        for (let i = 0; i < infItems.length; i++) {
            infItems[i].style.cursor = "url('../../assets/images/pointer.cur'), pointer";
        }

        return;
    }
}