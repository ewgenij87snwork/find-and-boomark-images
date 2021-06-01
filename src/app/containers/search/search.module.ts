import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';

import {ElementsModule} from '../../components/elements.module';
import {SearchRoutingModule} from './search-routing.module';

import {SearchComponent} from './search.component';

@NgModule({
  declarations: [SearchComponent],
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
