import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterDTO } from 'src/app/models/character.dto';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  BASE_URL = 'https://thronesapi.com/api/v2';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterDTO[]> {
    return this.http.get<CharacterDTO[]>(`${this.BASE_URL}/Characters`);
  }

  getCharacterById(id: string): Observable<CharacterDTO> {
    return this.http.get<CharacterDTO>(`${this.BASE_URL}/Characters/${id}`);
  }
}
