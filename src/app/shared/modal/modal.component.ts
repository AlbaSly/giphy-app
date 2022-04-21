import { Component, Input, OnInit } from "@angular/core";
import { Gif } from "src/app/gifs/interfaces/gifs.interface";
import { SharedService } from "../services/shared.service";

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: [
    'modal.scss'
  ]
})
export class ModalComponent implements OnInit {
  public get gifSelected(): Gif | undefined {
    return this.sharedService.currentGif;
  }

  public isLoading = true;

  public set setShowModal(flag: boolean) {
    if (!flag) document.querySelector('html')!.style.overflow = 'visible';
    this.sharedService.showModal = flag;
  }

  public constructor(private sharedService: SharedService) {}

  public ngOnInit(): void {
    document.querySelector('#modal')!.addEventListener('click', (ev) => {
      if (ev.target === document.querySelector('#modal')) {
        this.setShowModal=false;
      }
    });
  }

  public download(): void {
    const link = document.createElement('a');
    link.href = this.gifSelected!.images.original.url;
    link.download = this.gifSelected!.slug;
    link.click();
  }
}
