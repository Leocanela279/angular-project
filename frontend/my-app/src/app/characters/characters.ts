import { Component, signal } from '@angular/core';
import { CharactersService } from '../services/characters';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  imports: [],
  templateUrl: './characters.html',
  styleUrl: './characters.css',
})
export class Characters implements OnInit {
  characters = signal<any[]>([]);
  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe((data: any) => {
      this.characters = data.results;
    });
  }
}
