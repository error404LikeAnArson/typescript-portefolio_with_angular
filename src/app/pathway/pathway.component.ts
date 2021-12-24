import { Component, OnInit, Input } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-pathway',
    templateUrl: './pathway.component.html',
    styleUrls: ['./pathway.component.sass']
})
export class PathwayComponent implements OnInit {
    protected mobile: Boolean;
    protected checked: Boolean;
    protected previousIndex: number;
    protected langFr: Boolean;

    constructor() {
        this.mobile = this.testMobile();
        this.checked = false;
        this.previousIndex = -1;
        this.langFr = true; //GlobalComponent.langFr;
    }

    @Input() lang: Boolean = true;

    ngOnInit(): void {
        this.tooLong();
        this.testMobile();
        this.page();
    }

    @HostListener('window:resize')
    onResize() {
        this.tooLong();
        this.tooShort();
        let test:Boolean = this.testMobile();
        if(!test){
            this.notHoverBase();
        }
    }

    tooLong(): void {
        let TLAc = document.getElementById("tooLongAc");
        let TLS = document.getElementById("tooLongS");
        let TLM = document.getElementById("tooLongM");
        let TLMI = document.getElementById("tooLongMI");
        let TLAd = document.getElementById("tooLongAd");

        if (window.innerWidth < 450) {
            if (TLAc !== null) {
                TLAc.innerText = "d'accompa- gnement";
            }
            if (TLS !== null) {
                TLS.innerText = "2 se- maines";
            }
        }

        if (window.innerWidth < 380) {
            if (TLM !== null) {
                TLM.innerText = "mathéma- tique,";
            }
            if (TLMI !== null) {
                TLMI.innerText = "Mathéma- tique- Informatique,";
            }
            if (TLAd !== null) {
                TLAd.innerText = "adminis- tratives";
            }
        }

        return;
    }

    tooShort(): void {
        let TLAc = document.getElementById("tooLongAc");
        let TLS = document.getElementById("tooLongS");
        let TLM = document.getElementById("tooLongM");
        let TLMI = document.getElementById("tooLongMI");
        let TLAd = document.getElementById("tooLongAd");

        if (window.innerWidth >= 450) {
            if (TLAc !== null) {
                TLAc.innerText = "d'accompagnement";
            }
            if (TLS !== null) {
                TLS.innerText = "2 semaines";
            }
        }

        if (window.innerWidth < 380) {
            if (TLM !== null) {
                TLM.innerText = "mathématique,";
            }
            if (TLMI !== null) {
                TLMI.innerText = "Mathématique-Informatique,";
            }
            if (TLAd !== null) {
                TLAd.innerText = "administratives";
            }
        }
        return;
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
        let contentRight = document.getElementsByClassName("contentRight") as HTMLCollectionOf<HTMLElement>;
        let contentLeft = document.getElementsByClassName("contentLeft") as HTMLCollectionOf<HTMLElement>;
        
        contentRight[index].style.transform = "scale(1.1)";
        contentRight[index].style.borderRadius = "20px";
        contentRight[index].style.border = "2px dashed rgba(255, 255, 255, 0.514)";
        contentRight[index].style.zIndex = "5";
        contentLeft[index].style.transform = "scale(1.1)";
        contentLeft[index].style.borderRadius = "20px";
        contentLeft[index].style.backgroundColor = "#5f0000";
        return;
    }

