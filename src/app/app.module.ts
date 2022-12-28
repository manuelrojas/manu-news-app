import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotCmsService } from './shared/dotcms.service';
import { MenuComponent } from './menu/menu.component';
import { TimeAgoPipe } from './shared/pipe/time-ago.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { FilterDateComponent } from './filter-date/filter-date.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewsItemComponent,
    TimeAgoPipe,
    PageNotFoundComponent,
    FilterDateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DotCmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
