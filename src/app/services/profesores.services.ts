 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
import { ProfesoresResponse } from '../models/profesores.interface';

@Injectable({
    providedIn: 'root',
})
export class ProfesoresService {
    private URL = 'http://hp-api.herokuapp.com/api/characters/staff';

    constructor(
        private httpClient: HttpClient) {
            
    }

    public getProfesores(): Observable<ProfesoresResponse[] | null> {
        return this.httpClient.get<ProfesoresResponse[]>(`${this.URL}`);
    }

}