import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-en',
  templateUrl: './profile-en.component.html',
  styleUrls: ['./profile-en.component.sass']
})
export class ProfileENComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.page();
    }

    gifOrImg(isGif: Boolean): void {
        let photo = document.getElementById("photo") as HTMLElement;
        let photo2 = document.getElementById("photo2") as HTMLElement;
        let gif = document.getElementById("gif") as HTMLElement;

        if (!isGif) {
            photo.style.display = "none";
            photo2.style.display = "none";
            gif.style.display = "block";
        }
        else {
            photo.style.display = "block";
            photo2.style.display = "block";
            gif.style.display = "none";
        }
        return;
    }

    gitPage(): void {
        window.location.href = "https://github.com/error404LikeAnArson?tab=repositories";
        return;
    }

    PDF(): void {
        let a = document.createElement('a');
        a.href = "CV.pdf";
        a.download = "CV.pdf";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
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
