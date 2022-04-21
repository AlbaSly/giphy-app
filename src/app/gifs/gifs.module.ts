import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { GifsListComponent } from './gifs-list/gifs-list.component';
import { SharedModule } from '../shared/shared.module';
import { GifComponent } from './gif/gif.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearcherComponent,
    GifsListComponent,
    GifComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
