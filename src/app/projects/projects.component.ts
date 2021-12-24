import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

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

    // public frTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;
    //     let projets = document.getElementsByClassName("projLi") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "PROJETS";

    //     projets[0].innerHTML = "<span class=\"toBoldAndLine\">Tic-Tac-Toe</span>: <span class=\"toIta\">[projet solo; JAVA]</span> un jeu de morpion contenant 3 grilles (3x3, 4x4, 3x3x3) et 3 niveau de difficulté.<br> <span class=\"alinea\"></span>Fonctionnel dans le terminal, interface graphique en développement.";
    //     projets[1].innerHTML = "<span class=\"toBoldAndLine\">Longestword</span>: <span class=\"toIta\">[projet de groupe; JAVA]</span> un jeu style \'des chiffre et des lettres\' sans les chiffres. Jouable dans le terminal grâce à un dictionnaire intégré.";
    //     projets[2].innerHTML = "<span class=\"toBoldAndLine\">Calculator</span>: <span class=\"toIta\">[projet de groupe; JAVA]</span> une calculatrice créee en se basant sur des classes abstraites.";
    //     projets[3].innerHTML = "<span class=\"toBoldAndLine\">Mastermind</span>: <span class=\"toIta\">[projet solo; C]</span> un petit mastermind dans le terminal.";
    //     projets[4].innerHTML = "<span class=\"toBoldAndLine\">Site Internet</span>: <span class=\"toIta\">[projet de groupe; sans programmation]</span> un site présentant notre session au parcours tremplin numérique.<br> <span class=\"alinea\"></span>Réalisé avec WIX.";
    //     projets[5].innerHTML = "<span class=\"toBoldAndLine\">Site Internet</span>: <span class=\"toIta\">[projet solo; HTML/CSS/Java Script]</span> la version beta de ce site sans framework.";
    //     projets[6].innerHTML = "<span class=\"toBoldAndLine\">Site Internet</span>: <span class=\"toIta\">[projet solo; HTML/SASS/Type Script]</span> ce site.<br> <span class=\"alinea\"></span>Réalisé avec Angular et Figma.";
    //     return;
    // }

    // public enTranslate(): void {
    //     let title1 = document.getElementById("title1") as HTMLElement;
    //     let projets = document.getElementsByClassName("projLi") as HTMLCollectionOf<HTMLElement>;

    //     title1.innerText = "PROJECTS";

    //     projets[0].innerHTML = "<span class=\"toBoldAndLine\">Tic-Tac-Toe</span>: <span class=\"toIta\">[solo project; JAVA]</span> a game of tic-tac-toe containing 3 grids (3x3, 4x4, 3x3x3) and 3 difficulty levels.<br> <span class=\"alinea\"></span>Functional in the terminal, graphical interface in development.";
    //     projets[1].innerHTML = "<span class=\"toBoldAndLine\">Longestword</span>: <span class=\"toIta\">[group project; JAVA]</span> a game where you have to find the longest word with a given set of letters. Playable in the terminal thanks to an integrated dictionary.";
    //     projets[2].innerHTML = "<span class=\"toBoldAndLine\">Calculator</span>: <span class=\"toIta\">[group project; JAVA]</span> a calculator created based on abstract classes.";
    //     projets[3].innerHTML = "<span class=\"toBoldAndLine\">Mastermind</span>: <span class=\"toIta\">[solo project; C]</span> a small mastermind in the terminal.";
    //     projets[4].innerHTML = "<span class=\"toBoldAndLine\">Web site</span>: <span class=\"toIta\">[group project; without programming]</span> a site presenting our session at the 'parcours tremplin numérique'.<br> <span class=\"alinea\"></span>Made with WIX.";
    //     projets[5].innerHTML = "<span class=\"toBoldAndLine\">Web site</span>: <span class=\"toIta\">[solo project; HTML/CSS/Java Script]</span> the beta version of this site without framework.";
    //     projets[6].innerHTML = "<span class=\"toBoldAndLine\">Web site</span>: <span class=\"toIta\">[solo project; HTML/SASS/Type Script]</span> this site.<br> <span class=\"alinea\"></span>Made with Angular et Figma.";
    //     return;
    // } 
}
