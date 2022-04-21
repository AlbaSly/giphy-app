import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html'
})
export class GifsListComponent {
  public get gifsList(): Gif[] {
    return this.gifsService.gifsList;
  }

  constructor(private gifsService: GifsService) {}

}
