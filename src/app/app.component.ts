import { Component } from '@angular/core';
import { CharacterService } from './service/character.service';
import { CharacterDataWrapperModel } from './model/characterDataWrapper.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  characters: CharacterDataWrapperModel | undefined;

  constructor(
    private characterService: CharacterService,
  ) {

  }

  ngOnInit(): void {
    this.refreshlist();
  }

  refreshlist(): void {
    this.characterService
      .getAll()
      .subscribe({
        next: (characters) => {
          console.log(characters);
          this.characters = characters;
        },
        error: (err) => {
          console.error("Error fetching characters", err);
        }
      });
  }

}
