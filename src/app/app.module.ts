import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DotCmsService } from './shared/dotcms.service';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DotCmsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
