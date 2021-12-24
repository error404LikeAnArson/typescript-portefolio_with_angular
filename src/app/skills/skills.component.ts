import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.page();
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
    //     let title3 = document.getElementById("title3") as HTMLElement;
    //     let title4 = document.getElementById("title4") as HTMLElement;
    //     let title5 = document.getElementById("title5") as HTMLElement;
    //     let qualities = document.getElementsByClassName("s3Li") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "INFORMATIONS COMPLEMENTAIRES";
    //     title2.innerText = "Bureautique:";
    //     title3.innerText = "Edition d'images:";
    //     title4.innerHTML = "<span class=\"alinea\"></span>LOISIRS";
    //     title5.innerHTML = "<span class=\"alinea\"></span>COMPÉTENCES <span class=\"alinea2\">GLOBALES</span>";

    //     qualities[0].innerText = "Organisation";
    //     qualities[1].innerText = "Rigueur";
    //     qualities[2].innerText = "Autonomie";
    //     qualities[3].innerText = "Curiosité";
    //     return;
    // }

    // public enTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;
    //     let title2 = document.getElementById("title2") as HTMLElement;
    //     let title3 = document.getElementById("title3") as HTMLElement;
    //     let title4 = document.getElementById("title4") as HTMLElement;
    //     let title5 = document.getElementById("title5") as HTMLElement;
    //     let qualities = document.getElementsByClassName("s3Li") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "ADDITIONAL INFORMATION";
    //     title2.innerText = "Office technology:";
    //     title3.innerText = "Image editing:";
    //     title4.innerHTML = "<span class=\"alinea\"></span>HOOBBIES";
    //     title5.innerHTML = "<span class=\"alinea\"></span>GLOBAL<span class=\"alinea2\">COMPETENCIES</span>";

    //     qualities[0].innerText = "Organization";
    //     qualities[1].innerText = "Rigour";
    //     qualities[2].innerText = "Autonomy";
    //     qualities[3].innerText = "Curiosity";
    //     return;
    // } 
}
