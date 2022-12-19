import { Component, OnInit, Input } from '@angular/core';
import { ApiservService } from '../apiserv.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']

})
export class GalleryComponent implements OnInit {
  @Input()listadoFotos:any;
  originales:any[]=[];
  fotOriginal:any=``;
  logs = [];
  constructor(private _api:ApiservService) { }
  
  ngOnInit() {
   
  }


}
