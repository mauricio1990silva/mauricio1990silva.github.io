import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {SearchComponent} from "./search/search.component";
import {GoogleService} from "./service/google.service";
import {ImageListComponent} from "./search/image-list/image-list.component";
import {
  MdButtonModule, MdCardModule, MdInputModule, MdProgressBarModule, MdToolbar,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CurrentPhotoComponent} from "./search/current-photo/current-photo.component";
import {ImageResultComponent} from "./search/image-result/image-result.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ImageListComponent,
    CurrentPhotoComponent,
    ImageResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    BrowserAnimationsModule,
    MdProgressBarModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdCardModule
  ],
  providers: [
    GoogleService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
