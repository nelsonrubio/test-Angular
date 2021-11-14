 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
import { PersonajesResponse } from '../models/personajes.interface';

@Injectable({
    providedIn: 'root',
})
export class EstudiantesService {
    private URL = 'http://hp-api.herokuapp.com/api/characters/students';

    constructor(
        private httpClient: HttpClient) {
            
    }

    public getEstudiantes( ): Observable<PersonajesResponse[] | null> {
        return this.httpClient.get<PersonajesResponse[]>(`${this.URL}`);
    }

}