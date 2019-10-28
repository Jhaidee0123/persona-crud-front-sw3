import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Persona} from '../model/persona';
import {Endpoints} from '../util/endpoints';
import {Header} from '../util/header';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }


  listarPersona(): Observable<Persona[]>{
    return this.http.get<Persona[]>("https://localhost:44330/api/personas");
  }

  insert(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>("https://localhost:44330/api/personas", persona,{headers: Header.HEADER_JSON});
  }

eliminar(id:number){
   return this.http.delete<Persona>(Endpoints.ELIMINAR.concat(id.toString()).concat("/persona"),{headers: Header.HEADER_TEXT})
}






}
