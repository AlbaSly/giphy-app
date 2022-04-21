import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  public get recentSearches(): string[] {
    return this.gifsService.recentSearches;
  }

  public searchGifs(query: string): void {
    this.gifsService.searchGifs(query);
  }

  constructor(private gifsService: GifsService) {}

}
