import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuButton: HTMLElement;
  contenedorEnlaces:HTMLElement;
  toggle:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.menuButton = document.getElementById('contenedor-btnMenu');
    this.contenedorEnlaces = document.getElementById('enlaces');
  }

  openMenu(): void{
    console.log(`%cFue cliqueado!`, 'color: yellow;')

    if(this.toggle){
      this.contenedorEnlaces.classList.remove('dos');
      this.contenedorEnlaces.className = ('enlaces uno');
      this.toggle = false;
      return;
    }

    if(!this.toggle){
      this.contenedorEnlaces.className = ('dos');
      this.toggle = true;
      console.log(`%cManejo de error!
      Estado: ${this.toggle}`, 'color: red;')
      return;
    }

  }
}
