import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsItemComponent } from './news-item/news-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news/:id', component: NewsItemComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
