import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './character/character.component';
import { CharacterInformationComponent } from './character/character-information/character-information.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { QueryLogComponent } from './character/query-log/query-log.component'

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterInformationComponent,
    QueryLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
