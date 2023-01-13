import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDTO } from 'src/app/models/character.dto';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character!: CharacterDTO;
  isLoading = true;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const identifier = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as string;

    this.characterService
      .getCharacterById(identifier)
      .subscribe((character) => {
        this.isLoading = false;

        if (!character) {
          this.router.navigateByUrl('/');
        }

        this.character = character;
      });
  }
}
