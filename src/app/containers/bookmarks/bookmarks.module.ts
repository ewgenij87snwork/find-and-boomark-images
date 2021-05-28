import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ElementsModule} from '../../components/elements.module';


@NgModule({
  declarations: [
    BookmarksComponent
  ],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    FlexLayoutModule,
    ElementsModule
  ]
})
export class BookmarksModule { }
