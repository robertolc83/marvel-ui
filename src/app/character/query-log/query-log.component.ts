import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryLogModel } from 'src/app/model/queryLog.model';
import { CharacterService } from 'src/app/service/character.service';

@Component({
  selector: 'app-query-log',
  templateUrl: './query-log.component.html',
  styleUrls: ['./query-log.component.scss']
})
export class QueryLogComponent implements OnInit {

    queryLogs: Array<QueryLogModel>;

  constructor(
    public activeModal: NgbActiveModal,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.refreshlist();
  }

  refreshlist() {
    this.characterService
      .GetAllQueryLog()
      .subscribe({
        next: (queryLogs) => {
          this.queryLogs = queryLogs;
        },
        error: (err) => {
          console.error("Error fetching queryLogs");
        }
      });
  }

}
