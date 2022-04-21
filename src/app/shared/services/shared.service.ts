import { Injectable, OnInit } from "@angular/core";
import { Gif } from "src/app/gifs/interfaces/gifs.interface";


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public currentGif: Gif | undefined;
  public showModal: boolean = false;

  constructor() {}
}
