import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CoursesListComponent } from "./modules/home/components/courses-list/courses-list.component";
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    BrowserModule,
    CoursesListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
