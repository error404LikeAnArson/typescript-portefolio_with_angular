import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-en',
  templateUrl: './projects-en.component.html',
  styleUrls: ['./projects-en.component.sass']
})
export class ProjectsENComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.page();
    }

    tictactoe(): void {
        window.location.href = "https://github.com/error404LikeAnArson/java-tic_tac_toe";
        return;
    }

    longestword(): void {
        window.location.href = "https://github.com/error404LikeAnArson/java-longest_word";
        return;
    }

    calculette(): void {
        window.location.href = "https://github.com/error404LikeAnArson/java-abstract_calculator";
        return;
    }

    mastermind(): void {
        window.location.href = "https://github.com/error404LikeAnArson/c-little-prgm/blob/main/mastermind.c";
        return;
    }

    that(): void {
        window.location.href = "https://github.com/error404LikeAnArson/typescript-portefolio_with_angular";
        return;
    }

    beta(): void {
        window.location.href = "https://github.com/error404LikeAnArson/javascript-portefolio_first_try";
        return;
    }

    wix(): void {
        let wix = document.getElementById("wix") as HTMLElement;
        if(wix.style.cursor == "not-allowed"){
            wix.style.cursor = "url(\"../../assets/images/pointer.cur\"), pointer";
        }
        else{
           wix.style.cursor = "not-allowed"; 
        }
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
}
