import { Component, OnInit , Input} from '@angular/core';
import { ApiservService } from '../apiserv.service';

@Component({
  selector: 'app-cntimagen',
  templateUrl: './cntimagen.component.html',
  styleUrls: ['./cntimagen.component.css']
})
export class CntimagenComponent implements OnInit {
  listaOriginal:any;
  fotOriginal:any[]=[];
  fotosize:any='';
  devolver:string='';

  @Input()idFoto:any;

  constructor(private _api:ApiservService) {

   }

   ngOnInit(): void {
     this.buscarOriginal();
   }

  buscarOriginal():any{
    this._api.getOriginals(this.idFoto).subscribe(result=>
      {
        this.fotOriginal=result.sizes.size;
        this.fotOriginal.forEach((element) => {
          if (element.label=="Large Square"){
            this.listaOriginal=element.source;
          }
        });
      });
 
  }
}

