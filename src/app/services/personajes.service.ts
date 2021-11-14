 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
import { PersonajesResponse } from '../models/personajes.interface';

@Injectable({
    providedIn: 'root',
})
export class PersonajesService {
    private URL = 'http://hp-api.herokuapp.com/api/characters/house';

    constructor(
        private httpClient: HttpClient) {
            
    }

    public getPersonajes(casa: string): Observable<PersonajesResponse[] | null> {
        return this.httpClient.get<PersonajesResponse[]>(`${this.URL}/${casa}`);
    }

}