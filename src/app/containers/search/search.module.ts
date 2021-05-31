import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {SearchComponent} from './search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ElementsModule} from '../../components/elements.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

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
    FlexLayoutModule,
    FormsModule,
    MatPaginatorModule
  ]
})
export class SearchModule {
}
