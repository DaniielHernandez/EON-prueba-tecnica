import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../interfaces/persona';

const personasUrl = 'http://localhost:3000/personas';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Persona[]>(personasUrl);
  }

  postPersona(personaNueva: Persona) {
    return this.http.post<Persona>(personasUrl, personaNueva);
  }

  putPersona(personaUpdate: Persona) {
    return this.http.put<Persona>(personasUrl+'/'+personaUpdate.id,personaUpdate);
  }

  deletePersona(personaDelete: Persona) {
    return this.http.delete<Persona>(personasUrl+'/'+personaDelete.id);
  }

}
