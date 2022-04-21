import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    SidebarComponent,
    SpinnerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent,
    ModalComponent
  ]
})
export class SharedModule { }
