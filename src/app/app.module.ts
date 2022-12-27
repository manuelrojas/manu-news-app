import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotCmsService } from './shared/dotcms.service';
import { MenuComponent } from './menu/menu.component';
import { TimeAgoPipe } from './shared/pipe/time-ago.pipe';

@NgModule({
  declarations: [AppComponent, MenuComponent, TimeAgoPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DotCmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
