import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservService {

  pagina:number=1;
  porPagina:number=500;
  api_key:string='';
  user_id:string ='';

  constructor(private http:HttpClient) { }

  getAlbums():Observable<any>{
    const URLAlbums='https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key='+this.api_key+'&user_id='+this.user_id+'&format=json&nojsoncallback=1';
    return(this.http.get(URLAlbums));
  }

  getPhotos(idPhotos:any):Observable<any>{
    const Photos='https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key='+this.api_key+'&photoset_id='+idPhotos+'&user_id='+this.user_id+'&per_page='+this.porPagina+'&format=json&nojsoncallback=1';
    return(this.http.get(Photos));
  }

  getOriginals(idPhoto:any):Observable<any>{
    const Original='https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key='+this.api_key+'&photo_id='+idPhoto+'&format=json&nojsoncallback=1';
    return(this.http.get(Original));
  }
} 
