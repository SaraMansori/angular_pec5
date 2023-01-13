import { Component, Input } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() character!: CharacterDTO;
}
