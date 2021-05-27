import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ElementsModule} from '../../components/elements.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ElementsModule,
    MatGridListModule
  ]
})
export class SearchModule {
}
