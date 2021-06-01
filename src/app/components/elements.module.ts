import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import {ImagesListComponent} from './images-list/images-list.component';
import {ImageCardComponent} from './image-card/image-card.component';

@NgModule({
  declarations: [
    ImageCardComponent,
    ImagesListComponent
  ],
  exports: [
    ImageCardComponent,
    ImagesListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    FlexLayoutModule
  ]
})
export class ElementsModule {
}
