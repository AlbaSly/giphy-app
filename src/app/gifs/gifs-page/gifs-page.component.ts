import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styles: [
  ]
})
export class GifsPageComponent {
  public get showModal(): boolean {
    return this.sharedService.showModal;
  }

  public constructor(private sharedService: SharedService) {}
}
