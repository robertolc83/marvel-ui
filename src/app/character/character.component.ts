import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { CharacterDataWrapperModel } from '../model/characterDataWrapper.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterInformationComponent } from './character-information/character-information.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: CharacterDataWrapperModel;


  constructor(
    private characterService: CharacterService,
    private modalService: NgbModal,

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

  openModal(characterId: number) {
    const modalRef = this.modalService.open(CharacterInformationComponent, {size: 'lg'});
    modalRef.componentInstance.characterId = characterId;
    modalRef.closed.subscribe(() => {
      this.refreshlist();
    });
  }


}
