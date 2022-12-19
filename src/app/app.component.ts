import { Component ,Input} from '@angular/core';
import { ApiservService } from './apiserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlickGular';
  listadoAlbum:any[]=[];

  constructor (private _api:ApiservService){
      this.buscarAlbums();
  }
  buscarAlbums(){
    this._api.getAlbums().subscribe(result=>
      {
        this.listadoAlbum=result.photosets.photoset;
      });
  }



}
