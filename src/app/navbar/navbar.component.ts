import { EmitterVisitorContext } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  albumSeleccionado:any=``;
  
  @Output()listaFotos:any;
  @Input() listadoAlbums:any;
  constructor(private _api:ApiservService) { }

  ngOnInit(): void {
  }
  
  seleccionar():void{
    this._api.getPhotos(this.albumSeleccionado).subscribe(result=>
      {
        this.listaFotos=result.photoset.photo;
        console.log(this.listaFotos);
      });
  }

}
