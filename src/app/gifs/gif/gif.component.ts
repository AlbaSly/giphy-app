import { Component, Input } from "@angular/core";
import { SharedService } from "src/app/shared/services/shared.service";

@Component({
  selector: 'app-gif',
  templateUrl: 'gif.component.html'
})
export class GifComponent {
  @Input('gifData')
  public gif: any = {}

  public isLoading = true;

  public get showModal(): boolean {
    return this.showModal;
  }

  public set setShowModal(flag: boolean) {
    if (flag) document.querySelector('html')!.style.overflow = 'hidden';
    this.sharedService.showModal = flag;

    this.sharedService.currentGif = this.gif;
  }

  public constructor(private sharedService: SharedService) {}
}
