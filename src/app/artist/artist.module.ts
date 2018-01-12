import { ArtistsListComponent } from './artist-list/artist-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArtistAlbumsComponent } from './artist-albums/artist-albums.component'


const ROUTES: Routes = [
  { path: '', component: ArtistsListComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    HttpClientModule
  ],
  declarations: [
    ArtistsListComponent,
    ArtistAlbumsComponent
  ]
})
export class ArtistsModule { }
