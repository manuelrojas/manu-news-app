import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsItemComponent } from './news-item/news-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news/:id', component: NewsItemComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
