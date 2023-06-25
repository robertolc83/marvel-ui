import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterModel } from 'src/app/model/character.model';
import { CharacterDataWrapperModel } from 'src/app/model/characterDataWrapper.model';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.scss']
})
export class CharacterInformationComponent implements OnInit {

  @Input() public characterId: number;
  characterDataWrapperModel: CharacterDataWrapperModel;
  character: CharacterModel;
  imageUrl: String;

  constructor(
    public activeModal: NgbActiveModal,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.getCharacterInformation();
  }

  getCharacterInformation(): void {
    this.characterService.getById(this.characterId)
      .subscribe({
        next: (character) => {
          this.characterDataWrapperModel = character;
          this.characterDataWrapperModel.data.results.forEach(character => {
            this.character = character;
            console.log(this.character);
            if (this.character.thumbnail.extension && this.character.thumbnail.path) {
              this.imageUrl = this.character.thumbnail.path + '.' +this.character.thumbnail.extension;
            }
          });
        },
        error: (err) => {
          console.error("Error fetching character information.", err);
        }
      });
  }

}
