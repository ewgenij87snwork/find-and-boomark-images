import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ImageCardComponent} from "./image-card/image-card.component";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [ImageCardComponent],
  exports: [
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ElementsModule { }
