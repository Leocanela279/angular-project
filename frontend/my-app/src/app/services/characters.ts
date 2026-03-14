import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_URL = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) {}

  getCharacters() {
    return this.http.get(this.API_URL);
  }
}
