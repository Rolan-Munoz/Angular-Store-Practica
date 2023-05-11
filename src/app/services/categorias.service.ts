import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategorias } from '../categorias.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private http: HttpClient
  ) { }

  public ObtenerCategoriasRest(): Observable<ICategorias[]> {
    const urlEndPoint: string = "http://localhost:3002/categorias"
    return this.http.get<ICategorias[]>(urlEndPoint);

}
}