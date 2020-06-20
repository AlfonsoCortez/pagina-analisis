import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  slides: any ;
  slidesLength: number;
  slideIndex: number = 0;
  index: boolean = true;
  reloj: any;
  i: number = 0;

  constructor() {  }

  ngOnInit(): void {
    this.controlador(this.i);
    this.play()
  }

  play():void{
    let legendController: HTMLElement = document.getElementById('reproductor')

    if(this.index){
      this.index = false;
      legendController.innerHTML = '⏸';
      this.reloj = setInterval(this.controlador, 10000);
      console.log('%c¡El slider se esta reproduciendo!' , 'color: green;');
      return;
    }

    if(!this.index){
      this.index = true;
      legendController.innerHTML = '▶';
      clearInterval(this.reloj);
      console.log('%c¡El slider esta pausado!' , 'color: orange;');
      return;
    }

  }

  controlador(i: number = 1):void {
      this.i += i;

      let slides: NodeListOf<any> = document.querySelectorAll('.mySlides');
      // let legends: NodeListOf<any> = document.querySelectorAll('.numbertext');
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
          // legends[i].innerHTML = ``;
      }
      this.slideIndex++;
      // console.log(`%c${slideIndex}`, 'color: orange;')

      if(this.slideIndex > slides.length) {
          this.slideIndex = 1;
          // console.log(`%c${this.slideIndex}`, 'color: green;')
      }

      // legends[this.slideIndex-1].innerHTML = `${this.slideIndex} / ${slides.length}`;
      (slides[this.slideIndex-1] == undefined)
        ? (this.slideIndex =+ 2)
        : console.log('no undefined')

      slides[this.slideIndex-1].style.display = "block";
  }

}
