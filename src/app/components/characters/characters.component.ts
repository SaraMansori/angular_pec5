import { Component, OnInit } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.dto';
import { DISPLAY_MODES } from 'src/app/models/displayMode.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters!: CharacterDTO[];
  isLoading: boolean = true;
  displayMode: typeof DISPLAY_MODES[number] = 'CARDS';
  displayedColumns: string[] = ['firstName', 'lastName', 'title', 'family'];

  constructor(private charactersService: CharacterService) {}

  ngOnInit(): void {
    this.charactersService.getAllCharacters().subscribe((characters) => {
      this.characters = characters;
      this.isLoading = false;
    });
  }

  changeDisplayMode(mode: typeof DISPLAY_MODES[number]) {
    this.displayMode = mode;
  }
}
