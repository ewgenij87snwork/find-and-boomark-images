import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./containers/search/search.module').then(m => m.SearchModule)
  },{
    path: 'bookmarks',
    loadChildren: () => import('./containers/bookmarks/bookmarks.module').then(m => m.BookmarksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
