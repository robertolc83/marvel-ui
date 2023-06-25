import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { CharacterDataWrapperModel } from '../model/characterDataWrapper.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CharacterInformationComponent } from './character-information/character-information.component';
import { CharacterModel } from '../model/character.model';
import { QueryLogModel } from '../model/queryLog.model';
import { QueryLogComponent } from './query-log/query-log.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  characters: CharacterDataWrapperModel;
  queryLog: QueryLogModel;


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

  openModal(character: CharacterModel) {
    const modalRef = this.modalService.open(CharacterInformationComponent, {size: 'lg'});
    modalRef.componentInstance.characterId = character.id;
    this.addQueryLog(character);
    modalRef.closed.subscribe(() => {
      this.refreshlist();
    });
  }

  addQueryLog(character: CharacterModel) {
    this.newQueryLog(character);
    this.characterService
      .addQueryLog(this.queryLog)
      .subscribe({
        next: () => {
          console.log("QueryLog successfully added" + this.queryLog.characterName);
        },
        error: (err) => {
          console.error("Error creating queryLog.", err);
        }
      });
  }

  newQueryLog(character: CharacterModel) {
    this.queryLog = new QueryLogModel();
    this.queryLog.characterName = character.name;
    this.queryLog.characterId = character.id;
  }

  openQueryLog() {
    const modalRef = this.modalService.open(QueryLogComponent, {size: 'xl'});
    modalRef.closed.subscribe(() => {
      this.refreshlist();
    });
  }

}