    notHoverBase(): void {
        let contentRight = document.getElementsByClassName("contentRight") as HTMLCollectionOf<HTMLElement>;
        let contentLeft = document.getElementsByClassName("contentLeft") as HTMLCollectionOf<HTMLElement>;
        let contentTop = document.getElementsByClassName("contentTop") as HTMLCollectionOf<HTMLElement>;
        let contentBottom = document.getElementsByClassName("contentBottom") as HTMLCollectionOf<HTMLElement>;

        contentRight[this.previousIndex].style.transform = "scale(1)";
        contentRight[this.previousIndex].style.border = "none";
        contentRight[this.previousIndex].style.borderBottom = "1px solid transparent";
        contentRight[this.previousIndex].style.borderImage = "radial-gradient(white, #5f0000)"
        contentRight[this.previousIndex].style.borderImageSlice = "1";
        contentRight[this.previousIndex].style.borderRadius = "0";
        contentRight[this.previousIndex].style.zIndex = "3";
        contentLeft[this.previousIndex].style.transform = "scale(1)";
        contentLeft[this.previousIndex].style.backgroundColor = "rgb(0, 0, 0, 0)";
        contentTop[0].style.borderRadius = "20px 20px 0 0";
        contentBottom[0].style.borderRadius = "0 0 20px 20px";
        contentBottom[0].style.borderBottom = "none";
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
    //     let title2 = document.getElementById("title2") as HTMLElement;
    //     let expDate1 = document.getElementById("expDate1") as HTMLElement;
    //     let expDate2 = document.getElementById("expDate2") as HTMLElement;
    //     let contentRight = document.getElementsByClassName("contentRight") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "FORMATIONS";
    //     title2.innerText = "EXPÉRIENCES PROFESSIONNELLES";
    //     expDate1.innerHTML = "octobre 2021 - <span id=\"tooLongS\">2 semaines</span>";
    //     expDate2.innerText = "juil-août 2012 - 6 saisons";

    //     contentRight[0].innerText = "Formation de developpeur web, AFPA La valette (en cours).";
    //     contentRight[1].innerText = "Complétion Formation pré-qualifiante Parcours Tremplin Numérique 800h (Toulon).";
    //     contentRight[2].innerHTML = "E2C (organisme <span id=\"tooLongAc\">d'accompagnement</span> à l'insersion professionnel, La Garde).";
    //     contentRight[3].innerHTML = "Licence 2 dans divers parcours de <span id=\"tooLongM\">mathématique,</span> Aix-Marseille Université (non obtenue).";
    //     contentRight[4].innerHTML = "Validation Licence 1 <span id=\"tooLongMI\">Mathématique-Informatique,</span> Aix-Marseille Université.";
    //     contentRight[5].innerText = "PACES - Première Année Commune aux Études de Santé, Aix-Marseille Université (non obtenue).";
    //     contentRight[6].innerText = "Obtention Baccalauréat général Scientifique, lycée Maintenon (Hyères).";
    //     contentRight[7].innerHTML = "Stage, Opérations <span id=\"tooLongAd\">administratives</span> - Mairie de Hyères (Var).";
    //     contentRight[8].innerText = "Rayonniste-Préparateur de commandes - Pharmacie de Porto (Ota - Corse).";
    //     return;
    // }

    // public enTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;
    //     let title2 = document.getElementById("title2") as HTMLElement;
    //     let expDate1 = document.getElementById("expDate1") as HTMLElement;
    //     let expDate2 = document.getElementById("expDate2") as HTMLElement;
    //     let contentRight = document.getElementsByClassName("contentRight") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "FORMATIONS";
    //     title2.innerText = "WORK EXPERIENCES";
    //     expDate1.innerHTML = "october 2021 - <span id=\"tooLongS\">2 weeks</span>";
    //     expDate2.innerText = "july-august 2012 - 6 seasons";

    //     contentRight[0].innerText = "Web development formation, AFPA La valette (in progress).";
    //     contentRight[1].innerText = "Completion Pre-qualifying formation \"Parcours Tremplin Numérique\" 800h (Toulon).";
    //     contentRight[2].innerHTML = "E2C (professional insersion support organization, La Garde).";
    //     contentRight[3].innerHTML = "Second degree in various courses of mathematics, Aix-Marseille University (not obtained).";
    //     contentRight[4].innerHTML = "Validation first degree Mathematique- Computer scince, Aix-Marseille University.";
    //     contentRight[5].innerText = "PACES - First Common Year of Health Studies, Aix-Marseille University (not obtained).";
    //     contentRight[6].innerText = "Obtained General Baccalaureate in Science, Maintenon high school (Hyères).";
    //     contentRight[7].innerHTML = "Internship, administrative operations - Hyères Town Hall (Var).";
    //     contentRight[8].innerText = "Pharmacy order preparer - Pharmacy of Porto (Ota - Corse).";
    //     return;
    // }
}
