import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FeaturedProjectsComponent } from './featured-projects/featured-projects.component';
import { PastProjectsComponent } from './past-projects/past-projects.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FeaturedProjectsComponent,
    PastProjectsComponent,
    AboutComponent,
    FooterComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
