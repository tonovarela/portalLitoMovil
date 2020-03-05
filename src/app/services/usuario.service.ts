import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImenuItem } from '../interfaces/ImenuItem';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getMenuOpts() {
    return this.http.get<ImenuItem>('/assets/data/menu.json');
    }
}
