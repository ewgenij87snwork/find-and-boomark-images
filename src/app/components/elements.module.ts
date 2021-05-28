import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageCardComponent} from './image-card/image-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [ImageCardComponent],
  exports: [
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ]
})
export class ElementsModule {
}
