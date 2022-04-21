import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: [
    'searcher.scss'
  ]
})
export class SearcherComponent implements OnInit{
  @ViewChild('txtSearch')
  private _txtSearch!: ElementRef<HTMLInputElement>;

  private _txtSearchHTML: Element = null!;

  public constructor(private gifsService: GifsService) {}

  public ngOnInit(): void {
    this._txtSearchHTML = document.querySelector('.txtSearch')!;
  }

  public search(): void {
    const value: string = this._txtSearch.nativeElement.value;

    try {
      if (!value.trim()) return;

      this.gifsService.searchGifs(value.trim());

    } catch (error: any) {

    } finally {
      this._txtSearch.nativeElement.value = '';
    }
  }
}
