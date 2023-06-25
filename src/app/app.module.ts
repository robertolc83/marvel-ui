import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CharacterComponent } from './character/character.component';
import { CharacterInformationComponent } from './character/character-information/character-information.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
