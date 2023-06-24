import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { CharacterDataWrapperModel } from '../model/characterDataWrapper.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: CharacterDataWrapperModel | undefined;


  constructor(
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.refreshlist();
  }

  refreshlist(): void {
    this.characterService
      .getAll()
      .subscribe({
        next: (characters) => {
          this.characters = characters;
        },
        error: (err) => {
          console.error("Error fetching characters", err);
        }
      });
  }


}
