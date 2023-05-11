import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBanner } from '../banner.interface';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private http: HttpClient
  ) { }

  public ObtenerBannerRest(): Observable<IBanner[]> {
    const urlEndPoint: string = "http://localhost:3002/banners"
    return this.http.get<IBanner[]>(urlEndPoint);
  }
}
